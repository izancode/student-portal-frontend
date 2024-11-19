import { useEffect, useRef, useState } from "react";
import InputField from "../../../Components/FormFilled/InputField";
import MultipleField from "../../../Components/FormFilled/MutlipleField";
import CustomButton from "../../../Components/Button/CustomButton";
import {
  useFormikLoginHook,
  useFormikOtpHook,
} from "../../../customHooks/useFormikCustomHook";
import {
  loginSchema,
  loginInitialValues,
  otpSchema,
  otpInitialValues,
} from "../../../utils/Formik/formik";
import {
  loginPostData,
  otpPostData,
} from "../../../Redux/ReduxThunk/loginThunks";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
} from "../../../Components/Login/LoginBg";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
import { arrayOtpField } from "../../../utils/Formik/formik";
export const LoginForm = () => {
  const waitingForPostApi = useSelector((state) => state.login.status);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormikLoginHook(loginSchema, loginInitialValues, loginPostData);
  return (
    <div className="grid xl:grid-cols-12 xl:h-screen ">
      <SectionOne />
      <div
        className="col-span-3 items-center
        h-full bg-[url('images/login/loginbg.jpg')] bg-no-repeat bg-cover bg-top px-2 lg:px-4 flex  justify-center"
      >
        <div>
          <SectionTwo />
          {waitingForPostApi === "loading" ? (
            <div className="flex justify-center h-96 items-center">
              <InfinitySpin
                visible={true}
                width="200"
                color="#1c22c1"
                ariaLabel="infinity-spin-loading"
                wrapperStyle={{}}
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <InputField
                name="login_with_email_phone"
                inputType="input"
                values={values.login_with_email_phone}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.login_with_email_phone}
                touched={touched.login_with_email_phone}
                placeholder="Email or Phone"
                labelClassName="cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                fieldClassName="block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              />
              <CustomButton btnname="Get OTP" type="submit" />
            </form>
          )}
          <SectionThree text1="Don't have an account?" text2="Register Now" />
        </div>
      </div>
    </div>
  );
};
export const OtpForm = () => {
  const waitingForPostApi = useSelector((state) => state.otp.status);
  const inputRefs = useRef([]);
  const [time, setTime] = useState(120);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (/^\d{1}$/.test(value)) {
      handleChange(e);
      if (
        value.length === 1 &&
        index < arrayOtpField.multipleFields.length - 1
      ) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value.length > 1) {
      e.target.value = "";
    }
  };
  const handleKeyDown = (e, index) => {
    const { value } = e.target;
    if (e.key === "Backspace" && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormikOtpHook(otpSchema, otpInitialValues, otpPostData);
  return (
    <div className="grid xl:grid-cols-12 xl:h-screen ">
      <SectionOne />
      <div
        className="col-span-3 items-center
        h-full bg-[url('images/login/loginbg.jpg')] bg-no-repeat bg-cover bg-top px-2 lg:px-4 flex  justify-center"
      >
        <div>
          <SectionTwo />
          {waitingForPostApi === "loading" ? (
            <div className="flex justify-center h-96 items-center">
              <InfinitySpin
                visible={true}
                width="200"
                color="#1c22c1"
                ariaLabel="infinity-spin-loading"
                wrapperStyle={{}}
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <MultipleField
                Allfields={arrayOtpField.multipleFields}
                values={values[arrayOtpField.name]}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors[arrayOtpField.name]}
                touched={touched[arrayOtpField.name]}
                keyDown={handleKeyDown}
                handleInputChange={handleInputChange}
                inputRefs={inputRefs}
              />
              <CustomButton btnname="Verify OTP" />
            </form>
          )}
          <SectionThree text1="OTP Expire in :" text2={formatTime(time)} />
        </div>
      </div>
    </div>
  );
};
