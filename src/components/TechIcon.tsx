import React from "react";

interface TechIconProps {
    icon: React.ElementType;
    className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon: Icon, className }) => {
    return (
        <Icon
            className={`
        w-8 h-8
        transition-all duration-300
        opacity-70 hover:opacity-100
        dark:filter dark:grayscale dark:hover:grayscale-0
        hover:drop-shadow-sm
        dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
        ${className ?? ""}
      `}
        />
    );
};

export default TechIcon;
