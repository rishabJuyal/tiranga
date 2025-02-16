import { VolumeUp, LocalFireDepartment } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shortNotices } from "../../../data";

const NoticeBox = () => {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prev) =>
        prev < shortNotices.length - 1 ? prev + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#2b3270] w-full flex justify-between items-center p-3 rounded-full text-white">
      <VolumeUp color="primary" />
      <div className="relative ml-5 w-3/5">
        <div
          className="w-full pt-1"
          // initial={{
          //   y: 100,
          // }}
          // animate={{
          //   y: [0, -100],
          // }}
          // transition={{
          //   ease: "easeInOut",
          //   duration: 2,
          //   repeat: Infinity,
          //   delay: 5,
          // }}
        >
          {shortNotices[currentNoticeIndex].text}
        </div>
      </div>
      <Button
        variant="contained"
        sx={{ borderRadius: "50px", paddingInline: "15px" }}
        startIcon={<LocalFireDepartment />}
        component={Link}
        to="/about-us"
      >
        Details
      </Button>
    </div>
  );
};

export default NoticeBox;
