import { Link } from "react-router-dom";

export const SectionOne = () => {
  return (
    <div className=" col-span-9  xl:h-screen ">
      <img
        className="w-full xl:h-full "
        src="https://res.cloudinary.com/dlqylweq6/image/upload/v1728884805/librarystudent_bqtvfz.png"
        alt=""
      />
    </div>
  );
};

export const SectionTwo = () => {
  return (
    <>
      <img
        className="xl:w-full mb-5"
        src="https://res.cloudinary.com/dlqylweq6/image/upload/v1728884802/threeschool_gcwyrm.png"
        alt=""
      />
      <h2 className=" text-[3.5rem] leading-[1.2] text-[#1C22C1] capitalize mb-5">
        hello <br />
        <span className="font-bold">welcome!</span>
      </h2>
    </>
  );
};

export const SectionThree = () => {
  return (
    <p className="text-xs mb-5">
      Don&apos;t have an account?
      <span className="font-semibold text-[#1C22C1] cursor-pointer ml-1">
        <Link to="/signin">Register Now</Link>
      </span>
    </p>
  );
};
