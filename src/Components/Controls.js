function Controls(props) {
  const { isRunning, setIsRunning } = props;

  const updateIsRunning = () => {
    const newIsRunning = !isRunning;
    setIsRunning(newIsRunning);
  };

  return (
    <>
      <button disabled={isRunning}>Restart</button>
      <button onClick={updateIsRunning}>{isRunning ? "Stop" : "Start"}</button>
    </>
  );
}

export default Controls;
