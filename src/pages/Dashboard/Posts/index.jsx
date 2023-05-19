import {
  SignIn,
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
} from "@clerk/clerk-react";

function Posts() {
  const { user } = useUser();
  const { signOut } = useAuth();

  console.log({ user });

  return (
    <div>
      <SignedIn>
        <h1>{user?.username}</h1>
        <div>
          <button
            onClick={signOut}
            className="rounded bg-rose-700 px-4 py-2 font-bold text-white"
          >
            Signout
          </button>
        </div>
      </SignedIn>

      <SignedOut>
        <div>
          <SignIn />
        </div>
      </SignedOut>
    </div>
  );
}

export default Posts;
