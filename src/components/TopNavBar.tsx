import React from "react";

function TopNavBar() {
  return (
    <div className="navbar flex items-center justify-around w-full h-fit m-auto border border-amber-400">
      <div className="search">
        <form>
          <input id="search-input" type="search" placeholder="Search Here" />
        </form>
      </div>
      <div className="light-mode">
        <p>☀️</p>
      </div>
      <div className="notifications">
        <p>🔔</p>
      </div>
      <div className="settings">
        <p>⚙️</p>
      </div>
      <div className="Profile">
        <p>🧑🏽</p>
      </div>
    </div>
  );
}

export default TopNavBar;
