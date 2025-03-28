import {
  AdminDashboardIcon,
  AdminManagementIcon,
  AdminNotificationsIcon,
  AdminProjectIcon,
  AdminTempletIcon,

  CopyIcons,
  DashboardIcon,
  DeletIcon,
  EditIcon,
  InProgressIcon,
  NotificationsIcon,
  PrioritiesIcon,
  PrioritiesIcon2,
  Profile_icon,
  ProjectIcon,
  Schedule_icon_with_bg,
  SurveyIcon,
  TempleteIcon,
  Tickmark_box_icon_with_bg,
  UserIcon,
} from "./Icons";

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
  { title: "Dashboard", icon: <DashboardIcon /> },
  { title: "Projects", icon: <ProjectIcon /> },
  { title: "Templates", icon: <TempleteIcon /> },
  { title: "Notifications", icon: <NotificationsIcon /> },
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
export const Totalwork_data_dashboard = [
  {
    progress: "In progress",
    totalwork: "54",
    taskname: "Tasks in progress",
    icons: <InProgressIcon />
  },
  {
    progress: "Completed",
    totalwork: "180",
    taskname: "Completed tasks",
    icons: <Tickmark_box_icon_with_bg />
  },
  {
    progress: "Total time",
    totalwork: "250",
    taskname: "Hours",
    icons: <Schedule_icon_with_bg />
  },
  {
    progress: "User engagement",
    totalwork: "98%",
    taskname: "User engagement",
    icons: <Profile_icon />
  }
]

export const CSAT_Score_data = [
  {
    month: "Jan",
    progress: 10,
  },
  {
    month: "Feb",
    progress: 5,
  },
  {
    month: "Mar",
    progress: 8.5,
  },
  {
    month: "Apr",
    progress: 2.5,
  },
]

export const dashboard_notifications = [
  {
    order_no: "New order #4219423",
    date: "21 DEC 11:21 PM",
  },
  {
    order_no: "Server Payments for April",
    date: "21 DEC 9:28 PM",
  },
  {
    order_no: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
  },
  {
    order_no: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
  },
  {
    order_no: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
]

export const dashboard_User_Engagement_data = [
  {
    id: 1,
    progress: 10,
  },
  {
    id: 2,
    progress: 5,
  },
  {
    id: 3,
    progress: 8.5,
  },
  {
    id: 4,
    progress: 2.5,
  },
]

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
    tabs: "Management",
    path: "/management",
  },

  {
    icon: <AdminTempletIcon />,
    tabs: "Templates",
    path: "/templates",
  },
  {
    icon: <UserIcon />,
    tabs: "Admin Settings",
    path: "/admin-settings",
  },
  {
    icon: <AdminNotificationsIcon />,
    tabs: "Notifications",
    path: "/notifications",
  },
  {
    icon: <SurveyIcon />,
    tabs: "Survey",
    path: "/survey",
  },
];

export const tasks = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: "IN PROGRESS",
    color: "#747EBD",
    due: "Today",
    img: <PrioritiesIcon />,
    subTasks: [
      { name: "Design UI", color: "#EBA055", status: "TO DO" },
      { name: "Develop Backend", color: "#EBA055", status: "TO DO" },
    ],
  },
  {
    id: 2,
    name: "Monitor app performance and user feedback",
    status: "COMPLETED",
    color: "#408C62",
    due: "Today",
    progress: "3",
    img: <PrioritiesIcon2 />,
    subTasks: [
      { name: "Track Errors", color: "#EBA055", status: "TO DO" },
      { name: "Analyze Feedback", color: "#EBA055", status: "TO DO" },
    ],
  },
  {
    id: 3,
    name: "Implement security and data privacy measures",
    status: "COMPLETED",
    color: "#408C62",
    due: "2/3/2025",
    img: <PrioritiesIcon />,
    subTasks: [
      { name: "Encrypt Data", color: "#EBA055", status: "TO DO" },
      { name: "Secure APIs", color: "#EBA055", status: "TO DO" },
    ],
  },
  {
    id: 4,
    name: "Deploy and release the app",
    status: "TO DO",
    color: "#EBA055",
    due: "2/3/2025",
    progress: "10",
    img: <PrioritiesIcon2 />,
    subTasks: [
      { name: "Prepare Release Notes", color: "#EBA055", status: "TO DO" },
      { name: "Launch Marketing Campaign", color: "#EBA055", status: "TO DO" },
    ],
  },
];

export const tasks2 = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: "ACTIVE",
    color: "#747EBD",
    due: "Today",
    progress: 5,
  },
  {
    id: 2,
    name: "Monitor app performance and user feedback",
    status: "COMPLETED",
    color: "#408C62",
    due: "Today",
    progress: 3,
  },
  {
    id: 3,
    name: "Implement security and data privacy measures",
    status: "COMPLETED",
    color: "#408C62",
    due: "2/3/2025",
    progress: 10,
  },
  {
    id: 4,
    name: "Deploy to production",
    status: "ARCHIVED",
    color: "#EBA055",
    due: "2/3/2025",
    progress: 3,
  },
  {
    id: 5,
    name: "Develop the app’s core features",
    status: "ACTIVE",
    color: "#747EBD",
    due: "Tomorrow",
    progress: 4,
  },
  {
    id: 6,
    name: "Develop interactive prototypes to test",
    status: "COMPLETED",
    color: "#408C62",
    due: "Tomorrow",
    progress: 10,
  },
  {
    id: 7,
    name: "Test and refine each feature before moving forward",
    status: "ACTIVE",
    color: "#747EBD",
    due: "Today",
    progress: 4,
  },
  {
    id: 8,
    name: "Test and iterate on the functionalities",
    status: "ARCHIVED",
    color: "#EBA055",
    due: "2/3/2025",
    progress: 3,
  },
  {
    id: 9,
    name: "Establish protocols to protect user data",
    status: "ACTIVE",
    color: "#747EBD",
    due: "Today",
    progress: 5,
  },
  {
    id: 10,
    name: "Identify strengths, weaknesses, and gaps",
    status: "ARCHIVED",
    color: "#EBA055",
    due: "2/3/2025",
    progress: 6,
  },
];
export const tasks3 = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: "IN PROGRESS",
    color: "#747EBD",
    due: "2/3/2025",
    progress: 5,
    img: <PrioritiesIcon />,
    subTasks: [
      { name: "Prepare Release Notes", color: "#EBA055", status: "TO DO" },
      { name: "Launch Marketing Campaign", color: "#EBA055", status: "TO DO" },
    ],
  },
  {
    id: 2,
    name: "Develop interactive prototypes to test",
    status: "COMPLETED",
    color: "#408C62",
    due: "Tomorrow",
    progress: 3,
    img: <PrioritiesIcon2 />,
    subTasks: [
      { name: "Prepare Release Notes", color: "#EBA055", status: "TO DO" },
      { name: "Launch Marketing Campaign", color: "#EBA055", status: "TO DO" },
    ],
  },
];
export const tempatesData = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: "IN PROGRESS",
    color: "#747EBD",
    due: "2/3/2025",
    progress: 5,
    img: <PrioritiesIcon />,
  },
  {
    id: 2,
    name: "Develop interactive prototypes to test",
    status: "COMPLETED",
    color: "#408C62",
    due: "Tomorrow",
    progress: 3,
    img: <PrioritiesIcon2 />,
  },
];
export const tasks5 = [
  {
    id: 1,
    name: "Test and refine each feature before moving forward",
    status: "IN PROGRESS",
    color: "#747EBD",
    due: "Today",

    img: <PrioritiesIcon2 />,
  },
  {
    id: 2,
    name: "Test and iterate on the functionalities",
    status: " TO DO",
    color: "#EBA055",
    due: "2/3/2025",
    progress: 3,
    img: <PrioritiesIcon />,
  },
  {
    id: 3,
    name: "Establish protocols to protect user data",
    status: "IN PROGRESS",
    color: "#747EBD",
    due: "Tomorrow",

    img: <PrioritiesIcon />,
  },
  {
    id: 4,
    name: "Identify strengths, weaknesses, and gaps ",
    status: "TO DO",
    color: "#EBA055",
    due: "2/3/2025",
    progress: 10,
    img: <PrioritiesIcon />,
  },
];

export const notification_urgent_task = [
  {
    name: "Quick Insights Survey",
    due: "Today",
    color: "#CB2F00",
    progress: 1,
  },
  {
    name: "Help Us Improve",
    due: "Today",
    color: "#CB2F00",
    progress: 10,
  },
  {
    name: "App-solutely Honest Feedback",
    due: "Tomorrow",
    color: "#CB2F00",
    progress: 10,
  },
  {
    name: "Our Next Update",
    due: "2/3/2025",
    color: "#333333",
    progress: 2.5,
  },
  {
    name: "Next Level App Experience",
    due: "2/3/2025",
    color: "#333333",
    progress: 4,
  },
  {
    name: "Develop the app's core features",
    due: "Today",
    color: "#CB2F00",
    progress: 1,
  },
  {
    name: "Next Level App Experience",
    due: "Today",
    color: "#CB2F00",
    progress: 10,
  },
];

export const notification_new_message = Array(5).fill({
  image: "/images/png/avatar_40x40.png",
  name: "Esthera Jackson",
  time: "2/25/25 1:33PM",
  message:
    "Lorem ipsum dolor sit amet consectetur. Euismod proin non mauris sit sed egestas. Cum egestas non leo nibh adipiscing. Luctus et lacus eget maecenas condimentum scelerisque.",
});

export const progressData = [
  { label: "Completed", value: 50 },
  { label: "In Progress", value: 30 },
  { label: "Not started", value: 20 },
];

export const completionData = [
  { label: "One day or less", value: 25 },
  { label: "One week", value: 26 },
  { label: "One month", value: 21 },
  { label: "Several months", value: 11 },
];

export const options = [
  { id: "internal-team", label: "Internal Team", category: "roles" },
  { id: "customer", label: "Customer", category: "roles" },
  { id: "consultant", label: "Consultant", category: "roles" },
  {
    id: "new-launches",
    label: "New launches and projects",
    category: "application",
  },
  {
    id: "monthly-updates",
    label: "Monthly product updates",
    category: "application",
  },
  {
    id: "subscribe-newsletter",
    label: "Subscribe for newsletter",
    category: "application",
  },
];



export const converstationData = [
  {
    img: "/images/png/edanaWaber_img.png",
    name: "Edna Weber",
    comment: "Hi! I need more informations...",
  },
  {
    img: "/images/png/rooseevltHarris_img.png",
    name: "Roosevelt Harris",
    comment: "Awesome work, can you change...",
  },
  {
    img: "/images/png/vernoicaRippin_img.png",
    name: "Veronica Rippin",
    comment: "Have a great afternoon...",
  },
  {
    img: "/images/png/francisKuphal_img.png",
    name: "Francis Kuphal",
    comment: "About files I can...",
  },
];

export const projectCardData = [
  {
    img: "/images/png/project_card_img.png",
    number: "  Project #1",
    heading: "   Lorem ipsum dolor",
    decs: "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: "/images/png/project_card_img.png",
    number: "  Project #1",
    heading: "   Lorem ipsum dolor",
    decs: "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: "/images/png/project_card_img.png",
    number: "  Project #1",
    heading: "   Lorem ipsum dolor",
    decs: "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: "/images/png/project_card_img.png",
    number: "  Project #1",
    heading: "   Lorem ipsum dolor",
    decs: "As Uber works through a huge amount of internal management turmoil.",
    forthh: "hidden",
  },
];
export const templates = [
  {
    id: 1,
    name: "Quick Insights Survey",
    Categoty: "Survey",
    UpdateDate: "Today",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 2,
    name: "Help Us Improve",
    Categoty: "Design",
    UpdateDate: "Today",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 3,
    name: "App-solutely Honest Feedback",
    Categoty: "Feedback",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 4,
    name: "Our Next Update",
    Categoty: "Develop Feature",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 5,
    name: "Develop the app core features",
    Categoty: "Test",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 6,
    name: "Knowledge Sharing Document",
    Categoty: "Feedback",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 7,
    name: "Data Analysis Plan",
    Categoty: "Research",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 8,
    name: "Lessons Learned Workshop Notes",
    Categoty: "Develop Feature",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 9,
    name: "Research Proposal Outline",
    Categoty: "Survey",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 10,
    name: "Research Progress Tracker",
    Categoty: "Research",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 11,
    name: "Experiment Design Framework",
    Categoty: "Develop Feature",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
  },
  {
    id: 12,
    name: "Mistakes and Mitigation Plan",
    Categoty: "Research",
    UpdateDate: "2/3/2025",
    Action: <EditIcon />,
    delet: <DeletIcon />,
    Clone: <CopyIcons />,
    img: "/images/png/project_card_img.png",
    number: "  Project #1",
    heading: "   Lorem ipsum dolor",
    decs: "As Uber works through a huge amount of internal management turmoil.",
    forthh: "hidden",
  },
];

export const surveyTableData = [
  {
    id: 1,
    name: "Quick Insights Survey",
    averageScore: 98,
    assignedTo: 5,
    progress: 10,
    dueDate: "Today",
  },
  {
    id: 2,
    name: "Help Us Improve",
    averageScore: 45,
    assignedTo: 2,
    progress: 100,
    dueDate: "Today",
  },
  {
    id: 3,
    name: "App-solutely Honest Feedback",
    averageScore: 76,
    assignedTo: 4,
    progress: 100,
    dueDate: "3/9/2025",
  },
  {
    id: 4,
    name: "Our Next Update",
    averageScore: 76,
    assignedTo: 5,
    progress: 20,
    dueDate: "2/8/2025",
  },
  {
    id: 5,
    name: "Next Level App Experience",
    averageScore: 15,
    assignedTo: 4,
    progress: 40,
    dueDate: "2/15/2025",
  },
  {
    id: 6,
    name: "App Feedback Hub",
    averageScore: 93,
    assignedTo: 4,
    progress: 100,
    dueDate: "Tomorrow",
  },
];

export const individualData = [
  {
    id: 1,
    name: "Katherine Jackson",
    email: "katherine.jackson@example.com",
    profilePhoto: "/images/png/esthera_jackson_img.png",
    score: 80,
    progress: 100,
    rating: 5,
    status: "View",
    progresnumb: 10,
  },
  {
    id: 2,
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    profilePhoto: "/images/png/esthera_jackson_img.png",
    score: 45,
    progress: 100,
    rating: 5,
    status: "View",
    progresnumb: 100,
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    email: "savannah.nguyen@example.com",
    profilePhoto: "/images/png/esthera_jackson_img.png",
    score: 58,
    progress: 100,
    rating: 5,
    status: "View",
    progresnumb: 100,
  },
  {
    id: 4,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    profilePhoto: "/images/png/esthera_jackson_img.png",
    score: 76,
    progress: 100,
    rating: 5,
    status: "View",
    progresnumb: 40,
  },
  {
    id: 5,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    profilePhoto: "/images/png/esthera_jackson_img.png",
    score: 15,
    progress: 100,
    rating: 5,
    status: "View",
    progresnumb: 25,
  },
  {
    id: 6,
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    profilePhoto: "/images/png/esthera_jackson_img.png",
    score: 93,
    progress: 100,
    rating: 5,
    status: "View",
    progresnumb: 100,
  },
];
