import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    model: "",
    fuel: "",
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <select
          name="model"
          id="model"
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="bike">Bike</option>
          <option value="scooty">Scooty</option>
          <option value="mini">Mini</option>
          <option value="hatchback">Hatchback</option>
          <option value="sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="MUV">MUV</option>
          <option value="luxury_Sedan">Luxury Sedan</option>
          <option value="luxury_SUV">Luxury SUV</option>
          <option value="van">Van</option>
          <option value="pickup_Tempo">Pickup Tempo</option>
          <option value="truck">Truck</option>
          <option value="bus">Bus</option>
        </select>
        <select
          name="fuel"
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="bike">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <Link
          to={`/list?type=${query.type}&city=${query.city}&model=${query.model}&fuel=${query.fuel}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
