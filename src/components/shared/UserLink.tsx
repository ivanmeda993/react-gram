import Loader from "@/components/shared/Loader.tsx";
import { useUserContext } from "@/context/AuthContext.tsx";
import { cn } from "@/lib/utils.ts";
import { Link } from "react-router-dom";

interface IUserLinkProps {
  isSidebar?: boolean;
}
const UserLink = ({ isSidebar = false }: IUserLinkProps) => {
  const { user, isLoading } = useUserContext();

  return (
    <>
      {isLoading || !user.email ? (
        <div>
          <Loader />
        </div>
      ) : (
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="profile"
            // className="h-14 w-14 rounded-full"
            className={cn("rounded-full", isSidebar ? "h-14 w-14" : "h-8 w-8")}
          />
          {isSidebar ? (
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
          ) : null}
        </Link>
      )}
    </>
  );
};

export default UserLink;
