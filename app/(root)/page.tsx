import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth()

  console.log('ses: ', session)

  return (
    <>
      <h1 className="h3-bold background-light850_dark100">
        Welcome to the world of Next.js
      </h1>

      <form className="px-10 pt-[100px]"
      action={async () => {
        'use server';

        await signOut({ redirectTo: ROUTES.SIGN_IN });
      }}>
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
