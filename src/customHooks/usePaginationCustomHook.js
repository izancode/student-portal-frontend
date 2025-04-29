import { useEffect, useState } from "react";
import { allUserGetDataThunk } from "../Redux/ReduxThunk/fetchDataThunks";
import { customToast } from "../utils/CustomAlert/cutomToast";

export const usePaginationCustomHook = () => {
  const [pageNo, setPageNo] = useState(1);
  const [allUserdata, setallUserdata] = useState("");
  const [loading, setLoading] = useState(true);
  const limit = 2;

  const displayPageNo = Math.ceil(allUserdata.number_Of_Login_User / limit);

  const displayPageNoInBox = Array.from({ length: displayPageNo });
  const paginationClick = async (id) => {
    if (id < 1 || id > displayPageNo) {
      return;
    }
    setPageNo(id);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const AllUserDataForAdmin = await allUserGetDataThunk(pageNo, limit);

        if (isMounted) {
          // Only update state if component is mounted
          setallUserdata(AllUserDataForAdmin.data);

          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        customToast("error", error.message);
      }
    };

    fetchData();
    return () => {
      isMounted = false; // Cleanup: set flag false on unmount
    };
  }, [pageNo]);

  return { loading, allUserdata, displayPageNoInBox, paginationClick, pageNo };
};
