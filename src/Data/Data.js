import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilStore,
  UilMoneyWithdrawal,
  UilPizzaSlice,
  UilCheckCircle,
  UilExclamationTriangle,
} from "@iconscout/react-unicons";

// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Plan",
  },
  {
    icon: UilUsersAlt,
    heading: "Users",
  },
  {
    icon: UilPizzaSlice,
    heading: "Products",
  },
  {
    icon: UilCheckCircle,
    heading: "Certificate",
  },
  {
    icon: UilChart,
    heading: "Profile",
  },
  {
    icon: UilExclamationTriangle,
    heading: "Post",
  },
];
export const SidebarDataModerator = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Plan",
  },
  {
    icon: UilUsersAlt,
    heading: "Users",
  },
  {
    icon: UilPizzaSlice,
    heading: "Products",
  },
  {
    icon: UilCheckCircle,
    heading: "Certificate",
  },
  {
    icon: UilChart,
    heading: "Profile",
  },
];
export const SidebarDataCompany = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },

  {
    icon: UilPizzaSlice,
    heading: "Products",
  },

  {
    icon: UilChart,
    heading: "Profile",
  },
];
export const cardsData = [
  {
    title: "New Stores",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilStore,
    series: [
      {
        name: "New Stores",
        data: [31, 40, 28, 51, 42, 109],
      },
    ],
  },
  {
    title: "Certificated",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Certificated",
        data: [10, 100, 50, 70, 80, 30],
      },
    ],
  },
  {
    title: "Plan Created",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 50,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Plan Created",
        data: [10, 25, 15, 30, 12, 67],
      },
    ],
  },
];

// export const navbarOptions = [
//   {
//     text: "Homepage",
//     icon: <HomeIcon />,
//   },
//   {
//     text: "About",
//     icon: <InfoIcon />,
//   },
//   {
//     text: "Contact",
//     icon: <PhoneRoundedIcon />,
//   },
//   {
//     text: "Testimonials",
//     icon: <CommentRoundedIcon />,
//   },
//   {
//     text: "Cart",
//     icon: <ShoppingCartRoundedIcon />,
//   },
// ];
