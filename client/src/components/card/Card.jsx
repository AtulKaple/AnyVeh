import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    ///////////
    <div className="card">
      <div  className="imageContainer">
      <Link to={`/${item.id}`}>
        <img src={item.images[1]} alt="" />
    </Link>
      </div>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="https://img.icons8.com/?size=100&id=iw0Pn87EZMqD&format=png&color=FFFFFF" alt="" />
          <span>{item.city}||{item.address}</span>
        </p>
        <p className="price">₹ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=WF9XCxGojsmG&format=png&color=1A1A1A" alt="" />
              <span>{(item.model).split('_').join(' ')}</span>
            </div>
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=4192&format=png&color=1A1A1A" alt="" />
              <span>{item.fuel} </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=cDheoH2iRwze&format=png&color=FFFFFF" alt="" />
            </div>
            <div className="icon">
              <img src="https://img.icons8.com/?size=100&id=ep9KlHIMmfBW&format=png&color=FFFFFF" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
