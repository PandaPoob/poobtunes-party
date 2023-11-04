import VideoCard from "./VideoCard";

function PlaylistSection({ playlist }) {
  return (
    <section id="playlist" className="py-6 min-h-screen max-w-7xl">
      <h2
        style={{ color: "transparent" }}
        className="webkit-background-clip-text bg-gradient-brand text-transparent bg-clip-text font-display text-4xl leading-normal md:text-6xl md:leading-snug mb-8 md:mb-20 text-center"
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Poob's playlist
      </h2>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
        {playlist.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
}

export default PlaylistSection;
