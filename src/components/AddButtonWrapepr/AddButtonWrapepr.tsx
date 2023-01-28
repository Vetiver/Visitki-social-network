import { TFile, TNewStudentCard } from "../../utils/types";
import { postUsersData } from "../../utils/api/api";
import styles from "./AddButtonWrapepr.module.css";
import { FC } from "react";

export const AddButtonWrapper: FC = () => {
  let xlsx = require("xlsx");

  const sendStudents = (json: TNewStudentCard[]) => {
    json.map((el: TNewStudentCard) => {
      postUsersData(el.email, el.cohort);
    });
  };

  const parseFileToJson = (path: ArrayBuffer) => {
    const res = xlsx.readFile(path);
    const sheetNames = res.SheetNames;
    const fistSheetName = sheetNames[0];
    const firstSheet = res.Sheets[fistSheetName];
    const json = xlsx.utils.sheet_to_json(firstSheet) as TFile[];
    return json;
  };

  const uploadStudents = async (evt: any) => {
    const [file] = evt.target.files;
    let buffer = await file.arrayBuffer();
    let json = parseFileToJson(buffer);
    sendStudents(json);
  };

  return (
    <div className={styles.button_wrapper}>
      <p className={styles.button_title}>Добавить студентов</p>
      <p className={styles.button_text}>
        Чтобы добавить новых студентов, загрузите csv или xlsx файл: первая
        колонка должна содержать email студентов, вторая колонка — номер
        когорты.
      </p>
      <label className={styles.button}>
        Выберите файл
        <input className={styles.input} type="file" onChange={uploadStudents} />
      </label>
    </div>
  );
};
