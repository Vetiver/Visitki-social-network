import styles from "./CalendarInput.module.css";
import { months } from "../../utils/dates";
import { useState } from "react";
import calendarIcon from "../../icons/forms-icons/calendar.svg";

export const CalendarInput = ({ info }: any) => {
  const monthsNumbers: { [key: string]: string } = {
    Январь: "01",
    Февраль: "02",
    Март: "03",
    Апрель: "04",
    Май: "05",
    Июнь: "06",
    Июль: "07",
    Август: "08",
    Сентябрь: "09",
    Октябрь: "10",
    Ноябрь: "11",
    Декабрь: "12",
  };
  let todayYear = 0;
  todayYear = new Date().getFullYear();
  let years = [];
  let days: number[] = [];
  let psevdoDays: number[] = [];
  for (let i = todayYear; i > 1960; i--) {
    years.push(i);
  }

  let someDay: string[] = [];

  if (info) {
    someDay = new Date(info.profile.birthday)
      .toLocaleString("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      .split(".");
    console.log(someDay);
  }

  let [isShow, setShow] = useState(false);
  let [date, setDay] = useState(Number(someDay[0]));
  let [year, setYear] = useState(someDay[2]);
  let [month, setMonth] = useState(someDay[1]);

  const showCalendar = () => {
    setShow((isShow) => !isShow);
  };

  const setNewYear = (evt: any) => {
    setYear((year = evt.target.value));
  };

  const setNewMonth = (evt: any) => {
    setMonth((month = monthsNumbers[evt.target.value]));
    prepareDays();
  };

  const setNewDay = (evt: any) => {
    setDay((date = evt.target.value));
  };

  const prepareDays = () => {
    console.log(month);
    for (let el of months) {
      if (el.number === month) {
        for (let i = 1; i <= el.days; i++) {
          days.push(i);
        }
      }
    }
  };
  prepareDays();

  const psevdoDaysLeft = 35 - days.length;

  for (let i = 1; i <= psevdoDaysLeft; i++) {
    psevdoDays.push(i);
  }

  return (
    <>
      <div className={styles.section_wrapper} onClick={showCalendar}>
        <img className={styles.icon} src={calendarIcon} alt="Календарь" />
        <input
          className={styles.input}
          readOnly
          value={`${date}.${month}.${year}`}
        ></input>
      </div>
      {isShow && (
        <div className={styles.calendar_box}>
          <div className={styles.buttons_wrapper}>
            <select className={styles.years_button} onChange={setNewYear}>
              {years.map((el, index) => (
                <option value={el} key={index}>
                  {el}
                </option>
              ))}
            </select>
            <select className={styles.months_button} onChange={setNewMonth}>
              {months.map((el, index) => (
                <option value={el.name} key={index}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <ul className={styles.days_list}>
              {days.map((day, index) => {
                return (
                  <li
                    className={`${styles.day_box} ${
                      date === day && styles.active
                    }`}
                    onClick={setNewDay}
                    value={day}
                    key={index}
                  >
                    {day}
                  </li>
                );
              })}
              {psevdoDays.map((day, index) => (
                <li className={styles.psevdo_box} key={index}>
                  {day}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
