import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";

import { Pagination } from "../../Components/Pagination/Pagination";
import { usePaginationCustomHook } from "../../customHooks/usePaginationCustomHook";
export const Ruser = ({ onButtonClick }) => {
  const {
    loading,
    allUserdata,
    displayPageNoInBox,
    paginationClick,
    pageNo,
    displayPageNo,
  } = usePaginationCustomHook();
  return (
    <>
      {loading ? (
        <LoaderInfinitySpin heightclassName="h-[calc(100vh-179px)]" />
      ) : (
        <>
          <div className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
            <div className="col-span-12 px-2 lg:px-0">
              <div className="md:px-4  pb-[50px]">
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
                    {Array.isArray(allUserdata.login_User_Data) &&
                      allUserdata.login_User_Data.map((element, index) => {
                        const userFind = allUserdata.full_User_Data.find(
                          (item) => item._id === element.userId
                        );

                        return (
                          <tr key={index}>
                            <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                              {element.name}
                            </td>

                            <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                              {element.phone_number}
                            </td>
                            <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                              {element.email}
                            </td>
                            <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                              {element.role}
                            </td>

                            <td className="border border-gray-300 py-1 px-2 whitespace-nowrap ">
                              <img
                                className="w-[40px]  h-[40px] lg:w-[35px]  lg:h-[35px] border-2 border-white rounded-[50rem] my-0 mx-auto"
                                src={userFind.profile_image}
                                alt=""
                              />
                            </td>

                            <td className="border border-gray-300 py-1 px-2 whitespace-nowrap">
                              <button
                                onClick={() => onButtonClick(userFind._id)}
                                id={userFind._id}
                                className="w-1/2"
                              >
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button id={element._id} className="w-1/2">
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              {displayPageNo > 1 ? (
                <Pagination
                  pageNo={pageNo}
                  paginationClick={paginationClick}
                  displayPageNoInBox={displayPageNoInBox}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

Ruser.propTypes = {
  onButtonClick: PropTypes.func,
};
