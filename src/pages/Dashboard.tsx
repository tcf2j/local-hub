import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";

function Dashboard() {
  const { session, signOut } = UserAuth();

  return (
    <div className="flex w-full">
      <h2>Welcome, {session?.user?.email}</h2>
    </div>
  );
}

export default Dashboard;
