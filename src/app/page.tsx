"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

// this is navbar header about call page
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}
