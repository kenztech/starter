import { Outlet } from "react-router";
import { AuthProvider } from "../context/auth";

const Root = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default Root;
