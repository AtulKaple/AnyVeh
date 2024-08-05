import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Your <span className="ride">Ride</span>, Your <span className="way">Way <img src="https://img.icons8.com/?size=100&id=2856&format=png&color=8a8a8a" alt="" /></span></h1>
          <p>
          Renting, Selling, and Buying Made Easy..
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1 Million+</h1>
              <h2>Worldwide Active Users</h2>
            </div>
            <div className="box">
              <h1>2k+</h1>
              <h2>Vehicles Available</h2>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default HomePage;
