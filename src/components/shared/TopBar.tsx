import Logo from "@/components/shared/Logo.tsx";
import LogoutButton from "@/components/shared/LogoutButton.tsx";
import UserLink from "@/components/shared/UserLink.tsx";

const TopBar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Logo />
        <div className="flex gap-4 items-center justify-center">
          <LogoutButton />
          <UserLink />
        </div>
      </div>
    </section>
  );
};

export default TopBar;
