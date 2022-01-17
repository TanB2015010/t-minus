import { useState, useEffect } from "react";

import { backgroundUrls } from "./Constants";
import TimerContainer from "./Components/TimerContainer";

const chooseRandomBackgroundUrl = () =>
  backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)];

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState();

  useEffect(() => {
    setBackgroundUrl(chooseRandomBackgroundUrl());
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <TimerContainer
        updateBackground={() => {
          let newBackground = backgroundUrl;
          while (newBackground == backgroundUrl) {
            newBackground = chooseRandomBackgroundUrl();
          }
          setBackgroundUrl(newBackground);
        }}
      />
    </div>
  );
}

export default App;
