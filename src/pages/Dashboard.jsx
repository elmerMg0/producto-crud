import React from "react";
import Header from "../components/Header";
import UserForm from "../components/dashboard/UserForm";
import CrudUser from "../components/dashboard/CrudUser";
import Authentication from "../components/dashboard/Authentication";
const Dashboard = () => {
  return (
    <>
      <Header />
      <CrudUser/>
      <Authentication/>
    </>
  );
};

export default Dashboard;
