import React from "react";
import { Link } from "wouter";
import './GIF.css'

function GIF({ title, id, url }){
    return(
        <div>
            <Link to={`/gif/${id}`}>
                <img src={url} alt={title} className='image-link'/>
            </Link>
        </div>
    )
}

export default React.memo(GIF)