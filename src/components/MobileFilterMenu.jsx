import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { MobileGenreControls } from "./MobileGenreControls";

export const MobileFilterMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevValue) => {
      return !prevValue;
    });
  };
  useEffect(() => {
    const SIDEBAR = document.getElementById("sidebar-container");
    if (sidebarOpen) {
      SIDEBAR.classList.add("sidebar-open");
    } else {
      SIDEBAR.classList.remove("sidebar-open");
    }
  }, [sidebarOpen]);
  return (
    <div id="sidebar-container" className="sidebar-container">
      <HamburgerMenu handleSidebar={toggleSidebar} sidebarState={sidebarOpen} />
      <MobileGenreControls
        handleSidebar={toggleSidebar}
        sidebarState={sidebarOpen}
      />
    </div>
  );
};
