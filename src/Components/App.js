import { useState, useEffect } from "react";

import { backgroundUrls } from "../Constants";
import TimerContainer from "./TimerContainer";

function App() {
  const [mainTask, setMainTask] = useState("Main Task");
  const [backgroundUrl, setBackgroundUrl] = useState();

  useEffect(() => {
    setBackgroundUrl(
      backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)]
    );
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <TimerContainer mainTask={mainTask} setMainTask={setMainTask} />
    </div>
  );
}

export default App;
