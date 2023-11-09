import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const isAuth = false;
  return (
    <>
      {!isAuth ? (
        <Navigate to="/sign-in" />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default RootLayout;
