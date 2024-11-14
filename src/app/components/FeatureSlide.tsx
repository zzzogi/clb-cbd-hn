import React from "react";

interface IFeatureSlide {
  title: string;
  subtitle: string;
  isActive: boolean;
  number: number;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const FeatureSlide = ({
  title,
  subtitle,
  isActive,
  number,
  onClick,
}: IFeatureSlide) => (
  <div
    className={`${
      isActive ? "bg-purple-100" : "bg-gray-50"
    } rounded-xl p-8 cursor-pointer transition-all duration-300 hover:bg-purple-50`}
    onClick={onClick}
  >
    <div className="flex items-center gap-4 mb-2">
      <span className="text-sm text-purple-500 uppercase tracking-wider">
        Feature {number}
      </span>
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export default FeatureSlide;
