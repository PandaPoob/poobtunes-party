import Image from "next/image";

function VideoCard(props) {
  const { title, thumbnails, videoOwnerChannelTitle } = props.snippet;

  return (
    <article className="flex flex-col gap-2 max-w-sm">
      <div
        className="rounded-2xl overflow-hidden relative w-full h-auto min-h-[12rem]"
        style={{ paddingBottom: "56.25%" }}
      >
        <Image
          src={thumbnails.high.url}
          alt={title}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className="opacity-50 text-xs">{videoOwnerChannelTitle}</span>

      <h3>{title}</h3>
    </article>
  );
}

export default VideoCard;
