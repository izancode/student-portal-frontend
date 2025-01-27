import { useEffect, useState } from "react";
import axios from "axios";

export const useProtectCustomHook = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_CHECK_TOKEN_GET_API,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setError(error.response.data);

        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuthentication();
  }, []);

  return { isAuthenticated, loading, error };
};
