import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";

import { Pagination } from "../../Components/Pagination/Pagination";
import { useUserForAdminCustomHook } from "../../customHooks/useUserForAdminCustomHook";

import { SearchBar } from "../../Components/RightSideContent/SearchBar";
export const Ruser = ({ onButtonClick }) => {
  const {
    loading,
    allUserdata,
    paginationClick,
    pageNo,
    displayPageNo,
    searchKeyFunction,
    key,
  } = useUserForAdminCustomHook();

  return (
    <>
      <div className="grid grid-cols-12 w-full   lg:px-3">
        {/* h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] */}
        <div className="col-span-12 lg:col-start-10 lg:col-end-13 mt-5 px-3 lg:px-0">
          <SearchBar onGetSearchKey={searchKeyFunction} />
        </div>
        {allUserdata?.login_Data_with_image?.length === 0 ? (
          <div className="col-span-12 ">
            <img
              src="https://res.cloudinary.com/dlqylweq6/image/upload/v1746516658/image_1-removebg-preview_ogblrc.png"
              className="w-[75%] lg:w-[35%] mx-auto"
              alt=""
            />
          </div>
        ) : (
          <>
            <div className="col-span-12 overflow-auto scrollbar-style-2">
              {loading ? (
                <LoaderInfinitySpin heightclassName="h-[calc(100vh-179px)]" />
              ) : (
                <table className="border-collapse   w-full ">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 text-left py-1 px-2 whitespace-nowrap">
                        Name
                      </th>
                      <th className="border border-gray-300 text-left  py-1 px-2 whitespace-nowrap ">
                        Phone
                      </th>
                      <th className="border border-gray-300 text-left  py-1 px-2 whitespace-nowrap ">
                        Email
                      </th>
                      <th className="border border-gray-300 text-left  py-1 px-2 whitespace-nowrap ">
                        Role
                      </th>
                      <th className="border border-gray-300 text-left  py-1 px-2 whitespace-nowrap ">
                        Profile Image
                      </th>
                      <th className="border border-gray-300 text-left  py-1 px-2 whitespace-nowrap ">
                        Edit/Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(allUserdata.login_Data_with_image) &&
                      allUserdata.login_Data_with_image.map(
                        (element, index) => {
                          return (
                            <tr key={index}>
                              <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                                {element.login_User.name}
                              </td>

                              <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                                {element.login_User.phone_number}
                              </td>
                              <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                                {element.login_User.email}
                              </td>
                              <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                                {element.login_User.role}
                              </td>

                              <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                                <img
                                  className="w-[40px]  h-[40px] lg:w-[35px]  lg:h-[35px] border-2 border-white rounded-[50rem] my-0 mx-auto"
                                  src={
                                    element.login_User.role == "father"
                                      ? element.father_profile_image
                                      : element.login_User.role == "mother"
                                      ? element.mother_profile_image
                                      : element.profile_image
                                  }
                                  alt=""
                                />
                              </td>

                              <td className="border border-gray-300 py-1 px-2 whitespace-nowrap">
                                <button
                                  onClick={() =>
                                    onButtonClick(
                                      element.login_User.userId,
                                      element.login_User.role
                                    )
                                  }
                                  id={element.login_User._id}
                                  className="w-1/2"
                                >
                                  <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button
                                  id={element.login_User._id}
                                  className="w-1/2"
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </td>
                            </tr>
                          );
                        }
                      )}
                  </tbody>
                </table>
              )}
            </div>
            {displayPageNo >= 1 && key === "" ? (
              <Pagination
                pageNo={pageNo}
                paginationClick={paginationClick}
                displayPageNo={displayPageNo}
              />
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
};

Ruser.propTypes = {
  onButtonClick: PropTypes.func,
};
