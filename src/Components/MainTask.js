function MainTask(props) {
  const { mainTask, enterMainTask } = props;

  const updateMainTask = (event) => {
    const newMainTask = event.target.value;
    enterMainTask(newMainTask);
  };

  return (
    <div>
      <textarea
        className="mainTaskInput"
        type="text"
        value={mainTask}
        autoComplete="false"
        onChange={updateMainTask}
      />
    </div>
  );
}

export default MainTask;
