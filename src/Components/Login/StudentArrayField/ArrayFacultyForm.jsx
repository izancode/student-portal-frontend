const facultyField = [
  {
    fields: [
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

        options: ["Design", "Master", "PHD"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "designation_position",
        placeholder: "Designation/Position",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Seniour Web Developer", "Jr Java Developer"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "qualification",
        placeholder: "Qualification",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["MBA ", "M.Des "],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "experience_in_year",
        placeholder: "Experience in Year",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["1 year", "2 year", "3 year"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "courses_subjects_taught",
        placeholder: "Courses/Subjects Taught",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["English", "Maths", "Marathi"],
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

        options: ["Indian", "Turkish", "China"],
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

        options: ["India", "Turky", "China", "Japan"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "faculty_state",
        placeholder: "State",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Andhra Pradesh", "Assam", "Madhya Pradesh", "Maharashtra"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "select",
        name: "faculty_city",
        placeholder: "City",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Mumbai ", "Delhi ", "Bengaluru ", "Chennai "],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },
      {
        type: "input",
        name: "faculty_postal_code",
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
        name: "faculty_phone_number",
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
        name: "faculty_email",
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
        name: "faculty_gender",
        placeholder: "Gender",
        divclassName: "w-full lg:w-1/3 lg:px-4",

        options: ["Male", "Female", "Others"],
        fieldClassName:
          "w-full bg-[#F0F0F0] font-semibold h-14 rounded-lg px-2.5 text-sm appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      },

      {
        type: "input",
        name: "facultyt_instagram_url",
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
        type: "input",
        name: "research_interests_if_applicable",
        placeholder: " Research Interests (if applicable)",
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
        name: "publications_if_applicable",
        placeholder: "Publications (if applicable)",
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
        name: "special_accommodations_needed_if_any",
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
        type: "heading",
        heading: " Parent Details",
        className: "w-full mb-2 lg:px-4 text-lg text-[#1C22C1]",
        divclassName: "w-full",
      },
      {
        type: "input",
        name: "faculty_father_name",
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
        name: "faculty_father_occupation",
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
        name: "faculty_father_number",
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
        name: "faculty_father_email",
        placeholder: "Father's Email Address",
        className: "w-full lg:w-1/3 lg:px-4",
        inputType: "email",
        pattern: "d{5}(-d{4})?",
        divclassName: "w-full lg:w-1/3 lg:px-4",
        labelClassName:
          "cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        fieldClassName:
          "block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ",
      },

      {
        type: "input",
        name: "faculty_mother_name",
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
        name: "faculty_mother_occupation",
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
        name: "faculty_mother_number",
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
        name: "faculty_mother_email",
        placeholder: "Mother's Email Address",
        className: "w-full lg:w-1/3 lg:px-4",
        inputType: "email",
        pattern: "d{5}(-d{4})?",
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
        pattern: "d{5}(-d{4})?",
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

export default facultyField;
