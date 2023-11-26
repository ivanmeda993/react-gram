import { Link } from "react-router-dom";

interface ILogoProps {
  isSidebar?: boolean;
}
const Logo = ({ isSidebar = false }: ILogoProps) => {
  return (
    <Link to="/" className="flex gap-3 items-center">
      <img
        src="/assets/images/logo.svg"
        alt="logo"
        width={isSidebar ? 170 : 130}
        height={isSidebar ? 36 : 325}
      />
    </Link>
  );
};

export default Logo;
