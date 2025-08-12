type TableAvailabilityCircleProps = {
  available: number;
  total: number;
};

export const AvailableTableChart = ({ available, total }: TableAvailabilityCircleProps) => {
  const percentage = total > 0 ? (available / total) * 100 : 0;
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#10b981"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-sm fill-black font-semibold"
        >
          {available}/{total}
        </text>
      </svg>
      <div className="text-sm mt-1 text-gray-600 font-semibold flex items-center gap-2"> <hr className="bg-[#10b981] w-2 h-2 rounded-full" /><p>Tables Available</p></div>
    </div>
  );

};
