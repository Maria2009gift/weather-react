import style from "./Hero.module.css";

import search_img from '../../img/search.png'



function Hero({ getSearch }) {

  let now = new Date();

  const handleSubmit = (event) => {
    const searchResult = event.currentTarget.elements.location.value;

    event.preventDefault();
    getSearch(searchResult);
    event.currentTarget.elements.location.value = ""
  };

  const day = () => {
    let now = new Date();
    let day = now.getDay();
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wensday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        break;
    }
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
        <p className={style.date}>February {now.getFullYear()} {day()}, 25</p>
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
        <button type="submit" className={style.search_btn}><img src={search_img} alt="" className={style.search_img}/></button>
      </form>
    </div>
  );
}

export default Hero;
