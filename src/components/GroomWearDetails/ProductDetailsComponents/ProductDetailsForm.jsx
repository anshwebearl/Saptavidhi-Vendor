/* eslint-disable react/prop-types */
function ProductDetailsForm({ formRef, property_name }) {
    return (
        <div
            id="messageSection"
            ref={formRef}
            className="scroll-mt-40 px-5 py-3 w-full md:w-3/5 md:px-8 md:py-6 bg-white rounded-[20px] shadow-md border-2 flex flex-col gap-3 md:gap-5"
        >
            <h1 className="text-base md:text-xl font-semibold">
                Hi {property_name},
            </h1>
            <hr className="border-gray-300" />
            <div className="flex md:flex-row flex-col gap-2 md:gap-8">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                            htmlFor="full-name"
                        >
                            Full Name
                        </label>
                        <input
                            className="appearance-none block w-full  text-gray-700 border border-[#FF8DA680] rounded py-1 px-2 md:py-2 md:px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="full-name"
                            type="text"
                            placeholder="Enter Full Name"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full  text-gray-700 border border-[#FF8DA680] rounded py-1 px-2 md:py-2 md:px-3leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            type="text"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                            htmlFor="no-of-guests"
                        >
                            No. of Guests (min 50)
                        </label>
                        <input
                            className="appearance-none block w-full  text-gray-700 border border-[#FF8DA680] rounded py-1 px-2 md:py-2 md:px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="no-of-guests"
                            type="number"
                            placeholder="Enter No. of Guests"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                            htmlFor="mobile-no"
                        >
                            Mobile No.
                        </label>
                        <input
                            className="appearance-none block w-full  text-gray-700 border border-[#FF8DA680] rounded py-1 px-2 md:py-2 md:px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="mobile-no"
                            type="text"
                            placeholder="Enter Mobile No."
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1 relative">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                            htmlFor="function-date"
                        >
                            Function Date
                        </label>
                        <input
                            className="appearance-none block w-full  text-gray-700 border border-[#FF8DA680] rounded py-1 px-2 md:py-2 md:px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="function-date"
                            type="date"
                            placeholder="Select Date"
                        />
                    </div>
                    <div className="w-full  flex flex-col gap-1">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                            htmlFor="no-of-rooms"
                        >
                            No. of Rooms
                        </label>
                        <input
                            className="appearance-none block w-full  text-gray-700 border border-[#FF8DA680] rounded py-1 px-2 md:py-2 md:px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="no-of-rooms"
                            type="number"
                            placeholder="Enter No. of Rooms"
                        />
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2 flex flex-col gap-2">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                        Function Type
                    </span>
                    <div className="flex flex-col md:flex-row md:gap-3 flex-wrap">
                        <label className="inline-flex items-center gap-1">
                            <input
                                type="radio"
                                className="form-radio"
                                name="function-type"
                                value="pre-wedding"
                            />
                            <span className="text-sm md:text-base">
                                Pre Wedding
                            </span>
                        </label>
                        <label className="inline-flex items-center gap-1">
                            <input
                                type="radio"
                                className="form-radio"
                                name="function-type"
                                value="wedding"
                            />
                            <span className="text-sm md:text-base">
                                Wedding
                            </span>
                        </label>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                        Function Time
                    </span>
                    <div className="flex flex-col md:flex-row md:gap-3 flex-wrap">
                        <label className="inline-flex items-center gap-1">
                            <input
                                type="radio"
                                className="form-radio"
                                name="function-time"
                                value="day"
                            />
                            <span className="text-sm md:text-base">Day</span>
                        </label>
                        <label className="inline-flex items-center gap-1">
                            <input
                                type="radio"
                                className="form-radio"
                                name="function-time"
                                value="evening"
                            />
                            <span className="text-sm md:text-base">
                                Evening
                            </span>
                        </label>
                        <label className="inline-flex items-center gap-1">
                            <input
                                type="radio"
                                className="form-radio"
                                name="function-time"
                                value="night"
                            />
                            <span className="text-sm md:text-base">Night</span>
                        </label>
                    </div>
                </div>
            </div>
            <button
                className="w-[80%] self-center flex items-center text-sm md:text-lg justify-center bg-gradient-to-r from-[#fd070789] to-[#5c034089] text-white font-bold px-2 py-1 md:py-2 md:px-3 rounded-[8px] focus:outline-none focus:shadow-outline"
                type="button"
            >
                Check Availability & Prices
            </button>
        </div>
    );
}

export default ProductDetailsForm;
