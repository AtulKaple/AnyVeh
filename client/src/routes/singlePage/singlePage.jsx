import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";

import "./singlePage.scss";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const handelSendMessage = async () => {
    try {
      await apiRequest.post("/chats", { receiverId: post.userId });
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="https://img.icons8.com/?size=100&id=iw0Pn87EZMqD&format=png&color=FFFFFF" alt="" />
                  <span>{post.city} || {post.address}</span>
                </div>
                <div className="price">₹ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar || "/noavatar.jpg"}  alt="" />
                <span>{post.user.username}</span>
                <p>{post.contact}</p>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Overview</p>
          <div className="listVertical">
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=1lPetCK97O0o&format=png&color=ffb78f" alt="" />
              <div className="featureText">
                <span>Model Year</span>
                  <p>{post.postDetail.year}</p>
              </div>
            </div>
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=jUO2FCFunH7s&format=png&color=ffb78f" alt="" />
              <div className="featureText">
                <span>Travelled Km</span>
                <p>{post.postDetail.distance} Km</p>
              </div>
            </div>
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=1737&format=png&color=ffb78f" alt="" />
              <div className="featureText">
                <span>Mileage</span>
                <p>{post.postDetail.mileage}</p>
              </div>
            </div>
          </div>
          <p className="title">Key Features</p>
          <div className="sizes">
            <div className="size">
              <img src="https://img.icons8.com/?size=100&id=7q2WVwMxq1xv&format=png&color=ffb78f" alt="" />
              <span>{post.postDetail.transmission}</span>
            </div>
            <div className="size">
              <img src="https://img.icons8.com/?size=100&id=4192&format=png&color=ffb78f" alt="" />
              <span>{post.fuel}</span>
            </div>
            <div className="size">
              <img src="https://img.icons8.com/?size=100&id=GOh5Umx9qe8u&format=png&color=ffb78f" alt="" />
              <span>{post.seats} Seats</span>
            </div>
          </div>
          <p className="title">General Details</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=1731&format=png&color=ffb78f" alt="" />
              <div className="featureText">
                <span>Engine</span>
                <p>
                  {post.postDetail.engine} cc
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="https://img.icons8.com/?size=100&id=b1C583IQGpBS&format=png&color=ffb78f" alt="" />
              <div className="featureText">
                <span>Insurance</span>
                <p>{post.postDetail.insurance}</p>
              </div>
            </div>
            {post.postDetail.boot?(<div className="feature">
              <img src="https://img.icons8.com/?size=100&id=pIMzc-e4_aJh&format=png&color=ffb78f" alt="" />
              <div className="featureText">
                <span>Boot Space</span>
                <p>{post.postDetail.boot} liters</p>
              </div>
            </div>):null}
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button
              onClick={() =>
                currentUser.id !== post.userId ? handelSendMessage() : null
              }
            >
              <img src="https://img.icons8.com/?size=100&id=ep9KlHIMmfBW&format=png&color=ffb78f" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "white" : "#161616",
                color:saved?"black":"white"
              }}
            >
              <img src="https://img.icons8.com/?size=100&id=cDheoH2iRwze&format=png&color=ffb78f" alt="" />
              {saved ? "Vehicle Saved" : "Save Vehicle"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
