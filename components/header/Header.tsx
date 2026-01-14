"use client";
import Link from "next/link";
import HeaderBurger from "../header-burger/HeaderBurger";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const getBurgerStatus = (status: boolean) => {
    setOpen(status);
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-900 p-6 py-4 text-white">
        <span className="font-bold">Logo</span>
        <ul className="hidden sm:flex gap-2">
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
        <HeaderBurger isOpen={getBurgerStatus} />
      </nav>
      {open && (
        <ul className="sm:hidden flex flex-col items-center gap-2 bg-slate-900 p-4 text-white">
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Header;
