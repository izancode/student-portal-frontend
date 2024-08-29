import React from "react";
import ArrayStudentForm from "./StudentArrayField/ArrayStudentForm";
import InputField from "../FormFilled/InputField";
import SelectBox from "../FormFilled/SelectBox";
import ChooseFile from "../FormFilled/ChooseFile";
import Textarea from "../FormFilled/Textarea";
import MutlipleField from "../FormFilled/MutlipleField";
import CustomButton from "../Button/CustomButton";
import { useDispatch } from "react-redux";
import { studentPostData } from "../../Redux/ReduxThunk/studentThunks";
import { useFormik } from "formik";
import { signUpSchema } from "./FormikFile/Formvalidation";
import { initialValues } from "./FormikFile/initialValues";
import { unwrapResult } from "@reduxjs/toolkit";
const StudentForm = () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldError,
  } = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
      const { DD, MM, YYYY } = values;
      const dateOfBirth = new Date(YYYY, MM - 1, DD);
      if (isNaN(dateOfBirth.getTime())) {
        console.error("Invalid date provided");
        return;
      }
      const studentData = {
        ...values,
        dob: dateOfBirth.toISOString(),
      };
      delete studentData.DD;
      delete studentData.MM;
      delete studentData.YYYY;
      try {
        const actionResult = await dispatch(studentPostData(studentData));
        const result = unwrapResult(actionResult);

        console.log("Success:", result);
      } catch (error) {
        console.error(error.message);
        // console.error(
        //   "Failed to submit student data:",
        //   Object.keys(error.message.keyValue)[0]
        // );

        const backendError = error.message;
        const errorCode = backendError.code;
        const errorKey = Object.keys(error.message.keyValue)[0];
        const errorValue = error.message.keyValue[errorKey];
        console.log(errorCode);
        if (errorCode === 11000) {
          console.log("error code", errorCode);
          console.log("key", errorKey);
          console.log("value", errorValue);
          setFieldError(errorKey, `This ${errorValue} is already exists`);
        }

        // let fieldErrors = {};
        // if (backendError.includes("student_instagram_url_1")) {
        //   fieldErrors.student_instagram_url = "Instagram URL already exists";
        // }
        // if (backendError.includes("student_email_1")) {
        //   fieldErrors.student_email = "Email already exists";
        // }

        // setErrors(fieldErrors);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        {ArrayStudentForm.map((field, fieldIndex) => {
          return (
            <React.Fragment key={`${field.name}-${fieldIndex}`}>
              {field.type === "heading" ? (
                <div className={field.divclassName}>
                  <h2 className={field.className}>{field.heading}</h2>
                </div>
              ) : field.type === "input" ? (
                <div className={field.divclassName}>
                  <InputField
                    name={field.name}
                    placeholder={field.placeholder}
                    fieldClassName={field.fieldClassName}
                    inputType={field.inputType}
                    labelClassName={field.labelClassName}
                    pattern={field.pattern}
                    values={values[field.name]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                  />
                </div>
              ) : field.type === "select" ? (
                <div className={field.divclassName}>
                  <SelectBox
                    name={field.name}
                    placeholder={field.placeholder}
                    options={field.options}
                    fieldClassName={field.fieldClassName}
                    values={values[field.name]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                  />
                </div>
              ) : field.type === "file" ? (
                <div className={field.divclassName}>
                  <ChooseFile
                    name={field.name}
                    profileImage={field.profileImage}
                    type={field.type}
                    fieldClassName={field.fieldClassName}
                    buttonClassName={field.buttonClassName}
                    values={values[field.name]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                  />
                </div>
              ) : field.type === "textarea" ? (
                <div className={field.divclassName}>
                  <Textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    fieldClassName={field.fieldClassName}
                    labelClassName={field.labelClassName}
                    rows={field.rows}
                    values={values[field.name]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                  />
                </div>
              ) : field.type === "multiple" ? (
                <div className={field.divclassName}>
                  <MutlipleField
                    Allfields={field.multipleFields}
                    values={values[field.name]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                  />
                </div>
              ) : (
                <div className={field.className}>
                  <CustomButton btnname={field.btnname} type={field.btnType} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </form>
  );
};
export default StudentForm;
