import "./global.css";
import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import SignInForm from "@/_auth/forms/SigningForm.tsx";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "@/_auth/forms/SignUpForm.tsx";
import AuthLayout from "@/_auth/AuthLayout.tsx";
import RootLayout from "@/_root/RootLayout.tsx";
import { Toaster } from "react-hot-toast";

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </main>
  );
}

export default App;
