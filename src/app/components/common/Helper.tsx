import { AdminDashboardIcon, AdminManagementIcon, AdminProjectIcon, DashboardIcon, NotificationsIcon, ProjectIcon, TempleteIcon } from "./Icons";

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

export const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    position: "Medical Assistant",
    image: "/images/png/floyed-miles.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor.",
  },
  {
    id: 2,
    name: "Ronald Richards",
    position: "Nursing Assistant",
        image: "/images/png/floyed-miles.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor.",
  },
  {
    id: 3,
    name: "Esther Howard",
    position: "President of Sales",
        image: "/images/png/floyed-miles.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor.",
  },
];



export const sideBarData = [
  {
    icon: <AdminDashboardIcon />,
    tabs: "Dashboard",
    path: "/dashboard",
  },

  {
    icon: <AdminProjectIcon />,
    tabs: "Projects List",
    path: "/project-list",
  },
  {
    icon: <AdminManagementIcon />,
    tabs: "Leaderboard",
    path: "/admin/spis",
  },
 
  {
    // icon: <CommunticationIcon />,
    tabs: "Communications",
    path: "/communications",
  },
  {
    // icon: <TransactionIcon />,
    tabs: "Notifications",
    path: "/admin/notifications",
  },
  {
    // icon: <CatalogIcon />,
    tabs: "Upgrade",
    path: "/admin/membership",
  },
  {
    // icon: <SettingsIcon />,
    tabs: "Settings",
    path: "/admin/settings",
  },
];
