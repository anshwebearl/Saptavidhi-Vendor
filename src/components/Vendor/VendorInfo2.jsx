/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import infoIcon from "../../assets/images/Vector1.png";
import { UserContext } from "../../context/UserContext";

const VendorInfo2 = () => {
    const token = localStorage.getItem("token");

    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const { user, getUser } = useContext(UserContext);

    const [additionalDetails, setAdditionalDetails] = useState([]);
    const [detailState, setDetailState] = useState({});
    const [isChanged, setIsChanged] = useState(false);

    const getAdditionalDetailsSkeleton = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/vendor-category/get-additional-details/${user.vendor_type}`,
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
                    acc[property.propertyName] =
                        property.propertyType === "multiSelect" ? [] : "";
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
                `${BASE_URL}/vendor/update-additional-details/${user._id}`,
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
                    } else if (el.propertyType === "multiSelect") {
                        return (
                            <MultiSelectInput
                                key={el._id}
                                label={el.propertyDescription}
                                options={el.inputs}
                                values={detailState[el.propertyName]}
                                onChange={(value) =>
                                    handleInputChange(el.propertyName, value)
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
                    const radioId = `${label}-${idx}`;
                    return (
                        <div key={idx} className="flex gap-1">
                            <input
                                type="radio"
                                id={radioId}
                                name={label}
                                className="accent-[#CF166F]"
                                checked={value === el}
                                onChange={() => onChange(el)}
                            />
                            <label
                                htmlFor={radioId}
                                className="text-sm md:text-lg"
                            >
                                {el}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const MultiSelectInput = ({ options, label, values, onChange }) => {
    const handleCheckboxChange = (option) => {
        let updatedValues;
        if (values.includes(option)) {
            updatedValues = values.filter((value) => value !== option);
        } else {
            updatedValues = [...values, option];
        }
        console.log(updatedValues);
        onChange(updatedValues);
    };

    return (
        <div className="flex flex-col gap-1 md:gap-2 flex-grow">
            <p className="text-sm md:text-lg font-[500]">{label}</p>
            <div className="flex gap-4 md:gap-8 md:text-lg flex-wrap">
                {options.map((option, idx) => {
                    const checkboxId = `${label}-${option}-${idx}`;
                    return (
                        <div key={idx} className="flex gap-1 items-center">
                            <input
                                type="checkbox"
                                id={checkboxId}
                                className="accent-[#CF166F]"
                                checked={values.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            <label
                                htmlFor={checkboxId}
                                className="text-sm md:text-lg"
                            >
                                {option}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
