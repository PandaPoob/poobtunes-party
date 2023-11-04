"use client";
import { useSearchParams } from "next/navigation";
import { YT_SEARCH_API } from "../variables";
import { useState, useEffect } from "react";
import SearchResults from "../_components/SearchResults";

function ResultsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search_query");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const apiUrl = `${YT_SEARCH_API}?q=${search}&key=${apiKey}&part=snippet&type=video`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract and set the search results from the response
        setSearchResults(data.items);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [search]);

  return (
    <div>
      {searchResults ? (
        <SearchResults searchResults={searchResults} />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default ResultsPage;
