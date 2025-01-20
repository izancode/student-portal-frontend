import { useLocation } from "react-router-dom";
export const Rheader = () => {
  const location = useLocation();

  const currentPath =
    location.pathname
      .trim()
      .replace(/^\/|\/$/g, "")
      .replace(/-/g, " ") || "home";
  return (
    <div className="w-full h-[119px] flex justify-center items-center bg-[#5a538d] border border-dashed bg-[url('https://res.cloudinary.com/dlqylweq6/image/upload/v1736253924/Group_1_abpukj.png')] bg-cover bg-center">
      <h2 className="text-white tracking-[3px] text-[22px] uppercase">
        {currentPath}
      </h2>
    </div>
  );
};
