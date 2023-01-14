import React from 'react';
import styles from "./Profile.module.css"

function Profile() {
  return (
    <main  >
			<div className={styles.photo__conteiner}>
			<h4 className={styles.photo__load}>Загрузите фото*</h4>
				<p className={styles.photo__size}>(размер не менее 440х440)</p>
			</div>
				<form className={styles.form} action="">
				<label htmlFor="">Дата рождения *</label>
				<input type="text" />
				<label htmlFor="">Выберите город *</label>
				<input type="text" />
				<label htmlFor="">Ник в телеграм</label>
				<input type="text" />
				<label htmlFor="">Ник на гитхабе</label>
				<input type="text" />
				<label htmlFor="">Выберите шаблон</label>
				<input type="text" />
				<label htmlFor="">Девиз, цитата</label>
				<input type="text" />
				<label htmlFor="">Увлечения, досуг, интересы</label>
				<input type="text" />
				<p>Рекомендуемый размер фото 230х129</p>
				<input type="text" />
				<label htmlFor="">Семья, статус, домашние животные</label>
				<input type="text" />
				<p>Рекомендуемый размер фото 230х129</p>
				<input type="text" />
				<label htmlFor="">Из какой сферы пришёл? Кем работаешь?</label>
				<input type="text" />
				<label htmlFor="">Почему решил учиться на веб-разработчика?</label>
				<input type="text" />
				<p>Поля, отмеченные звездочкой, обязательны * для заполнения</p>
        <button className={styles.profile__button}>
            <span className={styles.profile__buttonText}>Сохранить</span>
        </button>     
				</form>
				 
    </main>
  );
}

export default Profile;