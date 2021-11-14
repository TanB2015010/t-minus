import { useState, useEffect } from "react";

import { backgroundUrls } from "../Constants";
import TimerContainer from "./TimerContainer";

function App() {
  const [mainTask, setMainTask] = useState("This is the thing to focus on");
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
        background: `url(${backgroundUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <TimerContainer mainTask={mainTask} setMainTask={setMainTask} />
    </div>
  );
}

export default App;
