import style from './News.module.css'

import Container from '../Elements/Container/Container';

import { useState, useEffect } from 'react';

function News() {


  // const [news, setNews] = useState([])
  // let link = "https://newsapi.org/v2/everything?q=Apple&from=2025-01-16&sortBy=popularity&apiKey=6a9fd6b683804170a11324b108dc5eb7"

  // useEffect(()=>{
  //   fetch({link})
  //   // .then(res => res.json())
  //   .then(news => console.log(news)
  //   )
  // },[]) 

    return (
      <Container>
        <h2 className={style.title_news}>Interacting with our pets</h2>
        <ul className={style.list}>
          {/* тут рендериться 4 li розберешся  */}
        </ul>
        <button>See more</button>
      </Container>
    );
  }
  
  export default News;
  // 6a9fd6b683804170a11324b108dc5eb7