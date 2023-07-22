import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=bc5e36d278e346dea00f3c07ddde7208").then((res) => {
      console.log(res.data.articles);
      setNews(res.data.articles);
    })
  }, [])

  return (
    <>
    <Navbar />
      <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={val.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <button className="btn"><a href={val.url}>Read More</a></button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
