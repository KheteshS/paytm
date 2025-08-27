import React from "react";

export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ui:flex ui:flex-col ui:justify-center ui:items-center ui:h-full">
      {children}
    </div>
  );
};
