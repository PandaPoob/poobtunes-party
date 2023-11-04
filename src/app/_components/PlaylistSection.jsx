import VideoCard from "./VideoCard";

function PlaylistSection({ playlist }) {
  return (
    <section id="playlist">
      <h2
        style={{ color: "transparent" }}
        className="webkit-background-clip-text bg-gradient-brand text-transparent bg-clip-text font-display text-4xl leading-normal md:text-8xl md:leading-snug"
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Poob's playlist
      </h2>
      <div>
        {playlist.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
}

export default PlaylistSection;
