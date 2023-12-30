import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));

    }, [props.category])

    return (
        <div>
            <h2 className='text-center headlines'>Latest <span class="badge bg-danger">News</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard