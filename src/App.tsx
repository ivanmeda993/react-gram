import "./global.css";
import SignInForm from "@/_auth/forms/SignInForm.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "@/_auth/forms/SignUpForm.tsx";
import { Home } from "@/_root/pages";
import AuthLayout from "@/_auth/AuthLayout.tsx";
import RootLayout from "@/_root/RootLayout.tsx";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*Public*/}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/*Private*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
