import threeschool from "../../images/login/threeschool.png";

import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
const ColTwo = ({ handleSignUpPageProps, signUppageProps }) => {
  return (
    <>
      <div
        className={`${
          signUppageProps ? "col-span-12" : "col-span-3 items-center"
        } h-full bg-[url('images/login/loginbg.jpg')] bg-no-repeat bg-cover bg-top px-2 lg:px-4 flex  justify-center`}
      >
        <div className={`${signUppageProps ? "xl:w-full " : ""}`}>
          <img
            className={`${
              signUppageProps ? "xl:w-1/4 mx-auto" : "xl:w-full mb-5"
            }`}
            src={threeschool}
            alt=""
          />
          <h2 className=" text-[3.5rem] leading-[1.2] text-[#1C22C1] capitalize mb-5">
            hello {signUppageProps ? "" : <br />}
            <span className="font-bold">welcome!</span>
          </h2>

          {signUppageProps ? (
            <SignUpForm handleSignUpPageProps={handleSignUpPageProps} />
          ) : (
            <LoginForm />
          )}

          <p className="text-xs mb-5">
            {signUppageProps
              ? " Already have an account? "
              : " Don't have an account?"}
            <span
              className="font-semibold text-[#1C22C1] cursor-pointer ml-1"
              onClick={handleSignUpPageProps}
            >
              {signUppageProps ? "Login Now" : "Sign Up Now"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

ColTwo.propTypes = {
  handleSignUpPageProps: PropTypes.func.isRequired,
  signUppageProps: PropTypes.bool.isRequired,
};
export default ColTwo;
