import { Dispatch, SetStateAction } from "react";

function Pagination({
  currentPage,
  setCurrentPage,
  paginationLength,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  paginationLength: number;
}) {
  // Make Fake Array To Loop At (Pagination Length)
  const pagArr = Array(paginationLength).fill(1);

  // Next Button
  function nextHandler() {
    if (currentPage < paginationLength) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <ul className=" flex gap-4 w-fit mx-auto mt-10">
      {pagArr.map((pag, index) => {
        return (
          <li
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`py-2 px-4 bg-pink rounded text-center cursor-pointer transition ${
              currentPage === index + 1 && "!bg-goldPrimary text-white"
            }`}
          >
            {index + 1}
          </li>
        );
      })}

      <button
        onClick={nextHandler}
        className="py-2 px-4 bg-pink rounded text-center cursor-pointer"
      >
        Next
      </button>
    </ul>
  );
}
export default Pagination;
