import React from "react";
import StarterPlan from "./Starter";
import Advance from "./Advance";
import Pro from "./Pro";

function Packages() {
  return (
    <div className="flex bg-white p-4 md:p-6 w-full border-2 rounded-xl flex-col gap-3">
      <h2 className="md:text-2xl text-lg font-[500]">
        Membership Packages
      </h2>
      <hr className="border-black/20 w-full" />
      <div className="flex flex-row flex-wrap justify-around gap-5 md:gap-12 p-3 md:p-5">
        <StarterPlan />
        <Advance />
        <Pro />
      </div>
    </div>
  );
}

export default Packages;
