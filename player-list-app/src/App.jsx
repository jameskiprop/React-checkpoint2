import PlayersList from "./components/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <h1 className="text-center mt-4">Football Players</h1>
      <PlayersList />
    </div>
  );
};

export default App;
