import VideoForm from "./VideoForm";

function SearchResults({ searchResults }) {
  return (
    <section>
      {searchResults.map((result) => (
        <VideoForm key={result.id.videoId} {...result} />
      ))}
    </section>
  );
}

export default SearchResults;
