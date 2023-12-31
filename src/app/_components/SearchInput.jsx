"use client";
import { useState } from "react";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

function SearchInput() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`/results?search_query=${searchQuery}`);
    router.push(`/results?search_query=${searchQuery}`);
  };

  return (
    <div className="w-full mr-4 relative md:col-start-3 col-end-9">
      <form onSubmit={handleSearch} className="flex">
        <input
          className="w-full h-12 rounded-l-full px-6 border bg-white border-white text-black placeholder:text-lightPurple focus:outline-none focus:border focus:border-brandPink peer transition-all duration-300"
          type="text"
          placeholder="Search for a song"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-brand h-12 w-20 rounded-r-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
        >
          <svg
            className="fill-white mr-2 w-7"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.8858 35.2686L25.5501 22.9329C27.4644 20.4582 28.4999 17.4324 28.4999 14.2499C28.4999 10.4405 27.0131 6.86847 24.3246 4.17523C21.6362 1.48199 18.0547 0 14.2499 0C10.4452 0 6.86372 1.48674 4.17523 4.17523C1.48199 6.86372 0 10.4405 0 14.2499C0 18.0547 1.48674 21.6362 4.17523 24.3246C6.86372 27.0179 10.4405 28.4999 14.2499 28.4999C17.4324 28.4999 20.4534 27.4644 22.9282 25.5549L35.2638 37.8858C35.3 37.922 35.343 37.9507 35.3902 37.9703C35.4375 37.9899 35.4882 38 35.5393 38C35.5905 38 35.6412 37.9899 35.6885 37.9703C35.7357 37.9507 35.7787 37.922 35.8148 37.8858L37.8858 35.8196C37.922 35.7834 37.9507 35.7405 37.9703 35.6932C37.9899 35.6459 38 35.5953 38 35.5441C38 35.4929 37.9899 35.4423 37.9703 35.395C37.9507 35.3477 37.922 35.3048 37.8858 35.2686ZM21.7739 21.7739C19.7599 23.7831 17.0904 24.8899 14.2499 24.8899C11.4095 24.8899 8.73996 23.7831 6.72597 21.7739C4.71673 19.7599 3.60998 17.0904 3.60998 14.2499C3.60998 11.4095 4.71673 8.73521 6.72597 6.72597C8.73996 4.71673 11.4095 3.60998 14.2499 3.60998C17.0904 3.60998 19.7647 4.71198 21.7739 6.72597C23.7831 8.73996 24.8899 11.4095 24.8899 14.2499C24.8899 17.0904 23.7831 19.7647 21.7739 21.7739Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
export default SearchInput;
