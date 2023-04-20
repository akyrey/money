import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { type NextPage } from "next";
import Head from "next/head";
import { LoadingPage } from "~/components/loading";

const Header = () => {
  return (
    <header className="flex">
      <SignedIn>
        <UserButton
          showName={true}
          appearance={{ baseTheme: dark, userProfile: { baseTheme: dark } }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
};

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
      <main className="flex h-screen justify-center">
        <div className="w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            <div className="flex justify-center">
              <Header />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
