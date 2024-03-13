import { ReactNode } from "react";
import Navbar from "./navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout"><Navbar/></div>
      
      {children}
    </>
  );
};

export default Layout;
