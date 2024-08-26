import * as Yup from "yup";

export const signUpSchema = Yup.object({
  student_school: Yup.string().required("Student school field is required"),
  student_programs: Yup.string().required("Student programs field is required"),
  student_degree: Yup.string().required("Student degree field is required"),
  student_specialisation: Yup.string().required(
    "Student specialisation field is required"
  ),
  student_how_did_you_hear_about_us: Yup.string().required(
    "How did you hear about us field is required"
  ),
  student_profile_image: Yup.string().required(
    "Student profile image field is required"
  ),

  student_first_name: Yup.string()
    .max(25, "First name cannot be longer than 25 characters")
    .required("Student first name field is required"),

  student_middle_name: Yup.string()
    .max(25, "Middle name cannot be longer than 25 characters")
    .required("Student middle name field is required"),

  student_last_name: Yup.string()
    .max(25, "Last name cannot be longer than 25 characters")
    .required("Student last name field is required"),

  student_nationality: Yup.string().required(
    "Student nationality field is required"
  ),
  student_address: Yup.string().required("Student address field is required"),
  student_apartment: Yup.string().required(
    "Student apartment field is required"
  ),
  student_country: Yup.string().required("Student country field is required"),
  student_state: Yup.string().required("Student state field is required"),
  student_city: Yup.string().required("Student city field is required"),
  student_postal_code: Yup.string().required(
    "Student postal code field is required"
  ),

  student_phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Student phone number field is required"),

  student_email: Yup.string()
    .email("Please enter a valid email address")
    .required("Student email field is required"),

  DD: Yup.number()
    .required("Day is required")
    .min(1, "Day must be at least 1")
    .max(31, "Day must be at most 31"),
  MM: Yup.number()
    .required("Month is required")
    .min(1, "Month must be at least 1")
    .max(12, "Month must be at most 12"),
  YYYY: Yup.number()
    .required("Year is required")
    .min(1900, "Year must be at least 1900")
    .max(new Date().getFullYear(), `Year can't be in the future`),

  student_gender: Yup.string().required("Student gender field is required"),
  student_blood_group: Yup.string().required(
    "Student blood group field is required"
  ),
  student_caste_category: Yup.string().required(
    "Student caste category field is required"
  ),

  student_instagram_url: Yup.string()
    .url("Please enter a valid URL")
    .required("Student Instagram URL field is required"),

  student_linkedin_url: Yup.string()
    .url("Please enter a valid URL")
    .required("Student LinkedIn URL field is required"),

  previous_college_grade_10_details: Yup.string().required(
    "Grade 10 details field is required"
  ),
  previous_college_percentage_grade_secured: Yup.string().required(
    "Percentage grade secured field is required"
  ),
  previous_college_marks_secured: Yup.string().required(
    "Marks secured field is required"
  ),
  previous_college_marks_out_of: Yup.string().required(
    "Marks out of field is required"
  ),
  previous_college_academic_year: Yup.string().required(
    "Academic year field is required"
  ),
  previous_college_examination_board: Yup.string().required(
    "Examination board field is required"
  ),
  previous_college_state: Yup.string().required(
    "Previous college state field is required"
  ),
  previous_college_city: Yup.string().required(
    "Previous college city field is required"
  ),
  previous_college_grade_12th_school_details: Yup.string().required(
    "Grade 12th school details field is required"
  ),
  previous_college_name: Yup.string().required(
    "Previous college name field is required"
  ),

  student_father_name: Yup.string().required(
    "Student father name field is required"
  ),
  student_father_occupation: Yup.string().required(
    "Student father occupation field is required"
  ),
  student_father_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Student father number field is required"),

  student_father_email: Yup.string()
    .email("Please enter a valid email address")
    .required("Student father email field is required"),

  student_mother_name: Yup.string().required(
    "Student mother name field is required"
  ),
  student_mother_occupation: Yup.string().required(
    "Student mother occupation field is required"
  ),
  student_mother_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Student mother number field is required"),

  student_mother_email: Yup.string()
    .email("Please enter a valid email address")
    .required("Student mother email field is required"),

  in_case_of_guardian_please_specify_the_relationship: Yup.string().required(
    "Guardian relationship field is required"
  ),
  statement_of_purpose: Yup.string().required(
    "Statement of purpose field is required"
  ),
});
