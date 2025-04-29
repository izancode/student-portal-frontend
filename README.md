# Project Title: SchoolCool - Frontend

SchoolCool is an all-in-one school management web application that aims to streamline administrative processes, improve communication, and enhance the overall educational experience for students, teachers, and parents. The application will be built using a modern technology stack to provide a user-friendly, efficient, and secure platform.

The front-end will be designed with a responsive and intuitive user interface, ensuring a seamless experience across various devices. The back-end will consist of a robust API that handles all data transactions and supports role-based access control to protect sensitive information. The database will store and manage all relevant data, including student records, staff information, course schedules, attendance, and grades.

# Feature Set

The web-based application should provide the following feature set. Feel free to extend this to make the project more vibrant:

User Authentication: This feature supports the registration, login, and role-based access control for different user types, including administrators, teachers, students, and parents.
Student Management: This feature allows for the creation, modification, and deletion of student records, including personal information, enrolment status, and academic history.
Staff Management: This feature enables the administration to manage staff information, including personal details, employment status, and teaching assignments.
Course Scheduling: This feature facilitates the creation and management of course schedules, including class timings, room assignments, and instructor allocation.
Attendance Tracking: This feature allows teachers to record and track student attendance for each class, while administrators and parents can monitor overall attendance trends.
Grade Management: This feature enables teachers to input and manage student grades, as well as generate report cards and progress reports for parents.
Parent Portal: This feature provides parents with access to their children's academic information, including attendance, grades, and teacher feedback.
Communication Tools: This feature offers messaging functionality for direct communication between teachers, students, and parents, as well as group messaging for announcements and notifications.
Resource Management: This feature allows administrators to manage school resources, such as classrooms, labs, and equipment, and track their usage and availability.
Dashboard and Reporting: This feature provides users with personalized dashboards and generates various reports to help monitor performance and make data-driven decisions.

# Error & Warning To Solve

1. react_jsx-dev-runtime.js?v=be7a7dcb:64 Warning: Each child in a list should have a unique "key" prop. Solved Now ✔

# Created Page Feauture Function

1. Login Page Ui
2. Signup Page
   - Student
     - Use Redux to store Signup Data in a Store
     - Using Redux Updated data on MongoDB Atlas Thru API - Student Form
   - Faculty

- Backend Error Show on Frontend
  With the help of nodejs Api i extract the error message in redux thunk then and also with help
  of unwrapResult function i used that error in from in formik and also set error in formik schema with setFieldError
- Image Will Goes To cloudinary and that url comes into backend data
- after cloudinary part in backend i have to upload student image from frontend
- Error - Date of birthdate future date also
- Upload File from frontend to backend with formik to formdata
  challenges : For choose file making custom onchange to get file object and with the help of formdata and
  headers: {
  "Content-Type": "multipart/form-data",
  },
  upload image from frontend
- Created Custom Hooks name useFormikCustomHooks.js to code more optimize and readable
- Faculty Form Frontend + Backend same as student signin form
- All the Api Credential want to add in Env file
- Student and Faculty Field make perfect and valid Data in SelectBox
- just for testing
- login otp and home is ready with authentication
- there is 4 types of validation 1.Admin 2.Faculty 3.student 4.Parents
- Till now i created a lot of basic feauture in this project now user can login with 4 different
- and based upon it role the dashboard will diplayed for each user
- user can update his own profile when they are succefully login
- and also for student parents and make some new thing in frontend like if role is student then student can se his father mother deatail but they can't change as same for parents also
- now i m working on admin role becoz admin have authority to control all over the dashboard they can change menu they can change the theame then can update any user detail and many more



# Exprience

Now i have just made header with responsive i want to share my experience with tailwind is pretty good i dont have to create a single css or css file
its very simple to use in class only i really love it


