import { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
