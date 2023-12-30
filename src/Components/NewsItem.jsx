import React from 'react'
import newImage from '../assets/newsImage.jpg'

const NewsItem = (props) => {
    return (
        <div class="card bg-dark text-light mb-3 px-2 py-2 my-4 mx-4">
            <img src={props.src ? props.src : newImage} className="card-img-top" alt="Not Loaded" style={{height:"400px" }} />
            <div class="card-body">
                <h5 class="card-title">{props.title.slice(0, 50)}</h5>
                <p class="card-text">{props.description ? props.description: "Stay informed with our comprehensive news coverage, bringing you the latest updates from around the world."}</p>
                <a href={props.url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem