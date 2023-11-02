function VideoCard(props) {
  const { title } = props.snippet;
  return (
    <article>
      <h3>{title}</h3>
    </article>
  );
}

export default VideoCard;
