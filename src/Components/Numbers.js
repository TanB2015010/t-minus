function Numbers(props) {
  const { time, isRunning, setTime } = props;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const updateMinutes = (event) => {
    const newMinutes = event.target.value;
    const newTime = newMinutes * 60;
    setTime(newTime);
  };

  return (
    <div>
      <input
        className="minutesInput"
        disabled={isRunning}
        type="text"
        value={minutes}
        autoComplete="false"
        onChange={updateMinutes}
      />{" "}
      :{seconds}
    </div>
  );
}

export default Numbers;
