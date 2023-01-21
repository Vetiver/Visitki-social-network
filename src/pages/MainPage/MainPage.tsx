import React from "react";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import arrowIcon from "../../icons/arrow_home.svg";
import styles from "./MainPage.module.css";
import ProtectedLink from "../../HOC/ProtectedLink";
import { Link } from "react-router-dom";

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

const MainPage = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({
    selected: "Все города",
  });
  const sortRef = React.useRef<any>(null);

  // Открытие/закрытие фильтра
  const filterSet = () => {
    setIsOpened(!isOpened);
  };

  // Изменение фильтра
  const selectItem = (city: string) => {
    setSelectedItem({ ...selectItem, selected: city });
  };

  React.useEffect(() => {

    const handleCloseOutsideClick = (evt: Event) => {
      if (!sortRef.current.contains(evt.target)) {
        setIsOpened(false);
      }
    };
    document.body.addEventListener("click", handleCloseOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleCloseOutsideClick);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainOptions}>
        <div className={styles.mainTownFilter} onClick={filterSet}  ref={sortRef}>
          <div className={styles.mainTownFilterContent}>
            <p className={styles.mainTownFilterContentText}>
              {selectedItem.selected}
            </p>
            <img
              className={styles.mainTownFilterContentImg}
              src={arrowIcon}
              alt=""
            />
          </div>
          {isOpened && (
            <ul className={styles.mainTownFilterMenu}>
              {data.map((item, index) => {
                return (
                  <li
                    className={styles.mainTownFilterMenuItem}
                    key={index}
                    onClick={() => selectItem(item.city)}
                  >
                    {item.city}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <ProtectedLink to={'map'} className={styles.mainOptionsMapLink}>
          Посмотреть на карте
        </ProtectedLink>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
        <Link to="details">
          <img
            className={styles.cardImg}
            src="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
            alt=""
          />
          
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          </Link>

          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>

        <div className={styles.card}>
        <Link to="details">
          <img
            className={styles.cardImg}
            src="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
            alt=""
          />
          
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          </Link>

          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
        <Link to="details">
          <img
            className={styles.cardImg}
            src="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
            alt=""
          />
          
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          </Link>

          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        <div className={styles.card}>
        <Link to="details">
          <img
            className={styles.cardImg}
            src="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
            alt=""
          />
          
          <p className={styles.cardName}>Степанов Дмитрий</p>
          <p className={styles.cardPlace}>Жемчужное Костромской обл</p>
          </Link>

          <div className={styles.cardIcon}>
            <ChatIcon />
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default MainPage;
