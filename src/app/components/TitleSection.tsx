// TitleSection.tsx
import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div
      className={`bg-green-100 h-48 flex flex-col justify-center items-center p-4 ${
        className || ""
      }`.trim()}
    >
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600 mb-4">{subtitle}</p>}
      <p className="text-sm text-gray-500">
        This is a small paragraph below the title for additional context.
      </p>
    </div>
  );
};

export default TitleSection;
