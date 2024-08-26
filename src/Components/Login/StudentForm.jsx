import ArrayStudentForm from "./StudentArrayField/ArrayStudentForm";
import InputField from "../FormFilled/InputField";
import SelectBox from "../FormFilled/SelectBox";
import ChooseFile from "../FormFilled/ChooseFile";
import Textarea from "../FormFilled/Textarea";
import MutlipleField from "../FormFilled/MutlipleField";
import CustomButton from "../Button/CustomButton";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/Formvalidation";
import { useDispatch } from "react-redux";
import { studentPostData } from "../../Redux/ReduxThunk/studentThunks";
const initialValues = {
  student_school: "",
  student_programs: "",
  student_degree: "",
  student_specialisation: "",
  student_how_did_you_hear_about_us: "",
  student_profile_image: "",
  student_first_name: "",
  student_middle_name: "",
  student_last_name: "",
  student_nationality: "",
  student_address: "",
  student_apartment: "",
  student_country: "",
  student_state: "",
  student_city: "",
  student_postal_code: "",
  student_phone_number: "",
  student_email: "",
  DD: "",
  MM: "",
  YYYY: "",
  student_gender: "",
  student_blood_group: "",
  student_caste_category: "",
  student_instagram_url: "",
  student_linkedin_url: "",
  previous_college_grade_10_details: "",
  previous_college_percentage_grade_secured: "",
  previous_college_marks_secured: "",
  previous_college_marks_out_of: "",
  previous_college_academic_year: "",
  previous_college_examination_board: "",
  previous_college_state: "",
  previous_college_city: "",
  previous_college_grade_12th_school_details: "",
  previous_college_name: "",
  student_father_name: "",
  student_father_occupation: "",
  student_father_number: "",
  student_father_email: "",
  student_mother_name: "",
  student_mother_occupation: "",
  student_mother_number: "",
  student_mother_email: "",
  in_case_of_guardian_please_specify_the_relationship: "",
  statement_of_purpose: "",
};

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
          dob: dateOfBirth.toISOString(), // Store in ISO format
        };
        delete studentData.DD;
        delete studentData.MM;
        delete studentData.YYYY;

        // Then, make the API call to post the data
        dispatch(studentPostData(studentData));
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {ArrayStudentForm.map((section, sectionIndex) => {
        return (
          <div className="flex flex-wrap" key={sectionIndex}>
            {section.fields.map((field, fieldIndex) => {
              return (
                <>
                  {field.type === "heading" ? (
                    <div className={field.divclassName} key={fieldIndex}>
                      <h2 className={field.className}>{field.heading}</h2>
                    </div>
                  ) : field.type === "input" ? (
                    <div className={field.divclassName} key={fieldIndex}>
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
                    <div className={field.divclassName} key={fieldIndex}>
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
                    <div className={field.divclassName} key={fieldIndex}>
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
                    <div className={field.divclassName} key={fieldIndex}>
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
                    <div className={field.divclassName} key={fieldIndex}>
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
                    <h1>Nathing</h1>
                  )}
                </>
              );
            })}
          </div>
        );
      })}
      <div className="w-full lg:w-1/4 lg:px-4">
        <CustomButton btnname="Get OTP" type="submit" />
      </div>
    </form>
  );
};

export default StudentForm;
