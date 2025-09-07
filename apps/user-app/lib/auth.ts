import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@repo/db/client";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "Enter your phone number",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(
        credentials: Record<"phone" | "password", string> | undefined
      ) {
        // TODO: OTP validation and zod validation
        if (!credentials) {
          return null;
        }
        const hashedPass = await bcrypt.hash(credentials.password, 10);
        let existingUser = null;
        try {
          existingUser = await db.user.findFirst({
            where: {
              number: credentials.phone,
            },
          });
        } catch (error) {
          console.error("Error fetching user:", error);
          return null;
        }

        if (existingUser) {
          const passValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );

          if (passValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              number: existingUser.number,
            };
          }
          return null;
        }

        try {
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPass,
            },
          });

          return {
            id: user.id.toString(),
            name: user.name,
            number: user.number,
          };
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/dashboard`; // Always go here after signin
    },
  },
};
