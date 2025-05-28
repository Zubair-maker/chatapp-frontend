import { lazy, Suspense, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import api from "./config/api";
import { userExist, userNotExist } from "./redux/reducers/authSlice";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

// const user = true;

const App = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const resp = await api.get("user/me");
        console.log("hhh", resp);
        dispatch(userExist(resp?.data?.data));
      } catch (error) {
        dispatch(userNotExist());
        toast.error(error.response?.data?.message);
      }
    };

    getUserData();
  }, [dispatch]);

  return loading ? (
    <>
      <h2>Loading user data...</h2>
    </>
  ) : (
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
