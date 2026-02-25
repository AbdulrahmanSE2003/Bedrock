type ProgressBarProps = {
  value: number;
  label: string;
};

const ProgressBar = ({ value, label }: ProgressBarProps) => {
  const safeValue = Math.floor(value);

  return (
    <div className={`flex justify-between items-center gap-3`}>
      {/* wrapper */}
      <div
        className={`border border-accent-foreground p-2 rounded-md bg-primary-foreground w-3/4`}
      >
        {/* Progress */}
        <div
          style={{ width: `${safeValue}%` }}
          className={`bg-accent-foreground h-6 rounded-sm`}
        ></div>
      </div>
      <span className={`text-[10px] font-medium`}>
        {label}: {safeValue}%
      </span>
    </div>
  );
};

export default ProgressBar;
