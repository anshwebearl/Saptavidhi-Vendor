import img1 from '../../assets/images/ic1.png';
import img2 from '../../assets/images/ic2.png';
import img3 from '../../assets/images/ic3.png';
import img4 from '../../assets/images/ic4.png';
import img5 from '../../assets/images/ic5.png';
import img6 from '../../assets/images/ic6.png';
import img7 from '../../assets/images/ic7.png';
import img8 from '../../assets/images/ic8.png';

const Card = ({ name, phone, email, status, statusText }) => {
  return (
    <div className="bg-white border-[#00000033] md:max-w-[400px] border-[1px] rounded-2xl p-3 md:p-4 flex flex-col gap-2 md:gap-3 ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-base md:text-lg font-medium truncate">{name}</h2>
          <p className="text-xs md:text-sm text-black opacity-60 truncate">{phone}</p>
          <p className="text-xs md:text-sm text-black opacity-60 truncate">{email}</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex justify-end gap-2 md:gap-3">
            <div className="w-8 h-8 border border-[#FD0707] border-opacity-40 rounded-lg flex justify-center items-center">
              <img src={img6} className="w-4 h-4" alt="Mail Icon" />
            </div>
            <div className="w-8 h-8 border border-purple-800 border-opacity-40 rounded-lg flex justify-center items-center">
              <img src={img7} className="w-4 h-4" alt="Call Icon" />
            </div>
          </div>
          <div className={`rounded-lg px-2.5 py-0.5 flex items-center gap-1.5 ${status === 'Active' ? 'bg-green-200' : status === 'Inactive' ? 'bg-red-200' : status === 'Expired' ? 'bg-gray-200' : 'bg-yellow-200'}`}>
            <div className={`w-1.75 h-1.75 rounded-full ${status === 'Active' ? 'bg-green-600' : status === 'Inactive' ? 'bg-red-600' : status === 'Expired' ? 'bg-gray-600' : 'bg-yellow-200'}`}></div>
            <img src={img8} alt="Status Icon" className="w-2 h-2" />
            <span className={`text-xs md:text-sm font-medium ${status === 'Active' ? 'text-green-600' : status === 'Inactive' ? 'text-red-600' : status === 'Expired' ? 'text-gray-600' : 'text-yellow-600'}`}>{statusText}</span>
          </div>
        </div>
      </div>
      <div className="border-[#00000033] border-b-[1px]"></div>
      <div className="flex flex-wrap gap-1">
        <div className="border-[1px] border-[#00000033] rounded-lg px-1.5 py-1 flex items-center gap-1.5">
          <img src={img1} className="w-3.75 h-3.75 text-black opacity-60" alt="Icon 1" />
          <span className="text-[10px] md:text-xs font-medium text-black opacity-60 truncate">300+</span>
        </div>
        <div className="border-[1px] border-[#00000033] rounded-lg px-1.5 py-1 flex items-center gap-1.5">
          <img src={img2} className="w-3.75 h-2.625 text-black opacity-60" alt="Icon 2" />
          <span className="text-[10px] md:text-xs font-medium text-black opacity-60 truncate">152 Rooms</span>
        </div>
        <div className="border-[1px] border-[#00000033] rounded-lg px-1.5 py-1 flex items-center gap-1.5">
          <img src={img3} className="w-3.25 h-3.25 text-black opacity-60" alt="Icon 3" />
          <span className="text-[10px] md:text-xs font-medium text-black opacity-60 truncate">20/06/2024</span>
        </div>
        <div className="border-[1px] border-[#00000033] rounded-lg px-1.5 py-1 flex items-center gap-1.5">
          <img src={img4} className="w-3.5 h-3.5 text-black opacity-60" alt="Icon 4" />
          <span className="text-[10px] md:text-xs font-medium text-black opacity-60 truncate">Evening</span>
        </div>
        <div className="border-[1px] border-[#00000033] rounded-lg px-1.5 py-1 flex items-center gap-1.5">
          <img src={img5} className="w-4 h-4 text-black" alt="Icon 5" />
          <span className="text-[10px] md:text-xs font-medium text-black opacity-60 truncate">Wedding</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
