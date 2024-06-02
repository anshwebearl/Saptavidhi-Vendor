import infoIcon from "../../assets/images/Vector1.png";

const VendorInfo2 = () => {
  return (
    <div className="mt-4 md:mt-5 flex flex-col gap-4">
      <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3 ">
        <p className="font-[500] text-lg md:text-2xl">Personal Information</p>
        <div className="border-[#00000033] border-b-[1px]"></div>
        <div className="flex gap-3 md:gap-6 flex-wrap">
          <TextInput label="Login email ID" placeholder="eg. john@gmail.com" />
          <TextInput
            label="Brand Name*"
            placeholder="eg. john@gmail.com"
            value="Webearl"
          />
          <TextInput
            label="Domain"
            placeholder="eg. john@gmail.com"
            value="Photographers"
          />
          <TextInput
            label="Contact person name"
            placeholder="Enter Contact Person Name"
          />
          <TextInput
            label="Additional email ID"
            placeholder="Enter Additional email Id"
          />
          <TextInput label="Contact number*" placeholder="Enter Contact No." />
          <TextInput label="Website link" placeholder="Enter Website Url" />
          <TextInput label="Facebook url" placeholder="Enter Facebook Url" />
          <TextInput label="Instagram url" placeholder="Enter Instagram Url" />
          <TextInput
            label="Additional Information"
            placeholder="Enter Additional Information"
            icon={true}
          />
          <TextInput
            label="City"
            placeholder="Enter City"
            add_label="Choose your base city here"
          />
          <TextInput label="Address" placeholder="Enter Address" />
        </div>
      </div>
      <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-4 md:gap-6 ">
        <p className="font-[500] text-lg md:text-2xl">Additional Details</p>
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="What is the value of your most booked package? (or your avg booking price Eg: 300,000)"
          bold={true}
          placeholder="eg. john@gmail.com"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <RadioInput
          label="The above package includes services for how many days?"
          inputs={["1 Day", "2 Day", "3 Day", "4 Day"]}
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <RadioInput
          label="The above package includes which services?"
          inputs={["Photo", "Photo + Video", "Photo + Video + Pre wedding"]}
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <RadioInput
          label="Please describe your cancellation policy ( if a user initiates cancellation) including whether you provide refunds of booking amounts , and terms for doing so."
          inputs={[
            "Partial Refund Offered",
            "No Refund Offered",
            "No Refund Offered However Date Adjustment Can Be Done",
            "Full Refund Offered",
          ]}
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <RadioInput
          label="Please describe your cancellation policy ( if you initiates cancellation) including whether you provide refunds of booking amounts , and terms for doing so."
          inputs={[
            "Partial Refund Offered",
            "No Refund Offered",
            "No Refund Offered However Date Adjustment Can Be Done",
            "Full Refund Offered",
          ]}
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="What are the terms & conditions of your cancellation policy? ( please describe in detail - eg No refunds within a month of the wedding day or 50% amount refundable)"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="Describe your photography in three words (eg: fun, vibrant and natural)"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="How many cities have you covered weddings in till date?"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="We love wedding photography because"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="Price for covering a small event like an engagement or roka (Assume under 50 pax and 4 hours of shoot photo and video)"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="How many weeks in advance should a booking be made?"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="Which Year you started shooting weddings?"
          bold={true}
          placeholder="Enter your message"
        />
        <div className="border-[#00000033] border-b-[1px]"></div>
        <TextInput
          label="How many weeks do you take to deliver the photos (Please respond such as 6 weeks, 7 weeks etc)"
          bold={true}
          placeholder="Enter your message"
        />
      </div>
    </div>
  );
};

export default VendorInfo2;

const TextInput = ({ label, placeholder, value, icon, add_label, bold }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2 flex-grow">
      <div className="flex gap-1 items-center">
        <p
          className={`text-sm md:text-base ${bold && "md:text-lg font-[500]"}`}
        >
          {label}
        </p>
        {add_label && (
          <p className="text-xs md:text-sm text-[#E45270]">({add_label})</p>
        )}
        {icon && <img src={infoIcon} className="w-4 h-4" />}
      </div>
      <input
        type="text"
        className={`bg-transparent rounded-xl text-sm md:text-base ${
          bold && "md:text-base"
        } border-[1px] border-[#FF8DA680] px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

const RadioInput = ({ inputs, label }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2 flex-grow">
      <p className="text-sm md:text-lg font-[500]">{label}</p>
      <div className="flex gap-4 md:gap-8 md:text-lg flex-wrap">
        {inputs.map((el, idx) => {
          return (
            <div key={idx} className="flex gap-1">
              <input
                type="radio"
                id={idx}
                name={label}
                className="accent-[#CF166F]"
                checked={idx===1}
              />
              <label htmlFor={el} className="text-sm md:text-lg">
                {el}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
