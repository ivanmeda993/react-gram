import { NAV_LINKS } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              isActive && "rounded-[10px] bg-primary-500 "
            } flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={16}
              height={16}
              className={`${isActive && "invert-white"}`}
            />

            <p className="tiny-medium text-light-2">
              {link.shortLabel ? link.shortLabel : link.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export default BottomBar;
