import { useState } from "react";

import Numbers from "./Numbers";
import Controls from "./Controls";
import MainTask from "./MainTask";

function TimerContainer(props) {
  const { mainTask, setMainTask } = props;

  const [time, setTime] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="timer-container">
      <MainTask mainTask={mainTask} setMainTask={setMainTask} />
      <Numbers time={time} setTime={setTime} isRunning={isRunning} />
      <Controls isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
}

export default TimerContainer;
