import {
  Home,
  LocalMall,
  Diamond,
  AccountBalanceWallet,
  AccountCircle,
} from "@mui/icons-material";

const footer = [
  {
    id: 1,
    icon: <Home />,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    icon: <LocalMall />,
    name: "Activity",
    url: "/activity",
  },
  {
    id: 3,
    icon: <Diamond />,
    name: "Promotion",
    url: "/promotion",
  },
  {
    id: 4,
    icon: <AccountBalanceWallet />,
    name: "Wallet",
    url: "/wallet",
  },
  {
    id: 5,
    icon: <AccountCircle />,
    name: "Account",
    url: "/account",
  },
];

export default footer;
