import style from "./Hero.module.css";

import { useState } from "react";

function Hero({ getSearch }) {
  const handleSubmit = (event) => {
    const searchResult = event.currentTarget.elements.location.value;

    event.preventDefault();
    getSearch(searchResult);
  };

  return (
    <div className={style.hero}>
      <h1 className={style.title}>Weather dashboard</h1>
      <div className={style.container_subinfo}>
        <p className={style.text}>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>
        <hr className={style.line} />
        <p className={style.date}>October 2023 Friday, 13th</p>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          <input
            type="text"
            placeholder="Search location..."
            // value={search}
            name="location"
            // onChange={handleChange}
            className={style.input_location}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Hero;
