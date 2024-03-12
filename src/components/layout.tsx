import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}


const Layout = ({children}:Props) => {
return (
<>

<div className="layout"></div>
{children}


</>

)

}

export default Layout;