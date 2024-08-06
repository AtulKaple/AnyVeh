import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 39],
})

function Pin({item}) {
  return (
    <Marker icon={ICON} position={[item.latitude,item.longitude]}>
      <Popup className='main'>
       <div className="popupContainer">
        <img src={item.images[0]} alt="" />
        <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>₹{item.price}</span>
            <b>${item.price}</b>
        </div>
       </div>
      </Popup>
    </Marker>
  )
}

export default Pin;
