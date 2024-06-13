import React from "react";
import Banner from "./Banner";
import CardWrapper1 from "./CardWrapper1/CardWrapper1";
import CardWrapper2 from "./CardWrapper2/CardWrapper2";
import CardWrapper3 from "./CardWrapper3/CardWrapper3";
import CardWrapper4 from "./CardWrapper4/CardWrapper4";
import CardWrapper5 from "./CardWrapper5/CardWrapper5";
import CardWrapper6 from "./CardWrapper6/CardWrapper6";
import CardWrapper7 from "./CardWrapper7/CardWrapper7";
import CardWrapper8 from "./CardWrapper8/CardWrapper8";

function Home() {
  return (
    <>
      <div className="font-poppins" >
        <Banner></Banner>
        <div className="custom-container">
          <CardWrapper8></CardWrapper8>
        </div>
        <div className="custom-container">
          <CardWrapper1></CardWrapper1>
        </div>
        <div className="custom-container">
          <CardWrapper6></CardWrapper6>
        </div>

        <div className="custom-container">
          <CardWrapper7></CardWrapper7>
        </div>
        <div className="custom-container">
          <CardWrapper2></CardWrapper2>
        </div>
        <div className="custom-container">
          <CardWrapper3></CardWrapper3>
        </div>
        <div className="custom-container">
          <CardWrapper4></CardWrapper4>
        </div>
        <div className="custom-container">
          <CardWrapper5></CardWrapper5>
        </div>
        <style>{`
          .flex::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </>
  );
}

export default Home;
