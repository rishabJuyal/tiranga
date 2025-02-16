import { notices } from "../../data";

const AboutUs = () => {
  return (
    <div className="text-white text-xl flex flex-col justify-center gap-5">
      <div className="text-3xl font-semibold underline">About Us</div>
      {notices.map((notice) => (
        <div key={notice.id}>{notice.text}</div>
      ))}
    </div>
  );
};

export default AboutUs;
