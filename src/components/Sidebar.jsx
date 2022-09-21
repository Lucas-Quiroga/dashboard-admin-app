import React from "react";
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//icons
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
//tooltip
import { TooltipComponent } from "@syncfusion/ej2-react-popups"; //The Tooltip component displays a pop-up containing an information or a message when you hover, click, focus, or touch an element. The information displayed in the Tooltip can include simple text, images, hyperlinks, or custom templates. In mobile devices, to display the Tooltip, you need to tap and hold the target elements.
import { links } from "../data/dummy";

export default function Sidebar() {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="items-center">
              <SiShopware /> <span>Shoppy</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
