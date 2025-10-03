import React, { JSX } from "react";

interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  children,
}: CardProps) => {
  return (
    <div className="ui:border ui:p-4">
      <h1 className="ui:text-xl ui:border-b ui:pb-2">{title}</h1>
      <div>{children}</div>
    </div>
  );
};
