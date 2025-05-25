import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

// const user = true;

const App = () => {

  const {user} = useSelector((state)=> state.auth)
  
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect="/">
                <Login />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
       <Toaster position="bottom-center" />
    </Suspense>
  );
};
export default App;
