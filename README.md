# 🎓 SchoolCool - Frontend

**SchoolCool** is a comprehensive school management web application designed to streamline administration, enhance communication, and improve the learning experience for students, teachers, and parents. This is the **React.js frontend** of the SchoolCool application.

---

## 📌 Project Overview

- 🌐 Built with a modern frontend stack: **React.js**, **Redux**, **Formik**, **Tailwind CSS**
- 🎯 Role-based dashboards for: **Admin**, **Student**, **Faculty**, **Parents**
- 📱 Fully responsive and mobile-friendly UI
- 🔒 Secure login system with **OTP-based authentication**
- ☁️ Image upload functionality integrated with **Cloudinary**

---

## 🔥 Key Features

### 👨‍🏫 Role-Based Access
- Admin, Student, Faculty, and Parent dashboards
- Conditional rendering of features based on roles
- Restricted edit rights for students/parents on sensitive data

### 🧠 Student & Faculty Onboarding
- Sign-up form using **Formik** with validation and error handling
- Image upload via **FormData** and preview
- Data stored in **MongoDB Atlas** via Node.js APIs

### 🧾 Authentication & Error Handling
- OTP-based login flow for all roles
- API errors handled using Redux Thunks and Formik’s `setFieldError`

### 🧰 Forms & Hooks
- Custom hook `useFormikCustomHooks.js` for optimized form handling
- Role-specific validations built into Formik schemas

### 📁 File Upload
- File upload handling via custom `onChange` events
- Uses `multipart/form-data` headers for compatibility with Node.js backend

---

## 🛠️ Tech Stack

| Layer         | Technologies                      |
|---------------|-----------------------------------|
| Frontend UI   | React.js, Tailwind CSS, Bootstrap |
| State         | Redux Toolkit, Redux Thunk        |
| Forms         | Formik + Yup                      |
| File Upload   | Cloudinary + FormData             |
| API Handling  | Axios                             |
| Auth          | OTP-based system                  |

---

## 📄 Pages Implemented

- ✅ Login Page (OTP-based)
- ✅ Sign-up Page (Student + Faculty with full validation)
- ✅ Role-based Dashboards
- ✅ Update Profile (Student/Faculty/Parent-specific fields)
- ✅ Parent-Student linking views
- ✅ Admin Controls (in progress)

---

## 🐛 Resolved Issues

- ✅ `Warning: Each child in a list should have a unique "key" prop.` — Solved.
- ✅ Date of birth future date issue — Handled in validation.
- ✅ Backend error messages now properly displayed via Redux + Formik.

---

## 💡 Experience

> "While building this UI, my experience with **Tailwind CSS** was smooth and efficient. I didn’t need to write any external CSS files — everything was managed through class utilities. It improved both my development speed and code readability." – *Faizan*

---

## 🌱 Development Notes

- Backend integration with Cloudinary for image uploads
- All credentials securely stored in `.env` file
- Role-based menu rendering and theme control coming soon

---

## 🚧 Roadmap

- [ ] Complete Admin Dashboard features (menu, theme, user control)
- [ ] Notifications system for communication
- [ ] Full gradebook and performance reports
- [ ] Complete attendance dashboard with filtering
- [ ] Deployment via Vercel (Frontend) and Railway/Render (Backend)

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/izancode/student-portal-frontend.git
cd student-portal-frontend
npm install
npm start
```

App will be running on: `http://localhost:3000`

---

## 🙌 Credits

Created with ❤️ by **Faizan Shaikh**  
Frontend Developer | MERN Stack Enthusiast | Tailwind CSS Lover

---

