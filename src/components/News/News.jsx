import style from "./News.module.css";

import Container from "../Elements/Container/Container";

import { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&page=${page}&pageSize=4&apiKey=6a9fd6b683804170a11324b108dc5eb7`
    )
      .then((res) => res.json())
      .then((newsA) => {
        setNews({ articles: newsA.articles });
      });
  }, [page]);

  const seeMore = () => {
    const newPage = page + 1;
    setPage(newPage);
  };
  return (
    <Container>
      <div className={style.container_news}>
        <h2 className={style.title_news}>News in world</h2>
        <ul className={style.list}>
          {news.articles &&
            news.articles.map((newsObj) => ( 
              <li>
                <img className={style.img_news} src={newsObj.urlToImage} alt="" />
                <p className={style.article_title}>{newsObj.title}</p>
              </li>
            ))}
        </ul>
        <button className={style.button_seemore} onClick={seeMore}>
          See more
        </button>
      </div>
    </Container>
  );
}

export default News;
// 6a9fd6b683804170a11324b108dc5eb7
