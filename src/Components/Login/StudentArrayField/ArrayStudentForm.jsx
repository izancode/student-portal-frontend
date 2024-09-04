const studentField = [
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

    options: ["Design Management & Strategic Thinking"],
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
    pattern: "d{5}(-d{4})?",
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
    pattern: "[+]?[0-9s-]{7,15}",
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
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
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
        pattern: "^\\d{2}$",
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
        pattern: "^\\d{2}$",
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
        pattern: "^\\d{4}$",
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
    pattern: "d{5}(-d{4})?",
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
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",

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
    pattern: "d{5}(-d{4})?",
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
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",

    divclassName: "w-full lg:w-1/3 lg:px-4",
    labelClassName:
      "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    fieldClassName:
      "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
  },
  {
    type: "input",
    name: "in_case_of_guardian_please_specify_the_relationship",
    placeholder: "In case of Guardian, please specify the relationship",
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

export default studentField;
