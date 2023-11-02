import Image from "next/image";
//playlistId=PLdXN83f-XJjINygDBKtexm9BiMGqSyOEs
import { YT_PLAYLIST_API, PLAYLIST_TEST_ID } from "./variables";
import PlaylistSection from "./_components/PlaylistSection";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {playlistData ? (
        <PlaylistSection playlist={playlistData.items} />
      ) : (
        <p>loading</p>
      )}
    </main>
  );
}

export default HomePage;
