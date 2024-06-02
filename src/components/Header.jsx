import React from "react";

function Header({ header }) {
  return (
    <div className="text-[20px] font-bold mb-4 px-[30px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px]">
      {header}
    </div>
  );
}

export default Header;
