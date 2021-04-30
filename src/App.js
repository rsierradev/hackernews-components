import { Menu } from "./components/Menu";
import { NewsList } from "./components/NewsList";
function App() {
  return (
    <div
      className="container mt-2 mb-2"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      <Menu />
      <NewsList />
    </div>
  );
}

export default App;
