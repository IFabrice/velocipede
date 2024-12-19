import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./login/login";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-black text-white">
      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div>i love bikes!</div>
      </div>
    </main>
  );
}
