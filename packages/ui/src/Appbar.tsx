import { Button } from "./Button";

interface AppBarProps {
  user?: {
    name?: string | null;
  };
  //   figure out what type should be here as per next-auth
  onSignIn: () => void;
  onSignOut: () => void;
}

export const AppBar = ({ user, onSignIn, onSignOut }: AppBarProps) => {
  return (
    <div className="ui:flex ui:justify-between ui:border-b ui:px-4 ui:border-slate-300">
      <div className="ui:text-lg ui:flex ui:flex-col ui:justify-center ">
        PayTm
      </div>

      <div className="ui:flex ui:flex-col ui:pt-2">
        <Button onClick={user ? onSignOut : onSignIn}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
