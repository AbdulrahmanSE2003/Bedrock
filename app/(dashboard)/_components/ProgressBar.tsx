type ProgressBarProps = {
  value: number;
};

const ProgressBar = ({ value }: ProgressBarProps) => {
  const safeValue = Math.floor(value);

  return (
    <div className={`flex`}>
      {/* wrapper */}
      <div
        className={`border border-accent-foreground p-2 rounded-md bg-primary-foreground w-full`}
      >
        {/* Progress */}
        <div
          style={{ width: `${safeValue}%` }}
          className={`bg-accent-foreground h-6 rounded-sm`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
