function VideoForm(props) {
  console.log(props);
  const { title } = props.snippet;

  return <form action="">{title}</form>;
}

export default VideoForm;
