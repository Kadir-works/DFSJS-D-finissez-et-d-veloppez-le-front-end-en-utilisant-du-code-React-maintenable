import { type FC } from "react";

type IndicatorProps = {
  title: string;
  value: number;
  color: string;
};

const Indicator: FC<IndicatorProps> = ({
  title,
  value,
  color,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className={`text-4xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
};

export default Indicator;