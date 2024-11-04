import * as Yup from "yup";

export const studentSignUpSchema = Yup.object({
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

export const facultySignUpSchema = Yup.object({
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

export const loginSchema = Yup.object({
  login_with_email_phone: Yup.string()
    .test(
      "email-or-phone",
      "Please enter a valid email or a 10-digit phone number",
      function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    )
    .required("This field is required"),
});

export const otpSchema = Yup.object({
  otp1: Yup.number()
    .required("OTP field is required")
    .min(0, "Must be at least 0")
    .max(9, "Must be at most 9")
    .integer("Must be a whole number")
    .typeError("Must be a number"),

  otp2: Yup.number()
    .required("OTP field is required")
    .min(0, "Must be at least 0")
    .max(9, "Must be at most 9")
    .integer("Must be a whole number")
    .typeError("Must be a number"),

  otp3: Yup.number()
    .required("OTP field is required")
    .min(0, "Must be at least 0")
    .max(9, "Must be at most 9")
    .integer("Must be a whole number")
    .typeError("Must be a number"),

  otp4: Yup.number()
    .required("OTP field is required")
    .min(0, "Must be at least 0")
    .max(9, "Must be at most 9")
    .integer("Must be a whole number")
    .typeError("Must be a number"),
});

export const studentInitialValues = {
  student_school: "",
  student_programs: "",
  student_degree: "",
  student_specialisation: "",
  student_how_did_you_hear_about_us: "",
  student_profile_image: null, // or use "" if you prefer
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

export const loginInitialValues = {
  login_with_email_phone: "",
};

export const otpInitialValues = {
  otp1: "",
  otp2: "",
  otp3: "",
  otp4: "",
};

export const facultyInitialValues = {
  faculty_id: null, // Or you can use `undefined` if you prefer
  department: "",
  designation_position: "",
  qualification: "",
  experience_in_year: "",
  courses_subjects_taught: "",
  faculty_profile_image: "", // Or you can use `null` if no image
  faculty_first_name: "",
  faculty_middle_name: "",
  faculty_last_name: "",
  faculty_nationality: "",
  faculty_address: "",
  faculty_apartment: "",
  faculty_country: "",
  faculty_state: "",
  faculty_city: "",
  faculty_postal_code: "",
  faculty_phone_number: "",
  faculty_email: "",
  DD: "",
  MM: "",
  YYYY: "",
  faculty_gender: "",
  faculty_instagram_url: "",
  faculty_linkedin_url: "",
  research_interests_if_applicable: "",
  publications_if_applicable: "",
};

export const studentDumyInitialValues = {
  student_school: "Greenwood High School",
  student_programs: "Computer Science",
  student_degree: "Bachelor of Science (B.Sc.)",
  student_specialisation: "Design Management",
  student_how_did_you_hear_about_us: "Word of Mouth",
  student_profile_image: null, // or use "" if you prefer
  student_first_name: "Faizan",
  student_middle_name: "Sabir",
  student_last_name: "Shaikh",
  student_nationality: "Indian",
  student_address: "Byculla",
  student_apartment: "Tehseen Tower",
  student_country: "India",
  student_state: "Maharashtra",
  student_city: "Mumbai",
  student_postal_code: "40008",
  student_phone_number: "7666129168",
  student_email: "sf48116@gmail.com",
  DD: "30",
  MM: "11",
  YYYY: "1999",
  student_gender: "Male",
  student_blood_group: "A+",
  student_caste_category: "General",
  student_instagram_url: "https://www.instagram.com/izancode/",
  student_linkedin_url: "https://www.linkedin.com/in/izancode/",
  previous_college_grade_10_details: "B",
  previous_college_percentage_grade_secured: "60",
  previous_college_marks_secured: "319",
  previous_college_marks_out_of: "400",
  previous_college_academic_year: "2020-2021",
  previous_college_examination_board: "State Board of Maharashtra",
  previous_college_state: "Maharashtra",
  previous_college_city: "Mumbai",
  previous_college_grade_12th_school_details: "58",
  previous_college_name: "Maharashtra College",
  student_father_name: "Sabir Shaikh",
  student_father_occupation: "Business",
  student_father_number: "9892306284",
  student_father_email: "father@gmail.com",
  student_mother_name: "Ruqaiyya",
  student_mother_occupation: "Housewife",
  student_mother_number: "9987394168",
  student_mother_email: "mother@gmail.com",
  in_case_of_guardian_please_specify_the_relationship: "No",
  statement_of_purpose: "Just for testing",
};

export const facultyDumyInitialValues = {
  faculty_id: 55555, // Or you can use `undefined` if you prefer
  department: "Computer Science",
  designation_position: "Assistant Professor",
  qualification: "Ph.D. in Computer Science",
  experience_in_year: "5 years",
  courses_subjects_taught: "Introduction to Programming",
  faculty_profile_image: null, // Or you can use `null` if no image
  faculty_first_name: "Faizan",
  faculty_middle_name: "Sabir",
  faculty_last_name: "Shaikh",
  faculty_nationality: "Indian",
  faculty_address: "Byculla",
  faculty_apartment: "Tehseen Tower",
  faculty_country: "India",
  faculty_state: "Maharashtra",
  faculty_city: "Mumbai",
  faculty_postal_code: "40008",
  faculty_phone_number: "7666129168",
  faculty_email: "sf48116@gmail.com",
  DD: "30",
  MM: "11",
  YYYY: "1999",
  faculty_gender: "Male",
  faculty_instagram_url: "https://www.instagram.com/izancode/",
  faculty_linkedin_url: "https://www.linkedin.com/in/izancode/",
  research_interests_if_applicable: "just for testing",
  publications_if_applicable: "just for testing",
};

export const arrayStudentField = [
  {
    type: "heading",
    heading: "Academic Information:",
    name: "academic_information:",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full",
  },
  {
    type: "select",
    name: "student_school",
    placeholder: "School",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Greenwood High School",
      "Springfield Academy",
      "Riverside Secondary School",
      "Oakwood International School",
      "Hillcrest High School",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_programs",
    placeholder: "Programs",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Computer Science",
      "Business Administration",
      "Mechanical Engineering",
      "Graphic Design",
      "Biotechnology",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_degree",
    placeholder: "Degree",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Bachelor of Science (B.Sc.)",
      "Bachelor of Arts (B.A.)",
      "Bachelor of Engineering (B.Eng.)",
      "Master of Business Administration (MBA)",
      "Doctor of Philosophy (Ph.D.)",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_specialisation",
    placeholder: "Specialisation",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Design Management",
      "Strategic Thinking",
      "User Experience Design",
      "Product Design",
      "Brand Management",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_how_did_you_hear_about_us",
    placeholder: "How did you hear about us?",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Word of Mouth",
      "Social Media",
      "Online Advertisement",
      "Educational Fair",
      "Referral from a Friend",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "file",
    name: "student_profile_image",
    profileImage: "Profile image",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    fieldClassName:
      "absolute block h-14 opacity-0 cursor-pointer w-full px-2.5 py-2.5 text-sm",
    buttonClassName:
      "block h-14 flex items-center font-semibold rounded-lg text-left px-2.5 py-2.5 w-full cursor-pointer text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer z-0",
  },
  {
    type: "heading",
    heading: "Personal Information :",
    name: "personal_information",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full ",
  },
  {
    type: "input",
    name: "student_first_name",
    placeholder: "First name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_middle_name",
    placeholder: "Middle name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_last_name",
    placeholder: " Last name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "select",
    name: "student_nationality",
    placeholder: "Nationality",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Indian", "American", "Canadian", "British", "Australian"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "input",
    name: "student_address",
    placeholder: " Address",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_apartment",
    placeholder: " Apartment, suit, etc",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "select",
    name: "student_country",
    placeholder: "Country",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "India",
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_state",
    placeholder: "State",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Maharashtra", "Delhi", "Gujarat", "Karnataka"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_city",
    placeholder: "City",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Bengaluru ", "Mumbai ", "Chennai ", "Hyderabad", "Kolkata"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "input",
    name: "student_postal_code",
    placeholder: " Postal code",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "number",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_phone_number",
    placeholder: "  Phone Number",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "tel",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_email",
    placeholder: " Email Address",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "email",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "multiple",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    multipleFields: [
      {
        key: "dd",
        name: "DD",
        type: "text",

        divClass: "w-1/3 ",
        labelClassName:
          "cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        inputClass:
          "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        key: "mm",
        name: "MM",
        type: "text",

        divClass: "w-1/3 px-1 ",
        labelClassName:
          "cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        inputClass:
          "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        key: "yyyy",
        name: "YYYY",
        type: "text",

        divClass: "w-1/3 ",
        labelClassName:
          "cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        inputClass:
          "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
    ],
  },
  {
    type: "select",
    name: "student_gender",
    placeholder: "Gender",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Male",
      "Female",
      "Non-Binary",
      "Transgender",
      "Prefer Not to Say",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_blood_group",
    placeholder: "Student Blood Group",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["A+", "B-", "O+", "AB-", "O-"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "student_caste_category",
    placeholder: "Caste Category",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "General",
      "OBC (Other Backward Classes)",
      "SC (Scheduled Caste)",
      "NT(C)",
      "ST (Scheduled Tribe)",
      "VJ/DT",
      "EWS (Economically Weaker Sections)",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "input",
    name: "student_instagram_url",
    placeholder: " Instagram URL",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "url",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_linkedin_url",
    placeholder: " Linkedin URL",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "url",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "heading",
    heading: "Previous Academic Records :",
    name: "previous_academic_records",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full",
  },
  {
    type: "input",
    name: "previous_college_grade_10_details",
    placeholder: " Grade 10 details",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "previous_college_percentage_grade_secured",
    placeholder: " Percentage/Grade Secured",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "previous_college_marks_secured",
    placeholder: "Marks Secured",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "number",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "previous_college_marks_out_of",
    placeholder: "Marks Out of",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "number",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "select",
    name: "previous_college_academic_year",
    placeholder: "Academic Year",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["2022-2023", "2021-2022", "2020-2021", "2019-2020", "2018-2019"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "previous_college_examination_board",
    placeholder: "Examination Board",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      " CBSE (Central Board of Secondary Education) ",
      " ICSE (Indian Certificate of Secondary Education)  ",
      " State Board of Maharashtra",
      " State Board of Tamil Nadu",
      " NIOS (National Institute of Open Schooling)",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "previous_college_state",
    placeholder: "State",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Maharashtra ",
      "Karnataka ",
      "Tamil Nadu ",
      "Uttar Pradesh ",
      "West Bengal",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "previous_college_city",
    placeholder: "City",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Mumbai ", "Bengaluru ", "Chennai ", "Pune ", "Delhi"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "previous_college_grade_12th_school_details",
    placeholder: "Grade 12th School details",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "St. Xavier's College, Mumbai",
      "Delhi Public School, Bengaluru",
      "Kendriya Vidyalaya, Chennai",
      "Modern School, Delhi",
      "The International School, Pune",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "input",
    name: "previous_college_name",
    placeholder: "College Name - Graduation",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "heading",
    heading: " Parent Details :",
    name: " parent_details",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full",
  },
  {
    type: "input",
    name: "student_father_name",
    placeholder: "Father's Name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_father_occupation",
    placeholder: "Father's Occupation",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_father_number",
    placeholder: "Father's Mobile Number",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "number",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_father_email",
    placeholder: "Father's Email Address",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "email",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },

  {
    type: "input",
    name: "student_mother_name",
    placeholder: "Mother's Name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_mother_occupation",
    placeholder: "Mother's Occupation",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_mother_number",
    placeholder: "Mother's Mobile Number",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "number",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "student_mother_email",
    placeholder: "Mother's Email Address",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "email",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "textarea",
    name: "in_case_of_guardian_please_specify_the_relationship",
    placeholder: "In case of Guardian relationship",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "textarea",
    name: "statement_of_purpose",
    placeholder: "Statement of Purpose (SOP)",
    className: "w-full lg:w-1/3 lg:px-4",
    divclassName: "w-full  lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
    rows: "4",
  },
  {
    type: "button",
    name: "student_submit",
    btnname: "Submit",
    btnType: "submit",
    className: "w-full lg:w-1/4 lg:px-4",
  },
];
export const arrayFacultyField = [
  {
    type: "heading",
    heading: "Professional Information:",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full",
  },
  {
    type: "input",
    name: "faculty_id",
    placeholder: "Faculty ID",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },

  {
    type: "select",
    name: "department",
    placeholder: "Department",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "English Literature",
      "Mechanical Engineering",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "designation_position",
    placeholder: "Designation/Position",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Assistant Professor",
      "Associate Professor",
      "Professor",
      "Lecturer",
      "Head of Department",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "qualification",
    placeholder: "Qualification",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Ph.D. in Computer Science ",
      "M.Sc. in Physics",
      "M.A. in English Literature",
      "M.Tech. in Mechanical Engineering",
      "MBA in Human Resource Management",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "experience_in_year",
    placeholder: "Experience in Year",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["5 years", "10 years", "15 years", "20 years", "8 years"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "courses_subjects_taught",
    placeholder: "Courses/Subjects Taught",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Introduction to Programming",
      "Advanced Calculus",
      "Quantum Physics",
      "English Composition",
      "Thermodynamics",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "file",
    name: "faculty_profile_image",
    profileImage: "Profile image",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    fieldClassName:
      "absolute block h-14 opacity-0 cursor-pointer w-full px-2.5 py-2.5 text-sm",
    buttonClassName:
      "block h-14 flex items-center font-semibold rounded-lg text-left px-2.5 py-2.5 w-full cursor-pointer text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer z-0",
  },
  {
    type: "heading",
    heading: "Personal Information:",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full ",
  },
  {
    type: "input",
    name: "faculty_first_name",
    placeholder: "First name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "faculty_middle_name",
    placeholder: "Middle name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "faculty_last_name",
    placeholder: " Last name",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "select",
    name: "faculty_nationality",
    placeholder: "Nationality",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Indian", "American", "Canadian", "British", "Australian"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "input",
    name: "faculty_address",
    placeholder: " Address",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "faculty_apartment",
    placeholder: " Apartment, suit, etc",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "select",
    name: "faculty_country",
    placeholder: "Country",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "India",
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "faculty_state",
    placeholder: "State",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Maharashtra", "Delhi", "Gujarat", "Karnataka"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "select",
    name: "faculty_city",
    placeholder: "City",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: ["Bengaluru ", "Mumbai ", "Chennai ", "Hyderabad", "Kolkata"],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    type: "input",
    name: "faculty_postal_code",
    placeholder: " Postal code",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "number",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "faculty_phone_number",
    placeholder: "  Phone Number",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "tel",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "faculty_email",
    placeholder: " Email Address",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "email",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "multiple",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    multipleFields: [
      {
        key: "dd",
        name: "DD",
        type: "text",
        divClass: "w-1/3 ",
        labelClassName:
          "cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        inputClass:
          "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        key: "mm",
        name: "MM",
        type: "text",
        divClass: "w-1/3 px-1 ",
        labelClassName:
          "cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        inputClass:
          "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        key: "yyyy",
        name: "YYYY",
        type: "text",
        divClass: "w-1/3 ",
        labelClassName:
          "cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        inputClass:
          "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
    ],
  },
  {
    type: "select",
    name: "faculty_gender",
    placeholder: "Gender",
    divclassName: "w-full lg:w-1/3 lg:px-4",

    options: [
      "Male",
      "Female",
      "Non-Binary",
      "Transgender",
      "Prefer Not to Say",
    ],
    fieldClassName:
      "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },

  {
    type: "input",
    name: "faculty_instagram_url",
    placeholder: " Instagram URL",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "url",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "faculty_linkedin_url",
    placeholder: " Linkedin URL",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "url",
    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "heading",
    heading: " Additional Information:",
    className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
    divclassName: "w-full",
  },
  {
    type: "textarea",
    name: "research_interests_if_applicable",
    placeholder: " Research Interests (if applicable)",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/2 lg:px-4",
    rows: "4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "textarea",
    name: "publications_if_applicable",
    placeholder: "Publications (if applicable)",
    className: "w-full lg:w-1/3 lg:px-4",
    inputType: "text",
    divclassName: "w-full lg:w-1/2 lg:px-4",
    rows: "4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "button",
    name: "faculty_submit",
    btnname: "Submit",
    btnType: "submit",
    className: "w-full lg:w-1/4 lg:px-4",
  },
];

export const arrayOtpField = {
  multipleFields: [
    {
      key: "otp1",
      name: "otp1",
      type: "text",

      divClass: "w-1/4",
      labelClassName:
        " hidden cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
      inputClass:
        "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-2.5 text-center text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    },
    {
      key: "otp2",
      name: "otp2",
      type: "text",

      divClass: "w-1/4 px-1 ",
      labelClassName:
        "hidden cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
      inputClass:
        "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-2.5 text-center text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    },
    {
      key: "otp3",
      name: "otp3",
      type: "text",

      divClass: "w-1/4 px-1",
      labelClassName:
        " hidden cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
      inputClass:
        "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-2.5 text-center text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    },
    {
      key: "otp4",
      name: "otp4",
      type: "text",

      divClass: "w-1/4",
      labelClassName:
        "hidden cursor-text absolute text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
      inputClass:
        "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-2.5 text-center text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    },
  ],
};
