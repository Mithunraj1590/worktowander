import getPageContent from "@/utilities/usePageContent";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useSearch = (setIsSearchOpen, setIsSearchMenuOpen) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchKeywords, setSearchKeywords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getSearchData = async () => {
    const response = await getPageContent(`search?search=${searchTerm}`);
    setSearchKeywords(response?.data?.widgets?.[0]?.data?.search_keywords);
    setSearchResults(response?.data?.widgets?.[0]?.data?.results);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getSearchData();
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === "Enter" &&
        // !pathname.includes("search") &&
        searchKeywords.length > 0
      ) {
        router.push(`/search`);
        setIsSearchOpen(false);
        setIsSearchMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [searchTerm, searchKeywords]);
  return {
    searchTerm,
    setSearchTerm,
    handleInputChange,
    searchKeywords,
    searchResults,
  };
};
