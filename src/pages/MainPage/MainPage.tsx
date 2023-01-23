import { FC, useState, useRef, useEffect, useContext } from "react";
import arrowIcon from "../../icons/arrow_home.svg";
import styles from "./MainPage.module.css";
import ProtectedLink from "../../HOC/ProtectedLink";
import Card from "../../components/Card/Card";
import { getDefaultProfiles } from "../../utils/api/api";
import { TCards, TProfileID } from "../../utils/types";
import { AuthContext } from "../../services/AuthContext";
import Preloader from "../../components/Preloader/Preloader";

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

const MainPage: FC = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    selected: "Все города",
  });
  const [cards, setCards] = useState<TCards>({
    users: null,
  });
  const sortRef: any = useRef(null);

  // Открытие/закрытие фильтра
  const filterSet = () => {
    setIsOpened(!isOpened);
  };

  // Изменение фильтра
  const selectItem = (city: string) => {
    setSelectedItem({ ...selectItem, selected: city });
  };

  useEffect(() => {
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

  useEffect(() => {
    getDefaultProfiles().then((res) =>
      setCards({
        ...cards,
        users: res.items,
      })
    );
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.mainOptions}>
        <div
          className={styles.mainTownFilter}
          onClick={filterSet}
          ref={sortRef}
        >
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
        <ProtectedLink to={"map"} className={styles.mainOptionsMapLink}>
          Посмотреть на карте
        </ProtectedLink>
      </div>
      {!cards.users ? (
        <Preloader />
      ) : (
        <div className={styles.cardContainer}>
          {cards.users.map((cardData: TProfileID) => (
            <Card
              key={cardData._id}
              id={cardData._id}
              img={cardData.profile.photo}
              name={cardData.profile.name}
              city={cardData.profile.city.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
