import { useState, useEffect } from "react";

export function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newData = data.slice(startIndex, endIndex);
    setCurrentData(newData);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    console.log("currentPage:", currentPage);
    console.log("itemsPerPage:", itemsPerPage);
    console.log("data length:", data.length);

    const startIndex = (currentPage - 1) * itemsPerPage;
    console.log("startIndex:", startIndex);

    const endIndex = startIndex + itemsPerPage;
    console.log("endIndex:", endIndex);

    const newData = data.slice(startIndex, endIndex);
    console.log("newData:", newData);

    setCurrentData(newData);
  }, [data, currentPage, itemsPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  };
}
