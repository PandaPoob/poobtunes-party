import VideoCard from "./VideoCard";

function PlaylistSection({ playlist }) {
  return (
    <section>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h2>Poob's playlist</h2>
      <div>
        {playlist?.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
}

export default PlaylistSection;
