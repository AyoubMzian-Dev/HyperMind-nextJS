
import { LeftSideBar } from "../components/ui/leftSideBar";
//import { GoHomeFill } from "react-icons/go";
//import { LuLayoutDashboard } from "react-icons/lu";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body 
        className={` antialiased`}
        >
            <LeftSideBar/>
          {children}
        </body>
      </html>
    );
  }