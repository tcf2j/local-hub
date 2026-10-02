import React from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <TopNavBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
