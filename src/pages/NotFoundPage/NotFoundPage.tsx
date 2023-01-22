import { Link } from "react-router-dom"
import imgErr from "../../images/404.jpg"
import styles from "./NotFoundPage.module.css"
import Button from "../../components/Button/Button"
import { FC } from "react"

const NotFoundPage: FC = () => {
  return (
    <div className={styles.errorContainer}>
        <img className={styles.errorImg} src={imgErr} alt="Не существующий адрес" />
        <h1 className={styles.errorTitle}>Страница не найдена</h1>
        <Link to='/'>
          <Button text="Перейти на главную" size='largeButton'></Button>
        </Link>
        </div>
  )
}

export default NotFoundPage