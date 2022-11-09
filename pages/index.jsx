import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>whatsapp by nik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons8-whatsapp-32.png" />
      </Head>

      <Sidebar />
    </div>
  );
}
