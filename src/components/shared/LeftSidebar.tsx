import Logo from "@/components/shared/Logo.tsx";
import LogoutButton from "@/components/shared/LogoutButton.tsx";
import UserLink from "@/components/shared/UserLink.tsx";
import { NAV_LINKS } from "@/constants";
import { INavLink } from "@/types";
import { useLocation, NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Logo isSidebar />
        <UserLink isSidebar />

        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <LogoutButton isSidebar />
    </nav>
  );
};

export default LeftSidebar;
