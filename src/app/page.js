import Image from "next/image";
import { YT_PLAYLIST_API, PLAYLIST_TEST_ID } from "./variables";
import PlaylistSection from "./_components/PlaylistSection";
import Intro from "./_components/Intro";

export const metadata = {
  title: "PoobTunes Party",
};

async function getData() {
  try {
    const res = await fetch(
      `${YT_PLAYLIST_API}?part=snippet&playlistId=${PLAYLIST_TEST_ID}&key=${process.env.YOUTUBE_API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function HomePage() {
  const playlistData = await getData();
  console.log("HERE", playlistData);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
      {!playlistData.error ? (
        <PlaylistSection playlist={playlistData.items} />
      ) : (
        <p>Error occurred</p>
      )}
    </div>
  );
}

export default HomePage;
