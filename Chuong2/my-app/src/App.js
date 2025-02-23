import YoutubeList from "./youtube/YoutubeList";
import "./App.css";

// parent component
function App() {
  return (
    <div>
      {/* Children component */}
      <YoutubeList>
        {/* Children */}
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          assumenda dolore quod, inventore enim maiores repudiandae dolor at
          explicabo, quo ut qui quae odit? Aspernatur quod veritatis dolore quo
          corrupti.
        </h2>
      </YoutubeList>
    </div>
  );
}

export default App;
