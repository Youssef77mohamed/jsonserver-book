

import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
// import Test from "../components/Test";

function HomeLayout() {
  return <>
    <MainNavbar />
    <Outlet />




{/* Compound Components */}
    {/* <Test>
      <Test.Title>New title</Test.Title>
      <Test.Description>New description</Test.Description>
      <Test.Footer></Test.Footer>
    </Test> */}
  </>;
}

export default HomeLayout;

