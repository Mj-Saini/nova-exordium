import {
  AdminDashboardIcon,
  AdminManagementIcon,
  AdminNotificationsIcon,
  AdminProjectIcon,
  AdminTempletIcon,
  DashboardIcon,
  NotificationsIcon,
  PrioritiesIcon,
  PrioritiesIcon2,
  ProjectIcon,
  SurveyIcon,
  TempleteIcon,
  UserIcon,
} from './Icons';

export const headerData = [
  {
    tabs: 'home',
    path: '/#home',
  },

  {
    tabs: 'Our Offerings',
    path: '/',
    submenu: [
      { label: 'solutions', path: '/#solutions' },
      { label: 'services', path: '/#services' },
    ],
  },

  {
    tabs: 'Testimonials',
    path: '/#testimonials',
  },
  {
    tabs: 'contact us',
    path: '/#contacts-us',
  },
  {
    tabs: 'about us',
    path: '#',
    submenu: [
      { label: 'About Us', path: '/about-us' },
      { label: 'our partners', path: '/#our-technology-partners' },
      { label: 'Our Customers', path: '/#our-customers' },
    ],
  },
];

export const featuredCardList = [
  { title: 'Dashboard', icon: <DashboardIcon /> },
  { title: 'Projects', icon: <ProjectIcon /> },
  { title: 'Templates', icon: <TempleteIcon /> },
  { title: 'Notifications', icon: <NotificationsIcon /> },
];

export const statsList = [
  { value: '1000+', text: 'Lorem ipsum dolor sit amet consectetur' },
  { value: '88%', text: 'Lorem ipsum dolor sit amet consectetur' },
  { value: '10X', text: 'Lorem ipsum dolor sit amet consectetur' },
  { value: '99%', text: 'Lorem ipsum dolor sit amet consectetur' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Floyd Miles',
    position: 'Medical Assistant',
    image: '/images/png/floyed-miles.png',
    review:
      'Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor.',
  },
  {
    id: 2,
    name: 'Ronald Richards',
    position: 'Nursing Assistant',
    image: '/images/png/floyed-miles.png',
    review:
      'Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor.',
  },
  {
    id: 3,
    name: 'Esther Howard',
    position: 'President of Sales',
    image: '/images/png/floyed-miles.png',
    review:
      'Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor.',
  },
];

export const sideBarData = [
  {
    icon: <AdminDashboardIcon />,
    tabs: 'Dashboard',
    path: '/dashboard',
  },

  {
    icon: <AdminProjectIcon />,
    tabs: 'Projects List',
    path: '/project-list',
  },
  {
    icon: <AdminManagementIcon />,
    tabs: 'Management',
    path: '/management',
  },

  {
    icon: <AdminTempletIcon />,
    tabs: 'Templates',
    path: '/templates',
  },
  {
    icon: <UserIcon />,
    tabs: 'Admin Settings',
    path: '/admin-settngs',
  },
  {
    icon: <AdminNotificationsIcon />,
    tabs: 'Notifications',
    path: '/notifications',
  },
  {
    icon: <SurveyIcon />,
    tabs: 'Survey',
    path: '/survey',
  },
];

export const tasks = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: 'IN PROGRESS',
    color: '#747EBD',
    due: 'Today',

    img: <PrioritiesIcon />,
  },
  {
    id: 2,
    name: 'Monitor app performance and user feedback',
    status: 'COMPLETED',
    color: '#408C62',
    due: 'Today',
    progress: 3,
    img: <PrioritiesIcon2 />,
  },
  {
    id: 3,
    name: 'Implement security and data privacy measures',
    status: 'COMPLETED',
    color: '#408C62',
    due: '2/3/2025',

    img: <PrioritiesIcon />,
  },
  {
    id: 4,
    name: 'Deploy and release the app',
    status: 'TO DO',
    color: '#EBA055',
    due: '2/3/2025',
    progress: 10,
    img: <PrioritiesIcon2 />,
  },
];

export const tasks2 = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: 'ACTIVE',
    color: '#747EBD',
    due: 'Today',
    progress: 5,
  },
  {
    id: 2,
    name: 'Monitor app performance and user feedback',
    status: 'COMPLETED',
    color: '#408C62',
    due: 'Today',
    progress: 3,
  },
  {
    id: 3,
    name: 'Implement security and data privacy measures',
    status: 'COMPLETED',
    color: '#408C62',
    due: '2/3/2025',
    progress: 10,
  },
  {
    id: 4,
    name: 'Deploy to production',
    status: 'ARCHIVED',
    color: '#EBA055',
    due: '2/3/2025',
    progress: 3,
  },
  {
    id: 5,
    name: 'Develop the app’s core features',
    status: 'ACTIVE',
    color: '#747EBD',
    due: 'Tomorrow',
    progress: 4,
  },
  {
    id: 6,
    name: 'Develop interactive prototypes to test',
    status: 'COMPLETED',
    color: '#408C62',
    due: 'Tomorrow',
    progress: 10,
  },
  {
    id: 7,
    name: 'Test and refine each feature before moving forward',
    status: 'ACTIVE',
    color: '#747EBD',
    due: 'Today',
    progress: 4,
  },
  {
    id: 8,
    name: 'Test and iterate on the functionalities',
    status: 'ARCHIVED',
    color: '#EBA055',
    due: '2/3/2025',
    progress: 3,
  },
  {
    id: 9,
    name: 'Establish protocols to protect user data',
    status: 'ACTIVE',
    color: '#747EBD',
    due: 'Today',
    progress: 5,
  },
  {
    id: 10,
    name: 'Identify strengths, weaknesses, and gaps',
    status: 'ARCHIVED',
    color: '#EBA055',
    due: '2/3/2025',
    progress: 6,
  },
];
export const tasks3 = [
  {
    id: 1,
    name: "Develop the app's core features",
    status: 'IN PROGRESS',
    color: '#747EBD',
    due: '2/3/2025',
    progress: 5,
    img: <PrioritiesIcon />,
  },
  {
    id: 2,
    name: 'Develop interactive prototypes to test',
    status: 'COMPLETED',
    color: '#408C62',
    due: 'Tomorrow',
    progress: 3,
    img: <PrioritiesIcon2 />,
  },
];
export const tasks5 = [
  {
    id: 1,
    name: 'Test and refine each feature before moving forward',
    status: 'IN PROGRESS',
    color: '#747EBD',
    due: 'Today',

    img: <PrioritiesIcon2 />,
  },
  {
    id: 2,
    name: 'Test and iterate on the functionalities',
    status: ' TO DO',
    color: '#EBA055',
    due: '2/3/2025',
    progress: 3,
    img: <PrioritiesIcon />,
  },
  {
    id: 3,
    name: 'Establish protocols to protect user data',
    status: 'IN PROGRESS',
    color: '#747EBD',
    due: 'Tomorrow',

    img: <PrioritiesIcon />,
  },
  {
    id: 4,
    name: 'Identify strengths, weaknesses, and gaps ',
    status: 'TO DO',
    color: '#EBA055',
    due: '2/3/2025',
    progress: 10,
    img: <PrioritiesIcon />,
  },
];


export const progressData = [
  { label: "Completed", value: 50 },
  { label: "In Progress", value: 30 },
  { label: "Not started", value: 20 },
];