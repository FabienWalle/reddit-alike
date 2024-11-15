import { Button } from "@nextui-org/react";
import * as actions from '@/actions'
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <form action={actions.SignIn}>
        <Button type="submit">SignIn</Button>
      </form>
      <form action={actions.SignOut}>
        <Button type="submit">SignOut</Button>
      </form>

      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>
      }
      <Profile />
    </div>
  );
}
