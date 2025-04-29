import PropTypes from "prop-types";
export const Pagination = ({ displayPageNoInBox, paginationClick, pageNo }) => {
  return (
    <div className="h-[46px] w-full flex justify-between  fixed bottom-0 left-1/2 transform -translate-x-1/2  text-white lg:transform-none lg:w-max ">
      <button
        className="bg-[#5A538D] hover:bg-[#3C3579] lg:px-[18px] w-full rounded-tl-2xl "
        onClick={() => paginationClick(pageNo - 1)}
      >
        Prev
      </button>
      {displayPageNoInBox.map((_, index) => (
        <button
          key={index}
          onClick={() => paginationClick(index + 1)}
          className={`cursor-pointer  hover:bg-[#3C3579] ${
            pageNo === index + 1 ? "bg-[#3C3579]" : "bg-[#5A538D]"
          } lg:px-[18px] w-full transition-all duration-[500ms]`}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="bg-[#5A538D] hover:bg-[#3C3579] lg:px-[18px] w-full rounded-tr-2xl"
        onClick={() => paginationClick(pageNo + 1)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  displayPageNoInBox: PropTypes.array,
  paginationClick: PropTypes.func,
  pageNo: PropTypes.number,
};
