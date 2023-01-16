import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import arrowIcon from "../../icons/arrow_home.svg";
import styles from "./Main.module.css";

const Main = () => {
  const data = [
    "Венеция",
    "Венеция",
    "Венеция",
    "Венеция",
    "Венеция",
    "Венеция",
    "Венеция",
    "Венеция",
  ];

  return (
    <main className={styles.main}>
      <div className={styles.mainOptions}>
        <div className={styles.mainTownFilter}>
          <div className={styles.mainTownFilterContent}>
            <p className={styles.mainTownFilterContentText}>Все города</p>
            <img
              className={styles.mainTownFilterContentImg}
              src={arrowIcon}
              alt=""
            />
          </div>
          <ul className={styles.mainTownFilterMenu}>
            {data.map((item) => {
              return <li className={styles.mainTownFilterMenuItem}>{item}</li>;
            })}
          </ul>
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
