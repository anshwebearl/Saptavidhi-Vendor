/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import infoIcon from "../../assets/images/Vector1.png";
import { UserContext } from "../../context/UserContext";

const VendorInfo2 = () => {
    const token = localStorage.getItem("token");

    const { user, getUser } = useContext(UserContext);

    const [additionalDetails, setAdditionalDetails] = useState([]);
    const [detailState, setDetailState] = useState({});
    const [isChanged, setIsChanged] = useState(false);

    const getAdditionalDetailsSkeleton = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/vendor-category/get-additional-details/${user.vendor_type}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                const properties = jsonData.vendorDetails.categoryProperties;
                setAdditionalDetails(properties);
                const mappedProperties = properties.reduce((acc, property) => {
                    acc[property.propertyName] = "";
                    return acc;
                }, {});
                user.additional_details.forEach((detail) => {
                    const propertyName = Object.keys(detail)[0];
                    if (
                        Object.prototype.hasOwnProperty.call(
                            mappedProperties,
                            propertyName
                        )
                    ) {
                        mappedProperties[propertyName] = detail[propertyName];
                    }
                });
                setDetailState(mappedProperties);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAdditionalDetailsSkeleton();
    }, [user]);

    const handleInputChange = (propertyName, value) => {
        setDetailState((prevState) => ({
            ...prevState,
            [propertyName]: value,
        }));
        setIsChanged(true);
    };

    const handleSave = async () => {
        const statesList = Object.keys(detailState).map((key) => ({
            [key]: detailState[key],
        }));
        try {
            const response = await fetch(
                `http://localhost:8000/api/vendor/update-additional-details/${user._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        additionalDetails: statesList,
                    }),
                }
            );
            const data = await response.json();
            console.log(data);
            await getUser();
        } catch (error) {
            console.log(error);
        } finally {
            setIsChanged(false);
        }
    };

    return (
        <div className="mt-4 md:mt-5 flex flex-col gap-4">
            <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-4 md:gap-6 ">
                <div className="flex justify-between">
                    <p className="font-[500] text-lg md:text-2xl">
                        Additional Details
                    </p>
                    <div
                        onClick={handleSave}
                        className={`${
                            !isChanged
                                ? "cursor-not-allowed bg-gradient-to-r from-[#e6b8d7] to-[#f7aed1]"
                                : "cursor-pointer bg-gradient-to-r from-[#5C0340] to-[#CF166F]"
                        } text-white px-5 py-1 w-fit rounded-full font-extrabold text-lg`}
                    >
                        SAVE
                    </div>
                </div>
                <div className="border-[#00000033] border-b-[1px]"></div>
                {additionalDetails?.map((el) => {
                    if (el.propertyType === "textInput") {
                        return (
                            <TextInput
                                key={el._id}
                                label={el.propertyDescription}
                                bold={true}
                                value={detailState[el.propertyName]}
                                onChange={(e) =>
                                    handleInputChange(
                                        el.propertyName,
                                        e.target.value
                                    )
                                }
                            />
                        );
                    } else {
                        return (
                            <RadioInput
                                key={el._id}
                                label={el.propertyDescription}
                                inputs={el.inputs}
                                value={detailState[el.propertyName]}
                                onChange={(value) =>
                                    handleInputChange(el.propertyName, value)
                                }
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default VendorInfo2;

const TextInput = ({
    label,
    placeholder,
    value,
    onChange,
    icon,
    add_label,
    bold,
}) => {
    return (
        <div className="flex flex-col gap-1 md:gap-2 flex-grow">
            <div className="flex gap-1 items-center">
                <p
                    className={`text-sm md:text-base ${
                        bold && "md:text-lg font-[500]"
                    }`}
                >
                    {label}
                </p>
                {add_label && (
                    <p className="text-xs md:text-sm text-[#E45270]">
                        ({add_label})
                    </p>
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
                onChange={onChange}
            />
        </div>
    );
};

const RadioInput = ({ inputs, label, value, onChange }) => {
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
                                checked={value === el}
                                onChange={() => onChange(el)}
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

{
    /* <TextInput
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
                    inputs={[
                        "Photo",
                        "Photo + Video",
                        "Photo + Video + Pre wedding",
                    ]}
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
                /> */
}
