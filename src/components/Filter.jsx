import React from "react";

function Filter({ showGreased, onToggleGreased, sortBy, onChangeSort }) {
  return (
    <div className="ui form" style={{ margin: "20px" }}>
      <div className="inline fields">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="greased-filter"
              type="checkbox"
              checked={showGreased}
              onChange={onToggleGreased}
            />
            <label htmlFor="greased-filter">Greased Pigs Only?</label>
          </div>
        </div>

        <div className="field">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onChangeSort(e.target.value)}
          >
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSort;
