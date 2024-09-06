import { toast } from "react-toastify";
export const customToast = (type = "", description) => {
  switch (type) {
    case "success":
      return toast.success(description);
    case "error":
      return toast.error(description);
  }
};
