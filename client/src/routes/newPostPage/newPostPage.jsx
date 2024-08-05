import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: inputs.price,
          address: inputs.address,
          city: inputs.city,
          fuel: inputs.fuel,
          seats: parseInt(inputs.seats),
          type: inputs.type,
          contact: inputs.contact,
          model: inputs.model,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          year: parseInt(inputs.year),
          distance: parseInt(inputs.distance),

          mileage: parseInt(inputs.mileage),

          transmission: inputs.transmission,
          engine: parseInt(inputs.engine),
          insurance: inputs.insurance,
          boot: parseInt(inputs.boot),

        },
      });

      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input min={0} id="price" name="price" type="text" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="fuel">Fuel</label>
              <select name="fuel">
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="seats">Seats</label>
              <input min={1} id="seats" name="seats" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                placeholder="Add only numbers"
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                placeholder="Add only numbers"
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Model</label>
              <select name="model">
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
            </div>
            <div className="item">
              <label htmlFor="year">Model Year</label>
              <input
                min={2000}
                max={2025}
                id="year"
                name="year"
                type="number"
              />
            </div>
            <div className="item">
              <label htmlFor="distance">Travelled Km</label>
              <input min={1} id="distance" name="distance" type="number" />
            </div>
            <div className="item">
              <label htmlFor="mileage">Mileage</label>
              <input min={1} id="mileage" name="mileage" type="number" />
            </div>
            <div className="item">
              <label htmlFor="transmission">Transmission</label>
              <select name="transmission">
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="engine">Engine Displacement(cc)</label>
              <input min={0} id="engine" name="engine" type="number" />
            </div>
            <div className="item">
              <label htmlFor="insurance">Insurance</label>
              <select name="insurance">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="boot">Boot Space(liters)</label>
              <input min={0} id="boot" name="boot" type="number" />
            </div>
            <div className="item">
              <label htmlFor="contact">Contact No.</label>
              <input min={0} id="contact" name="contact" type="text" maxLength="10" inputMode="numeric" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "atul007",
            uploadPreset: "project",
            multiple: true,
            maxImageFileSize: 200000000,
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
