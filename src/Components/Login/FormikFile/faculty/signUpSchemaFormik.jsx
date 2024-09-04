import * as Yup from "yup";

export const signUpSchema = Yup.object({
  faculty_id: Yup.number()
    .required("Faculty ID field is required")
    .positive("Faculty ID must be a positive number")
    .integer("Faculty ID must be an integer"),

  department: Yup.string().required("Department field is required"),

  designation_position: Yup.string().required(
    "Designation/Position field is required"
  ),

  qualification: Yup.string().required("Qualification field is required"),

  experience_in_year: Yup.string().required(
    "Experience in years field is required"
  ),

  courses_subjects_taught: Yup.string().required(
    "Courses/Subjects taught field is required"
  ),

  faculty_profile_image: Yup.mixed()
    .nullable()
    .required("Faculty profile image field is required"),

  faculty_first_name: Yup.string()
    .max(25, "First name cannot be longer than 25 characters")
    .required("First name field is required"),

  faculty_middle_name: Yup.string()
    .max(25, "Middle name cannot be longer than 25 characters")
    .required("Middle name field is required"),

  faculty_last_name: Yup.string()
    .max(25, "Last name cannot be longer than 25 characters")
    .required("Last name field is required"),

  faculty_nationality: Yup.string().required("Nationality field is required"),

  faculty_address: Yup.string().required("Address field is required"),

  faculty_apartment: Yup.string().required("Apartment field is required"),

  faculty_country: Yup.string().required("Country field is required"),

  faculty_state: Yup.string().required("State field is required"),

  faculty_city: Yup.string().required("City field is required"),

  faculty_postal_code: Yup.string().required("Postal code field is required"),

  faculty_phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Phone number field is required"),

  faculty_email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email field is required"),

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

  faculty_gender: Yup.string().required("Gender field is required"),

  faculty_instagram_url: Yup.string()
    .url("Please enter a valid Instagram URL")
    .required("Instagram URL field is required"),

  faculty_linkedin_url: Yup.string()
    .url("Please enter a valid LinkedIn URL")
    .required("LinkedIn URL field is required"),

  research_interests_if_applicable: Yup.string().nullable(),

  publications_if_applicable: Yup.string().nullable(),
});
