import { SyntheticEvent, useEffect, useRef, useState } from "react";
import styles from "./SelectStyleInput.module.css";
import { dataForSelectStyles } from "../../utils/constants";

function SelectStyleInput(): JSX.Element {
  const selectForStyles = useRef<HTMLInputElement>(null);
  const [selectStyleData, setSelectStyleData] = useState({
    content: "",
    active: false,
  });

  const setSelectStylesActive = () => {
    setSelectStyleData({
      ...selectStyleData,
      active: !selectStyleData.active,
    });
    selectForStyles.current?.classList.add(styles.select_active);
  };

  useEffect(() => {
    selectForStyles.current!.value = selectStyleData.content;
    !selectStyleData.active &&
      selectForStyles.current?.classList.remove(styles.select_active);
  }, [selectStyleData, selectForStyles]);

  const setSelectStyleDataContent = (e: SyntheticEvent) => {
    const target = e.target as HTMLLIElement;
    const targetValue = target.innerText;
    setSelectStyleData({ active: false, content: targetValue });
  };

  return (
    <>
      <input
        readOnly
        className={styles.select}
        ref={selectForStyles}
        onClick={setSelectStylesActive}
      />
      {selectStyleData.active && (
        <div className={styles.select__content}>
          <ul
            className={styles.select__list}
            onClick={setSelectStyleDataContent}
          >
            {dataForSelectStyles.map((el, index) => (
              <li className={styles.select__item} key={index} >{el}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SelectStyleInput;
