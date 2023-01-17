import React from "react";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import arrowIcon from "../../icons/arrow_home.svg";
import styles from "./Main.module.css";


  const data = [
  { city: "Все города" },
  { city: "Венеция" },
  { city: "Новочеркасск" },
  { city: "Старочеркасск" },
  { city: "Среднечеркасск" },
  { city: "Ростовочеркасск" },
  { city: "Москвочеркасск" },
  { city: "Екатеринбургочеркасск" },
  { city: "Темирчеркасск" },
];

const Main = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({selected: "Все города"});

  // Открытие/закрытие фильтра
  const filterSet = () => {
    setIsOpened(!isOpened)
  }

  // Изменение фильтра
  const selectItem = (city:string) => {
    setSelectedItem({...selectItem, selected: city})
  }


  return (
    <main className={styles.main}>
      <div className={styles.mainOptions}>
        <div className={styles.mainTownFilter} onClick={filterSet}>
          <div className={styles.mainTownFilterContent}>
            <p className={styles.mainTownFilterContentText}>{selectedItem.selected}</p>
            <img
              className={styles.mainTownFilterContentImg}
              src={arrowIcon}
              alt=""
            />
          </div>
          {isOpened && <ul className={styles.mainTownFilterMenu}>
            {data.map((item) => {
              return <li className={styles.mainTownFilterMenuItem} onClick={()=>selectItem(item.city)}>{item.city}</li>;
            })}
          </ul>}
        </div>
        <a href="#" className={styles.mainOptionsMapLink}>
          Посмотреть на карте
        </a>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>

        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>

        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt=""
          />
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
