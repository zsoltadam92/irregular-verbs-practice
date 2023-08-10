import { Outlet } from "react-router-dom";
import BasicAppBar from "../components/header/BasicAppBar";

const RootPage = () => {
  return (
    <>
      <BasicAppBar />
      <Outlet />
    </>
  );
};

export default RootPage;
