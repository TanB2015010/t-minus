import { backgroundUrls } from "../Constants";
import TimerContainer from "./TimerContainer";

function App() {
  return (
    <div
      className="app"
      style={{
        background: `url(${
          backgroundUrls[Math.floor(Math.random() * backgroundUrls.length)]
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <TimerContainer />
    </div>
  );
}

export default App;
