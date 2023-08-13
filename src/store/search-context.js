import { createContext } from "react";

const SearchContext = createContext({
  searchTerm: "",
  searchChange: () => {},
});

export default SearchContext;
