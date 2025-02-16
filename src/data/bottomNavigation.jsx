import {
  Campaign,
  Download,
  Info,
  Language,
  MenuBook,
  SupportAgent,
} from "@mui/icons-material";

const bottomNavigation = [
  {
    id: 1,
    icon: <Language color="primary" sx={{ fontSize: 30 }} />,
    title: "Language",
    url: "/language",
    showDivider: true,
  },
  {
    id: 2,
    icon: <Campaign color="primary" sx={{ fontSize: 30 }} />,
    title: "Notification",
    url: "/notification",
    showDivider: true,
  },
  {
    id: 3,
    icon: <SupportAgent color="primary" />,
    title: "24/7 Customer Service",
    url: "/customer-service",
    showDivider: true,
  },
  {
    id: 4,
    icon: <MenuBook color="primary" />,
    title: "Beginner's Guide",
    url: "/beginner-guide",
    showDivider: true,
  },
  {
    id: 5,
    icon: <Info color="primary" />,
    title: "About Us",
    url: "/about-us",
    showDivider: true,
  },
  {
    id: 6,
    icon: <Download color="primary" />,
    title: "Download APP",
    url: "/download",
    showDivider: false,
  },
];

export default bottomNavigation;
