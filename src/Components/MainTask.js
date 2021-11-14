function MainTask(props) {
  const { mainTask, setMainTask } = props;

  const updateMainTask = (event) => {
    const newMainTask = event.target.value;
    setMainTask(newMainTask);
  };

  return (
    <input
      className="mainTaskInput"
      type="text"
      value={mainTask}
      autoComplete="false"
      onChange={updateMainTask}
    />
  );
}

export default MainTask;
