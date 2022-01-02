import { useState, useEffect } from "react";

import { getLocalStorage, setLocalStorage } from "../utils";
import { LOCAL_STORAGE_KEYS, defaultTask, defaultTime } from "../Constants";
import Numbers from "./Numbers";
import Controls from "./Controls";
import MainTask from "./MainTask";

function TimerContainer() {
  const [mainTask, setMainTask] = useState(defaultTask);
  const [originalTime, setOriginalTime] = useState(defaultTime);
  const [time, setTime] = useState(originalTime);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState();

  const onResetClick = () => {
    setTime(originalTime);
  };

  const enterTime = (newTime) => {
    setTime(newTime);
    setOriginalTime(newTime);
    setLocalStorage(LOCAL_STORAGE_KEYS.ORIGINAL_TIME, newTime);
  };

  const enterMainTask = (newTask) => {
    setMainTask(newTask);
    setLocalStorage(LOCAL_STORAGE_KEYS.MAIN_TASK, newTask);
  };

  useEffect(() => {
    const localStorageStore = getLocalStorage(
      Object.values(LOCAL_STORAGE_KEYS)
    );

    const localTime = localStorageStore[LOCAL_STORAGE_KEYS.ORIGINAL_TIME];
    if (localTime) {
      setTime(localTime);
      setOriginalTime(localTime);
    }

    const localTask = localStorageStore[LOCAL_STORAGE_KEYS.MAIN_TASK];
    if (localTask) {
      setMainTask(localTask);
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      const newIntervalId = setInterval(() => {
        setTime((oldTime) => oldTime - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  useEffect(() => {
    if (time <= 0) {
      setIsRunning(false);
      onResetClick();
    }
  }, [time]);

  return (
    <div className="timer-container">
      <MainTask mainTask={mainTask} enterMainTask={enterMainTask} />
      <Numbers time={time} enterTime={enterTime} isRunning={isRunning} />
      <Controls
        onResetClick={onResetClick}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}

export default TimerContainer;
