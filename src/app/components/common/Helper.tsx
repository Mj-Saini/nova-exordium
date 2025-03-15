import { DashboardIcon, NotificationsIcon, ProjectIcon, TempleteIcon } from "./Icons";

export const headerData = [
  {
    tabs: "home",
    path: "/#home",
  },

  {
    tabs: "Our Offerings",
    path: "/",
    submenu: [
      { label: "solutions", path: "/#solutions" },
      { label: "services", path: "/#services" },
    ],
  },

  {
    tabs: "Testimonials",
    path: "/#testimonials",
  },
  {
    tabs: "contact us",
    path: "/#contacts-us",
  },
  {
    tabs: "about us",
    path: "#",
    submenu: [
      { label: "About Us", path: "/about-us" },
      { label: "our partners", path: "/#our-technology-partners" },
      { label: "Our Customers", path: "/#our-customers" },
    ],
  },
];


export const featuredCardList = [
  { title: "Dashboard", icon: <DashboardIcon/>},
  { title: "Projects", icon: <ProjectIcon/> },
  { title: "Templates", icon: <TempleteIcon/> },
  { title: "Notifications", icon: <NotificationsIcon/> },
];

export const statsList = [
  { value: "1000+", text: "Lorem ipsum dolor sit amet consectetur" },
  { value: "88%", text: "Lorem ipsum dolor sit amet consectetur" },
  { value: "10X", text: "Lorem ipsum dolor sit amet consectetur" },
  { value: "99%", text: "Lorem ipsum dolor sit amet consectetur" },
];