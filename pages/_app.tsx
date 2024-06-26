import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { loaduser } from "@/slice/auth";

const UserLoader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(loaduser())
      .unwrap()
      .then(() => console.log(userData));
  }, []);

  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <UserLoader />
      <Component {...pageProps} />
    </Provider>
  );
}
