import type { FC } from "react";
import { useState } from "react";

export interface SearchProps {
  handleSubmit?: (value: string) => void;
  handleSearchTermChange?: (value: string) => void;
}

export const Search: FC<SearchProps> = ({
  handleSubmit,
  handleSearchTermChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        if (handleSearchTermChange) handleSearchTermChange(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (handleSubmit) handleSubmit(searchTerm);
        }
      }}
    />
  );
};
