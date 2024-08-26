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
const StudentForm = () => {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: signUpSchema,
      initialValues: initialValues,
      onSubmit: (values) => {
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
        dispatch(studentPostData(studentData));
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
