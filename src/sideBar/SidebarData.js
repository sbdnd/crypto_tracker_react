import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Start",
    path: "/coins",
    icon: <FaIcons.FaRocket />,
    cName: "nav-text",
  },
  {
    title: "Contact me",
    path: "/contact-me",
    icon: <FaIcons.FaTelegramPlane />,
    cName: "nav-text",
  },
];
