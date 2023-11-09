import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex-1 flex flex-col  justify-center items-center py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            className="hidden md:block h-screen w-1/2 object-cover bg-no-repeat"
            alt="Authentication"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
