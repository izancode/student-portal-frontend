import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../utils/CustomAlert/cutomToast";
import { useNavigate } from "react-router-dom";
import { userGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks";
import { useSelector } from "react-redux";

export const useFormikSignHook = (
  signUpSchema,
  initialValues,
  postData,
  setLoading,
  apiFrom
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => state.user?.userRole);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
    resetForm,
  } = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        let skipFields = [];
        if (role === "student") {
          skipFields = [
            "_id",
            "student_father_name",
            "student_father_number",
            "student_father_email",
            "student_mother_name",
            "student_mother_number",
            "student_mother_email",
            "profile_image",
            "student_father_occupation",
            "student_mother_occupation",
            "in_case_of_guardian_please_specify_the_relationship",
            "image_public_id",
            "__v",
            "createdAt",
            "updatedAt",
          ];
        } else if (role === "faculty") {
          skipFields = [
            "_id",
            "profile_image",
            "image_public_id",
            "__v",
            "createdAt",
            "updatedAt",
          ];
        } else if (role === "admin") {
          skipFields = [
            "_id",
            "profile_image",
            "image_public_id",
            "__v",
            "createdAt",
            "updatedAt",
          ];
        } else if (role === "father") {
          skipFields = [
            "_id",
            "student_school",
            "student_programs",
            "student_degree",
            "student_specialisation",
            "student_how_did_you_hear_about_us",
            "profile_image",
            "first_name",
            "middle_name",
            "last_name",
            "nationality",
            "address",
            "apartment",
            "country",
            "state",
            "city",
            "postal_code",
            "phone_number",
            "email",
            "DD",
            "MM",
            "YYYY",
            "gender",
            "student_blood_group",
            "student_caste_category",
            "instagram_url",
            "linkedin_url",
            "previous_college_grade_10_details",
            "previous_college_percentage_grade_secured",
            "previous_college_marks_secured",
            "previous_college_marks_out_of",
            "previous_college_academic_year",
            "previous_college_examination_board",
            "previous_college_state",
            "previous_college_city",
            "previous_college_grade_12th_school_details",
            "previous_college_name",
            "student_mother_name",
            "student_mother_occupation",
            "student_mother_number",
            "student_mother_email",
            "statement_of_purpose",
            "__v",
            "createdAt",
            "updatedAt",
          ];
        } else if (role === "mother") {
          skipFields = [
            "_id",
            "student_school",
            "student_programs",
            "student_degree",
            "student_specialisation",
            "student_how_did_you_hear_about_us",
            "profile_image",
            "first_name",
            "middle_name",
            "last_name",
            "nationality",
            "address",
            "apartment",
            "country",
            "state",
            "city",
            "postal_code",
            "phone_number",
            "email",
            "DD",
            "MM",
            "YYYY",
            "gender",
            "student_blood_group",
            "student_caste_category",
            "instagram_url",
            "linkedin_url",
            "previous_college_grade_10_details",
            "previous_college_percentage_grade_secured",
            "previous_college_marks_secured",
            "previous_college_marks_out_of",
            "previous_college_academic_year",
            "previous_college_examination_board",
            "previous_college_state",
            "previous_college_city",
            "previous_college_grade_12th_school_details",
            "previous_college_name",
            "student_father_name",
            "student_father_occupation",
            "student_father_number",
            "student_father_email",
            "statement_of_purpose",
            "__v",
            "createdAt",
            "updatedAt",
          ];
        }
        const UpdatedValue = Object.keys(values)
          .filter((key) => !skipFields.includes(key))
          .reduce((acc, key) => {
            acc[key] = values[key];
            return acc;
          }, {});

        const comeFrom =
          apiFrom === "post"
            ? values
            : apiFrom === "update"
            ? UpdatedValue
            : null;

        const formData = new FormData();

        Object.keys(comeFrom).forEach((key) => {
          if (key !== "DD" && key !== "MM" && key !== "YYYY") {
            formData.append(key, comeFrom[key]);
          }
        });
        const { DD, MM, YYYY } = comeFrom;
        if (DD && MM && YYYY) {
          const dateOfBirth = new Date(YYYY, MM - 1, DD);
          if (!isNaN(dateOfBirth.getTime())) {
            formData.append("dob", dateOfBirth.toISOString());
          }
        }

        const actionResult = await dispatch(postData(formData));
        const dataPass = unwrapResult(actionResult);
        if (dataPass) {
          customToast("success", dataPass.message);

          apiFrom === "post"
            ? navigate("/")
            : apiFrom === "update"
            ? navigate("/profile")
            : null;
          setLoading(false);
        }

        apiFrom === "post"
          ? resetForm()
          : apiFrom === "update"
          ? dispatch(userGetDataThunk())
          : null;
      } catch (error) {
        customToast("error", error.message);
      }
    },
  });

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  };
};

export const useFormikLoginHook = (
  loginSchema,
  loginInitialValues,
  postData,
  setLoading
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  } = useFormik({
    validationSchema: loginSchema,
    initialValues: loginInitialValues,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const actionResult = await dispatch(postData(values));
        const dataPass = unwrapResult(actionResult);

        if (dataPass) {
          navigate("/verify-otp");
          customToast("success", dataPass.message);
          setLoading(false);
          sessionStorage.setItem("loginField", dataPass.data.identifier);
        }
      } catch (error) {
        customToast("error", error.message);
      }
    },
  });
  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  };
};

export const useFormikOtpHook = (
  otpSchema,
  otpInitialValues,
  postData,
  setLoading
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const identifier = sessionStorage.getItem("loginField");

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  } = useFormik({
    validationSchema: otpSchema,
    initialValues: otpInitialValues,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const login_verify_otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;

        const apiData = {
          finding_with_email: identifier,
          login_verify_otp,
        };

        const actionResult = await dispatch(postData(apiData));
        const dataPass = unwrapResult(actionResult);

        if (dataPass) {
          navigate("/menu");
          customToast("success", dataPass.message);
          sessionStorage.removeItem("loginField");
          setLoading(false);
        }
      } catch (error) {
        customToast("error", error.message);
      }
    },
  });

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
  };
};
