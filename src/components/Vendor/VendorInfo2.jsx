/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import infoIcon from "../../assets/images/Vector1.png";
import { UserContext } from "../../context/UserContext";

import Slider from "@mui/material/Slider";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VendorInfo2 = () => {
    const token = localStorage.getItem("token");

    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const { user, getUser, vendorType } = useContext(UserContext);

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
                const initialDetailState = {};
                user.additional_details.forEach((detail) => {
                    const key = detail._id;
                    initialDetailState[key] =
                        detail[
                            Object.keys(detail).find((key) => key !== "_id")
                        ];
                });
                setDetailState(initialDetailState);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (propertyId, value) => {
        setDetailState((prevState) => ({
            ...prevState,
            [propertyId]: value,
        }));
        setIsChanged(true);
    };

    const handleMultiSelectWithTextChange = (propertyId, option, value) => {
        setDetailState((prevState) => {
            let updatedValues = prevState[propertyId] || [];

            if (value === null) {
                updatedValues = updatedValues.filter(
                    (item) => item[option] === undefined
                );
            } else {
                const optionIndex = updatedValues.findIndex(
                    (item) => item[option] !== undefined
                );

                if (optionIndex >= 0) {
                    updatedValues[optionIndex] = { [option]: value };
                } else {
                    updatedValues.push({ [option]: value });
                }
            }

            return {
                ...prevState,
                [propertyId]: updatedValues,
            };
        });
        setIsChanged(true);
    };

    useEffect(() => {
        getAdditionalDetailsSkeleton();
    }, [user]);

    const handleSave = async () => {
        try {
            const updatedDetails = user.additional_details.map((detail) => ({
                ...detail,
                [Object.keys(detail).find((key) => key !== "_id")]:
                    detailState[detail._id] || "",
            }));
            const response = await fetch(
                `${BASE_URL}/vendor/update-additional-details/${user._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        additionalDetails: updatedDetails,
                    }),
                }
            );
            const data = await response.json();
            toast.success(data.message);
            await getUser();
        } catch (error) {
            console.log(error);
        } finally {
            setIsChanged(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 border-2 rounded-3xl">
            <div className="p-5 md:px-8 flex flex-col gap-4 md:gap-6 ">
                <div className="flex justify-between items-start">
                    <p className="font-[600] text-lg md:text-2xl">
                        Additional Details
                    </p>
                    <div
                        onClick={handleSave}
                        className={`${
                            !isChanged
                                ? "cursor-not-allowed bg-gradient-to-r from-[#e6b8d7] to-[#f7aed1]"
                                : "cursor-pointer bg-gradient-to-r from-[#5C0340] to-[#CF166F]"
                        } text-white md:px-5 md:py-1 w-fit rounded-full font-extrabold md:text-lg text-xs px-3 py-1`}
                    >
                        SAVE
                    </div>
                </div>
                <div className="border-[#00000033] border-b-[1px]"></div>
                <div className="flex flex-col gap-8">
                    {additionalDetails?.map((el) => {
                        const detailValue = detailState[el._id] || "";
                        if (
                            el.propertyType === "textInput" &&
                            ![
                                "sherwaniPriceRange",
                                "suitsPriceRange",
                                "indoorBanquetPrice",
                                "outdoorPrice",
                            ].includes(el.propertyName)
                        ) {
                            return (
                                <TextInput
                                    key={el._id}
                                    label={el.propertyDescription}
                                    bold={true}
                                    value={detailValue}
                                    onChange={(e) =>
                                        handleInputChange(
                                            el._id,
                                            e.target.value
                                        )
                                    }
                                />
                            );
                        } else if (
                            el.propertyType === "textInput" &&
                            [
                                "sherwaniPriceRange",
                                "suitsPriceRange",
                                "indoorBanquetPrice",
                                "outdoorPrice",
                            ].includes(el.propertyName)
                        ) {
                            return (
                                <RangeSlider
                                    key={el._id}
                                    label={el.propertyDescription}
                                    value={detailValue}
                                    maxValue={
                                        [
                                            "sherwaniPriceRange",
                                            "suitsPriceRange",
                                        ].includes(el.propertyName)
                                            ? 500000
                                            : 3000000
                                    }
                                    minValue={
                                        [
                                            "sherwaniPriceRange",
                                            "suitsPriceRange",
                                        ].includes(el.propertyName)
                                            ? 0
                                            : 40000
                                    }
                                    onChange={(value) =>
                                        handleInputChange(el._id, value)
                                    }
                                />
                            );
                        } else if (
                            el.propertyType === "multiSelect" &&
                            el.propertyName !== "outfitType"
                        ) {
                            return (
                                <MultiSelectInput
                                    key={el._id}
                                    label={el.propertyDescription}
                                    options={el.inputs}
                                    values={detailValue}
                                    onChange={(value) =>
                                        handleInputChange(el._id, value)
                                    }
                                />
                            );
                        } else if (
                            el.propertyType === "multiSelect" &&
                            el.propertyName === "outfitType"
                        ) {
                            return (
                                <>
                                    <MultiSelectWithRange
                                        key={el._id}
                                        label={el.propertyDescription}
                                        options={el.inputs}
                                        values={detailValue}
                                        onChange={(value) =>
                                            handleInputChange(el._id, value)
                                        }
                                    />
                                </>
                            );
                        } else if (el.propertyType === "textArea") {
                            return (
                                <TextArea
                                    key={el._id}
                                    label={el.propertyDescription}
                                    bold={true}
                                    value={detailValue}
                                    onChange={(e) =>
                                        handleInputChange(
                                            el._id,
                                            e.target.value
                                        )
                                    }
                                />
                            );
                        } else if (el.propertyType === "numeric") {
                            return (
                                <NumericInput
                                    key={el._id}
                                    label={el.propertyDescription}
                                    bold={true}
                                    value={detailValue}
                                    onChange={(e) => {
                                        const num = e.target.value.replace(
                                            /[^0-9]/g,
                                            ""
                                        );
                                        handleInputChange(el._id, num);
                                    }}
                                />
                            );
                        } else if (el.propertyType === "multiSelectWithText") {
                            return (
                                <>
                                    <MultiSelectWithText
                                        key={el._id}
                                        label={el.propertyDescription}
                                        options={el.multiSelectWithTextInputs}
                                        values={detailValue}
                                        onChange={(option, value) =>
                                            handleMultiSelectWithTextChange(
                                                el._id,
                                                option,
                                                value
                                            )
                                        }
                                    />
                                </>
                            );
                        } else {
                            return (
                                <RadioInput
                                    key={el._id}
                                    label={el.propertyDescription}
                                    inputs={el.inputs}
                                    value={detailValue}
                                    onChange={(value) =>
                                        handleInputChange(el._id, value)
                                    }
                                />
                            );
                        }
                    })}
                </div>
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
                } border-[1px] border-[#FF8DA680] max-w-[150px]  md:max-w-[200px] lg:max-w-[250px] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

const TextArea = ({
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
            <textarea
                rows={5}
                className={`bg-transparent rounded-xl text-sm md:text-base ${
                    bold && "md:text-base"
                } border-[1px] border-[#FF8DA680]  px-3 py-1 md:px-4 md:py-2 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
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
            <div className="flex flex-col gap-2 md:gap-2 md:text-lg flex-wrap">
                {inputs.map((el, idx) => {
                    const radioId = `${label}-${idx}`;
                    return (
                        <div key={idx} className="flex gap-2 items-center">
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
                                className="text-sm md:text-base"
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
        onChange(updatedValues);
    };

    return (
        <div className="flex flex-col gap-1 md:gap-2 flex-grow">
            <p className="text-sm md:text-lg font-[500]">{label}</p>
            <div className="flex flex-col gap-2 md:gap-2 md:text-lg flex-wrap">
                {options.map((option, idx) => {
                    const checkboxId = `${label}-${option}-${idx}`;
                    return (
                        <div key={idx} className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                id={checkboxId}
                                className="accent-[#CF166F]"
                                checked={values.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            <label
                                htmlFor={checkboxId}
                                className="text-sm md:text-base"
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

const MultiSelectWithText = ({ options, label, values, onChange }) => {
    const handleCheckboxChange = (subInputVariable) => {
        const updatedValues = values.filter(
            (item) => item[subInputVariable] === undefined
        );
        if (updatedValues.length === values.length) {
            // Checkbox is being selected, so add a new entry
            onChange(subInputVariable, "");
        } else {
            // Checkbox is being deselected, so remove the entry
            onChange(subInputVariable, null);
        }
    };

    const handleTextInputChange = (subInputVariable, event) => {
        onChange(subInputVariable, event.target.value);
    };

    return (
        <div className="flex flex-col gap-1 md:gap-2 flex-grow">
            <p className="text-sm md:text-lg font-[500]">{label}</p>
            <div className="flex flex-col gap-2 md:gap-2 md:text-lg flex-wrap">
                {options.map((option, idx) => {
                    const checkboxId = `${label}-${option.subInputVariable}-${idx}`;
                    const isChecked = values.some(
                        (item) => item[option.subInputVariable] !== undefined
                    );
                    const textValue =
                        values.find(
                            (item) =>
                                item[option.subInputVariable] !== undefined
                        )?.[option.subInputVariable] || "";

                    return (
                        <div key={idx} className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    id={checkboxId}
                                    className="accent-[#CF166F]"
                                    checked={isChecked}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            option.subInputVariable
                                        )
                                    }
                                />
                                <label
                                    htmlFor={checkboxId}
                                    className="text-sm md:text-base"
                                >
                                    {option.subInputName}
                                </label>
                            </div>
                            {isChecked && (
                                <div className="flex flex-col gap-1 md:gap-2 ml-6">
                                    <label className="text-xs md:text-sm text-[#E45270]">
                                        {option.subPropertyDescription}
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-transparent rounded-xl text-sm md:text-base border-[1px] border-[#FF8DA680] max-w-[150px] md:max-w-[200px] lg:max-w-[250px] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]"
                                        value={textValue}
                                        onChange={(event) =>
                                            handleTextInputChange(
                                                option.subInputVariable,
                                                event
                                            )
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const MultiSelectWithRange = ({ options, label, values, onChange }) => {
    const [rangeValues, setRangeValues] = useState(
        options.reduce((acc, option) => {
            const existingOption = values.find((item) => item.type === option);
            acc[option] = existingOption
                ? [existingOption.min, existingOption.max]
                : [0, 500000]; // default range values
            return acc;
        }, {})
    );

    const handleCheckboxChange = (option) => {
        let updatedValues;
        if (values.some((item) => item.type === option)) {
            updatedValues = values.filter((item) => item.type !== option);
        } else {
            updatedValues = [
                ...values,
                {
                    type: option,
                    min: rangeValues[option][0],
                    max: rangeValues[option][1],
                },
            ];
        }
        onChange(updatedValues);
    };

    const handleRangeChange = (option, newValue) => {
        setRangeValues((prev) => ({
            ...prev,
            [option]: newValue,
        }));

        let updatedValues = values.map((item) =>
            item.type === option
                ? {
                      ...item,
                      min: rangeValues[option][0],
                      max: rangeValues[option][1],
                  }
                : item
        );
        onChange(updatedValues);
    };

    return (
        <div className="flex flex-col gap-1 md:gap-2 flex-grow">
            <p className="text-sm md:text-lg font-[500]">{label}</p>
            <div className="flex flex-col gap-2 md:gap-2 md:text-lg flex-wrap">
                {options.map((option, idx) => {
                    const checkboxId = `${label}-${option}-${idx}`;
                    return (
                        <div key={idx} className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    id={checkboxId}
                                    className="accent-[#CF166F]"
                                    checked={values.some(
                                        (item) => item.type === option
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(option)
                                    }
                                />
                                <label
                                    htmlFor={checkboxId}
                                    className="text-sm md:text-base"
                                >
                                    {option}
                                </label>
                            </div>
                            {values.some((item) => item.type === option) && (
                                <div className="flex flex-col gap-1 w-[60%] ml-10 md:ml-20">
                                    <Slider
                                        getAriaLabel={() => `${option} range`}
                                        value={rangeValues[option]}
                                        onChange={(e, newValue) =>
                                            handleRangeChange(option, newValue)
                                        }
                                        valueLabelDisplay="auto"
                                        getAriaValueText={(value) => `${value}`}
                                        min={0}
                                        max={500000}
                                        color={"secondary"}
                                        step={10000}
                                    />
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            className="bg-transparent rounded-xl max-w-[80px] md:max-w-[120px] text-sm md:text-base border-[1px] border-[#FF8DA680] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]"
                                            value={rangeValues[option][0]}
                                            onChange={(e) =>
                                                handleRangeChange(option, [
                                                    Number(e.target.value),
                                                    rangeValues[option][1],
                                                ])
                                            }
                                        />
                                        -
                                        <input
                                            type="text"
                                            className="bg-transparent rounded-xl max-w-[80px] md:max-w-[120px] text-sm md:text-base border-[1px] border-[#FF8DA680] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]"
                                            value={rangeValues[option][1]}
                                            onChange={(e) =>
                                                handleRangeChange(option, [
                                                    rangeValues[option][0],
                                                    Number(e.target.value),
                                                ])
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const NumericInput = ({
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
                } border-[1px] border-[#FF8DA680] max-w-[150px]  md:max-w-[200px] lg:max-w-[250px] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

const RangeSlider = ({ label, value, onChange, minValue, maxValue }) => {
    const [rangeValues, setRangeValues] = useState(
        value ? [value.min, value.max] : [minValue, maxValue]
    );

    useEffect(() => {
        if (value) {
            setRangeValues([value.min, value.max]);
        }
    }, [value]);

    const handleSliderChange = (event, newValue) => {
        setRangeValues(newValue);
        onChange({ min: newValue[0], max: newValue[1] });
    };

    const handleInputChange = (index, newValue) => {
        const newRangeValues = [...rangeValues];
        newRangeValues[index] = Number(newValue);
        setRangeValues(newRangeValues);
        onChange({ min: newRangeValues[0], max: newRangeValues[1] });
    };

    return (
        <div className="flex flex-col gap-1 md:gap-2 flex-grow">
            <div className="flex gap-1 items-center">
                <p className="text-sm md:text-base font-[500]">{label}</p>
            </div>
            <Slider
                getAriaLabel={() => `${label} range`}
                value={rangeValues}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `${value}`}
                min={0}
                max={500000}
                step={5000}
                color={"secondary"}
            />
            <div className="flex gap-2">
                <input
                    type="text"
                    className="bg-transparent rounded-xl max-w-[120px] text-sm md:text-base border-[1px] border-[#FF8DA680] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]"
                    value={rangeValues[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                />
                -
                <input
                    type="text"
                    className="bg-transparent rounded-xl max-w-[120px] text-sm md:text-base border-[1px] border-[#FF8DA680] px-3 py-1 md:px-4 md:py-1 focus:outline-none focus:border-[#ff7291] focus:border-[1.5px]"
                    value={rangeValues[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                />
            </div>
        </div>
    );
};
