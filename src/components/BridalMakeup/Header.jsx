import React from "react";

function Header({ header }) {
  return (
    <div className="flex text-left text-[22px] font-bold mb-4 px-[30px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] font-poppins">
      {header}
    </div>
  );
}

export default Header;
