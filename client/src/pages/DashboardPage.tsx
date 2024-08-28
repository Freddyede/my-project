import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.tsx";

export function DashboardPage() {
  const {logOut}: any = useContext(AuthContext);
  return (
    <>
      <button onClick={logOut}>Logout</button>
      <p>Dashboard work !!!</p>
    </>
  );
}