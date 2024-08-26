const studentField = [
  {
    fields: [
      {
        type: "heading",
        heading: "Academic Information:",
        className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
        divclassName: "w-full",
      },
      {
        type: "select",
        name: "student_school",
        placeholder: "School",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: [
          "ATLAS | ISDI - School of Design & Innovation",
          "ATLAS | ISME - School of Management & Entrepreneurship",
          "ATLAS | uGDX School of Technology",
        ],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "student_programs",
        placeholder: "Programs",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Under Graduate Degree", "Post Graduate Degree"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "student_degree",
        placeholder: "Degree",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["MBA", "M.Des", "bacit", "b.bom"],
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
          "College Fair / School Visit",
          "College Reference Guide",
          "Counselor / Teacher / Coaching Centre",
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
        heading: "Personal Information:",
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

        options: ["Indian", "Turkish", "China"],
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

        options: ["India", "Turky", "China", "Japan"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "student_state",
        placeholder: "State",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Andhra Pradesh", "Assam", "Madhya Pradesh", "Maharashtra"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "student_city",
        placeholder: "City",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Mumbai ", "Delhi ", "Bengaluru ", "Chennai "],
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

        options: ["Male", "Female", "Others"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "student_blood_group",
        placeholder: "Student Blood Group",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["a", "b", "c"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "student_caste_category",
        placeholder: "Caste Category",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: [
          "SC",
          "BC",
          "NT(A)",
          "NT(C)",
          "NT(D)",
          "VJ/DT",
          "ST",
          "GENERAL",
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
        heading: "Previous Academic Records:",
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

        options: ["201-18", "2018-19", "2019-20", "2020-21"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "previous_college_examination_board",
        placeholder: "Examination Board",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: [
          " (CBSE) Central Board of Secondary Education  ",
          " (ICSE) Indian Certificate of Secondary Education  ",
          " (IGCSE) International General Certificate of Secondary Education  ",
        ],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "previous_college_state",
        placeholder: "State",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Maharastra ", "UK ", "Uttar Pradesh ", "Bhopal "],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "previous_college_city",
        placeholder: "City",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Mumbai ", "Delhi ", "Bengaluru ", "Chennai "],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "previous_college_grade_12th_school_details",
        placeholder: "Grade 12th School details",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: [
          "Vivekananda Kendra Vidyalaya",
          "Vifvvfvvekananda Kendra Vidyalaya",
          "Vivekvfvfananda Kendra Vidyalaya",
          "Vvfvfivekananda Kendra Vidyalaya",
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
        heading: " Parent Details",
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
    ],
  },
];

export default studentField;
