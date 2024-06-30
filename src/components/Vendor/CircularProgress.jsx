/* eslint-disable react/prop-types */

const CircularProgress = ({ percentage }) => {
    const radius = window.screen.width > 768 ? 70 : 60;
    const stroke = window.screen.width > 768 ? 10 : 8;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex items-center justify-center font-poppins">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="transform rotate-[-90deg]"
            >
                <circle
                    stroke="#e5e7eb" // Tailwind gray-300
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#FF6B85" // Tailwind pink-500
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + " " + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="transition-all duration-300 ease-in-out"
                />
            </svg>
            <div className="absolute flex-col items-center justify-center">
                <p className="text-base md:text-xl font-[600] text-center">
                    {percentage || 0}%
                </p>
                <p className="text-xs md:text-sm">Complete</p>
            </div>
        </div>
    );
};

export default CircularProgress;
