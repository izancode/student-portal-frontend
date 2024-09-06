import { useState } from "react";
import PropTypes from "prop-types";
import StudentForm from "./StudentForm";
import FacultyForm from "./FacultyForm";
const SignUpForm = ({ handleSignUpPageProps }) => {
  const [tab, setTab] = useState("student");
  const tabChange = (getTab) => {
    setTab(getTab);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-80 border flex  relative text-lg select-none h-11 font-semibold bg-gray-200 rounded-lg cursor-pointer">
          <div
            className={`absolute bg-white h-full w-6/12 top-0 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              tab === "student" ? "left-0" : "left-1/2"
            }`}
          ></div>
          <div
            data-id="student"
            className="relative w-2/4 flex justify-center items-center"
            onClick={() => tabChange("student")}
          >
            Student
          </div>
          <div
            data-id="faculty"
            className="relative w-2/4 flex justify-center items-center"
            onClick={() => tabChange("faculty")}
          >
            Faculty
          </div>
        </div>
      </div>
      {tab === "student" ? (
        <StudentForm handleSignUpPageProps={handleSignUpPageProps} />
      ) : (
        <FacultyForm handleSignUpPageProps={handleSignUpPageProps} />
      )}
    </>
  );
};
SignUpForm.propTypes = {
  handleSignUpPageProps: PropTypes.func.isRequired,
};
export default SignUpForm;
