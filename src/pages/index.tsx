import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LoadingPage } from "~/components/loading";

const Header = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div>
      <Image
        src={user.profileImageUrl}
        alt="Profile image"
        className="h-14 w-14 rounded-full"
        width={56}
        height={56}
        priority={true}
      />
      <SignOutButton />
    </div>
  );
};

const Home: NextPage = () => {
  const { isLoaded: isUserLoaded, isSignedIn } = useUser();

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
      <main className="flex h-screen justify-center">
        <div className="w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            <div className="flex justify-center">
              {!isSignedIn && <SignInButton />}
              {isSignedIn && <Header />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
