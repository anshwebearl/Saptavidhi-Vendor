import React from "react";

function Header({ header }) {
  return (
    <div className="text-[20px] font-[500] mb-4 px-[30px] md:text-3xl">
      {header}
    </div>
  );
}

export default Header;
