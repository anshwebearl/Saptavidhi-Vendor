/* eslint-disable react/prop-types */
import CircularProgress from "./CircularProgress";
import { useContext, useEffect, useState } from "react";
import infoIcon from "../../assets/images/Vector1.png";
import { UserContext } from "../../context/UserContext";

const VendorInfo1 = () => {
    const { user, getUser } = useContext(UserContext);

    const BASE_URL = import.meta.env.DEV
        ? import.meta.env.VITE_API_BASE_URL_DEV
        : import.meta.env.VITE_API_BASE_URL_PROD;

    const token = localStorage.getItem("token");

    const [loginEmail, setLoginEmail] = useState("");
    const [brandName, setBrandName] = useState("");
    const [domain, setDomain] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [additionalEmail, setAdditionalEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [facebookUrl, setFacebookUrl] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    const [isUpdating, setIsUpdating] = useState(false);

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (user) {
            setLoginEmail(user.email);
            setBrandName(user.brand_name);
            setDomain(user.domain);
            setContactPerson(user.contact_person_name);
            setAdditionalEmail(user.additional_email);
            setContactNumber(user.mobile_number);
            setWebsiteLink(user.website_link);
            setFacebookUrl(user.facebook_url);
            setInstagramUrl(user.instagram_url);
            setAdditionalInfo(user.additional_info);
            setCity(user.city);
            setAddress(user.address);
        }
    }, [user, getUser]);

    useEffect(() => {
        if (user) {
            setIsChanged(
                loginEmail !== user.email ||
                    brandName !== user.brand_name ||
                    domain !== user.domain ||
                    contactPerson !== user.contact_person_name ||
                    additionalEmail !== user.additional_email ||
                    contactNumber !== user.mobile_number ||
                    websiteLink !== user.website_link ||
                    facebookUrl !== user.facebook_url ||
                    instagramUrl !== user.instagram_url ||
                    additionalInfo !== user.additional_info ||
                    city !== user.city ||
                    address !== user.address
            );
        }
    }, [
        loginEmail,
        brandName,
        domain,
        contactPerson,
        additionalEmail,
        contactNumber,
        websiteLink,
        facebookUrl,
        instagramUrl,
        additionalInfo,
        city,
        address,
        user,
    ]);

    const updateData = async () => {
        if (!isChanged) return;
        setIsUpdating(true);
        try {
            const response = await fetch(
                `${BASE_URL}/vendor/updatevendor/${user._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        brand_name: brandName,
                        contact_person_name: contactPerson,
                        email: loginEmail,
                        mobile_number: contactNumber,
                        address: address,
                        city: city,
                        domain: domain,
                        additional_email: additionalEmail,
                        website_link: websiteLink,
                        facebook_url: facebookUrl,
                        instagram_url: instagramUrl,
                        additional_info: additionalInfo,
                    }),
                }
            );
            const data = await response.json();
            console.log(data);
            await getUser();
        } catch (error) {
            console.log(error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3">
                <p className="font-[500] text-lg md:text-2xl">
                    Profile Analytics
                </p>
                <div className="border-[#00000033] border-b-[1px]"> </div>
                <div className="flex h-full items-center justify-between gap-5 flex-wrap">
                    <CircularProgress percentage={10} />
                    <div className="border-[#00000033] border-[1px] p-5 flex-grow  md:p-10 rounded-2xl flex flex-col h-full w-fit items-center max-w-[150px] md:max-w-[200px]">
                        <p className="text-xl md:text-3xl">0</p>
                        <p className="text-lg md:text-2xl">Count</p>
                    </div>
                    <div className="border-[#00000033] border-[1px] p-5 flex-grow md:p-10 rounded-2xl flex flex-col h-full w-fit items-center max-w-[150px] md:max-w-[200px]">
                        <p className="text-xl md:text-3xl">0</p>
                        <p className="text-lg md:text-2xl">Leads</p>
                    </div>
                    <div className="border-[#00000033] border-[1px] p-5 flex-grow md:p-10 rounded-2xl flex flex-col h-full w-fit items-center max-w-[150px] md:max-w-[200px]">
                        <p className="text-xl md:text-3xl">0</p>
                        <p className="text-lg md:text-2xl">Page View</p>
                    </div>
                </div>
            </div>
            <div className="border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3">
                <p className="font-[500] text-lg md:text-2xl">
                    Complete your profile by:
                </p>
                <div className="border-[#00000033] border-b-[1px]"> </div>
                <ul className="list-disc pl-3 md:pl-4 space-y-1 md:space-y-3">
                    <li className="text-[#FF6B85]">
                        <p className="text-black text-sm md:text-lg">
                            Answering your FAQs
                        </p>
                    </li>
                    <li className="text-[#FF6B85]">
                        <p className="text-black text-sm md:text-lg">
                            Linking your profile to your Facebook page/ website
                        </p>
                    </li>
                    <li className="text-[#FF6B85]">
                        <p className="text-black text-sm md:text-lg">
                            Adding images to your portfolio
                        </p>
                    </li>
                    <li className="text-[#FF6B85]">
                        <p className="text-black text-sm md:text-lg">
                            Get featured in a Real Wedding. Email your work to
                            submissions@wedmegood.com
                        </p>
                    </li>
                    <li className="text-[#FF6B85]">
                        <p className="text-black text-sm md:text-lg">
                            Upload your first album to get visibility on our
                            inspiration gallery and social media handles
                        </p>
                    </li>
                    <li className="text-[#FF6B85]">
                        <p className="text-black text-sm md:text-lg">
                            Invite clients to review your work
                        </p>
                    </li>
                </ul>
            </div>
            <div
                className={`${
                    isUpdating && "blur-sm"
                } border-[#00000033] border-[1px] p-5 md:p-8 rounded-3xl flex flex-col gap-3 `}
            >
                <div className="flex justify-between">
                    <p className="font-[500] text-lg md:text-2xl">
                        Personal Information
                    </p>
                    <div
                        onClick={updateData}
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
                <div className="flex gap-3 md:gap-6 flex-wrap">
                    <TextInput
                        label="Login email ID"
                        placeholder="eg. john@gmail.com"
                        value={loginEmail}
                        setValue={setLoginEmail}
                    />
                    <TextInput
                        label="Brand Name*"
                        placeholder="eg. john@gmail.com"
                        value={brandName}
                        setValue={setBrandName}
                    />
                    <TextInput
                        label="Domain"
                        placeholder="eg. john@gmail.com"
                        value={domain}
                        setValue={setDomain}
                    />
                    <TextInput
                        label="Contact person name"
                        placeholder="Enter Contact Person Name"
                        value={contactPerson}
                        setValue={setContactPerson}
                    />
                    <TextInput
                        label="Additional email ID"
                        placeholder="Enter Additional email Id"
                        value={additionalEmail}
                        setValue={setAdditionalEmail}
                    />
                    <TextInput
                        label="Contact number*"
                        placeholder="Enter Contact No."
                        value={contactNumber}
                        setValue={setContactNumber}
                    />
                    <TextInput
                        label="Website link"
                        placeholder="Enter Website Url"
                        value={websiteLink}
                        setValue={setWebsiteLink}
                    />
                    <TextInput
                        label="Facebook url"
                        placeholder="Enter Facebook Url"
                        value={facebookUrl}
                        setValue={setFacebookUrl}
                    />
                    <TextInput
                        label="Instagram url"
                        placeholder="Enter Instagram Url"
                        value={instagramUrl}
                        setValue={setInstagramUrl}
                    />
                    <TextInput
                        label="Additional Information"
                        placeholder="Enter Additional Information"
                        value={additionalInfo}
                        setValue={setAdditionalInfo}
                        icon={true}
                    />
                    <TextInput
                        label="City"
                        placeholder="Enter City"
                        value={city}
                        setValue={setCity}
                        add_label="Choose your base city here"
                    />
                    <TextInput
                        label="Address"
                        placeholder="Enter Address"
                        value={address}
                        setValue={setAddress}
                    />
                </div>
            </div>
        </div>
    );
};

export default VendorInfo1;

const TextInput = ({
    label,
    placeholder,
    value,
    setValue,
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
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};
