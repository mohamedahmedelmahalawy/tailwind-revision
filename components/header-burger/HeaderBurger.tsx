"use client";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

function HeaderBurger({ isOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="sm:hidden block text-xl cursor-pointer">
        <GiHamburgerMenu
          onClick={() => {
            setOpen(!open);
            isOpen(open);
          }}
        />
      </button>
    </>
  );
}

export default HeaderBurger;
