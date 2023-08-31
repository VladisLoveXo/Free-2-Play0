import { Screenshots } from "./modalComponents/Screenshots";
import { TriangleArrow } from "../svgs/TriangleArrow";

export const Modal = ({ data, closeModal }) => {
  let arr;
  try {
    arr = data.description.split("\r\n\r\n");
  } catch {
    console.error("Нету данных для сортировки, обнови страницу");
  }

  function formateDate(date) {
    if (date) {
      let dateParts = date.split("-");
      return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
    } else console.error("Нету данных для сортировки, обнови страницу");
  }

  return (
    <div className="modal">
      <div className="navModal">
        <button className="close-button" onClick={closeModal}>
          <TriangleArrow styles="modal-close-button" />
          Назад
        </button>
      </div>
      <div className="modal-game-card">
        <img
          src={data.thumbnail}
          alt={`${data.title} cover`}
          samesite="Strict"
        />
        <div className="modal-game-card-bottom">
          <h1>{data.title}</h1>
          <ul>
            <li>
              <a href="#about">{data.short_description}</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="screenshots" className="screenshot-section-wrapper">
        <h3>Картинки</h3>
        <Screenshots imgData={data.screenshots} />
      </div>

      <div id="about">1</div>
      <div className="about-wrapper">
        <div className="hr-container">
          <hr />
          <h2>Об игре</h2>
        </div>
        <span className="vertical-text">Полное описание</span>
        {arr.map((pText, index) => {
          return (
            <p key={index} className="description">
              {pText}
            </p>
          );
        })}
        <a className="play-now-button" target="_blank" href={data.game_url}>
          ИГРАТЬ!
        </a>
      </div>
      <div id="specs" className="specs-wrapper">
        <div className="hr-container">
          <hr />
          <h2>Спецификация</h2>
        </div>
        {data.minimum_system_requirements && (
          <div className="specs-container">
            <div className="specsBlogMain">Детали игры</div>
            <ul>
              <li>
                <span className="li-key">Платформа: </span>
                <span>{data.platform}</span>
              </li>
              <li>
                <span className="li-key">Жанр: </span>
                <span>{data.genre}</span>
              </li>
              <li>
                <span className="li-key">Дата релиза: </span>
                <span>{formateDate(data.release_date)}</span>
              </li>
              <li>
                <span className="li-key">Разработчик: </span>
                <span>{data.developer}</span>
              </li>
              <li>
                <span className="li-key">Издатель : </span>
                <span>{data.publisher}</span>
              </li>
            </ul>
          </div>
        )}
        {data.minimum_system_requirements && (
          <div className="specs-container">
            <div className="specsBlogMain">Системные требования</div>
            <ul>
              <li>
                <span className="li-key">OS: </span>
                <span>{data.minimum_system_requirements.os}</span>
              </li>
              <li>
                <span className="li-key">Просессор: </span>
                <span>{data.minimum_system_requirements.processor}</span>
              </li>
              <li>
                <span className="li-key">Оперативная память: </span>
                <span>{data.minimum_system_requirements.memory}</span>
              </li>
              <li>
                <span className="li-key">Видеокарта: </span>
                <span>{data.minimum_system_requirements.graphics}</span>
              </li>
              <li>
                <span className="li-key">Места на диске: </span>
                <span>{data.minimum_system_requirements.storage}</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
