import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogForm from "./HogForm";
import HogList from "./HogList";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none"); // "none", "name", or "weight"
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Add a new hog
  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  
  function handleHideHog(hogName) {
    setHiddenHogs([...hiddenHogs, hogName]);
  }

  const displayedHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <FilterSort
        showGreased={showGreased}
        onToggleGreased={() => setShowGreased(!showGreased)}
        sortBy={sortBy}
        onChangeSort={setSortBy}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={displayedHogs} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;
