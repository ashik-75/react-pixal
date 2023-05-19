import { SignIn, useAuth, useUser } from "@clerk/clerk-react";

function App() {
  const user = useUser();

  const auth = useAuth();

  if (!user?.isLoaded) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      {user.isSignedIn ? (
        <div>
          <button
            className="rounded bg-rose-500 px-4 py-2"
            onClick={auth.signOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <SignIn />
      )}

      {user.isSignedIn ? (
        <div>{user.user.username}</div>
      ) : (
        <div>Not Signned in</div>
      )}
    </div>
  );
}

export default App;
