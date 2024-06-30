import React from "react";

function Header({ header }) {
  return (
    <div className="text-[20px] font-[500] px-[30px] md:text-2xl">
      {header}
    </div>
  );
}

export default Header;
