
const Card9 = ({ src, name, type, location, price}) => {
    return (
      <div className="font-poppins relative shadow-md flex-shrink-0 w-[150px] h-[300px] md:w-[220px] md:h-[380px] overflow-hidden rounded-3xl ">
        <div
          className={`absolute inset-0 bg-[url('${src}')] bg-cover bg-center bottom-1/4`}
          
        ></div>
        <div className="absolute bg-white w-full bottom-0 h-fit p-3 flex flex-col gap-1 md:gap-2 text-wrap">
          <p className="font-[400] text-xs md:text-sm">{type}</p>
          <p className="font-[600] text-sm md:text-xl leading-none ">{name}</p>
          <p className="font-[500] text-[#626262] text-xs md:text-sm">{location}</p>
          <p className="text-right font-[500] text-base md:text-lg text-[#CF166F]">₹{price}</p>
        </div>
      </div>
    );
  };
  
  export default Card9;
  