import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 realtive">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
