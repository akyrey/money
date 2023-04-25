import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/layout";
import { LoadingPage } from "~/components/loading";

const Home: NextPage = () => {
  const { isLoaded: isUserLoaded } = useUser();

  if (!isUserLoaded) {
    return <LoadingPage />;
  }

  return (
    <>
      <Head>
        <title>Money App</title>
        <meta name="description" content="Simply expense tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
};

export default Home;
