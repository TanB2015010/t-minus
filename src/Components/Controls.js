function Controls(props) {
  const { onResetClick, isRunning, setIsRunning } = props;

  const updateIsRunning = () => {
    const newIsRunning = !isRunning;
    setIsRunning(newIsRunning);
  };

  return (
    <div className="controls">
      <button
        className="controls-button"
        onClick={onResetClick}
        disabled={isRunning}
        style={{
          backgroundColor: "#f0ad4e",
        }}
      >
        Reset
      </button>
      <button
        className="controls-button"
        onClick={updateIsRunning}
        style={{
          backgroundColor: isRunning ? "#bb2124" : "#22bb33",
        }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default Controls;
