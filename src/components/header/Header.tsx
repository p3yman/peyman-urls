import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="py-8 border-b border-secondary flex justify-between align-center">
      <h1 className="text-2xl font-bold">Peyman&apos;s URLs</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
