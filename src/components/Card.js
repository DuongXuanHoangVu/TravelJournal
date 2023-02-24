import Img from "./Img";
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';

function Card({ key, data }) {
    return ( 
        <seciton className="card">
            <Img src={data.image} alt="" />
            <div className="card-info">
                <div className="card-location">
                    <span className="card-icon">
                        <Icon path={mdiMapMarker} size={1} color="#F55A5A" />
                    </span>
                    <p className="card-title">{data.nation}</p>
                    <a href="https://www.google.com/maps/@9.682084,105.568023,15z?hl=vi-VN" className="card-google">View on Google Maps</a>
                </div>
                <div className="card-name">{data.name}</div>
                <div className="card-time">{data.time}</div>
                <div className="card-description">{data.description}</div>
            </div>
        </seciton>
     );
}

export default Card;