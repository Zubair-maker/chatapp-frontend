// eslint-disable-next-line no-unused-vars
import React from "react";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return <div>Home</div>;
};

// const Home = AppLayout(Home);
export default AppLayout()(Home);
