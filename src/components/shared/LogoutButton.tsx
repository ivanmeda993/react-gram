import { Button } from "@/components/ui/button.tsx";
import { INITIAL_USER, useUserContext } from "@/context/AuthContext.tsx";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations.ts";
import { useNavigate } from "react-router-dom";

interface ILogoutButtonProps {
  isSidebar?: boolean;
}
const LogoutButton = ({ isSidebar = false }: ILogoutButtonProps) => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };
  return (
    <Button
      variant="ghost"
      className="shad-button_ghost"
      onClick={(e) => handleSignOut(e)}
    >
      <img src="/assets/icons/logout.svg" alt="logout" />
      {isSidebar ? <p className="small-medium lg:base-medium">Logout</p> : null}
    </Button>
  );
};

export default LogoutButton;
