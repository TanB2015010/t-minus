import { useState, useEffect } from "react";

import { backgroundUrls } from "../Constants";
import TimerContainer from "./TimerContainer";

function App() {
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
      <TimerContainer />
    </div>
  );
}

export default App;
