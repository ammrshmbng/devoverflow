import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 realtive">{children}</main>
  );
};

export default AuthLayout;
