import VideoForm from "./VideoForm";
import { useSession } from "next-auth/react";

function SearchResults({ searchResults }) {
  const { data: session } = useSession();
  console.log(session);

  return (
    <section>
      {searchResults.map((result) => (
        <VideoForm key={result.id.videoId} {...result} />
      ))}
    </section>
  );
}

export default SearchResults;
