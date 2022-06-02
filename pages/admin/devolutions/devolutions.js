import styles from "../../../styles/modules/Seller.module.css";

export const DevolutionComponent = () => {
	return (
		<div className={styles["container__deliver-page"]}>
			<div className={styles["container__deliver"]}>
				<div className={styles["container__user"]}>
					<img
						className={styles["avatar"]}
						src="https://ui-avatars.com/api/?name=juan"
						alt=""
					/>
					<p className={styles["user__name"]}>Mr. Beast</p>
				</div>
				<div className={styles["container__direction"]}>
					<textarea className={styles["container__text"]}></textarea>
				</div>
			</div>

			<div className={styles["container__buttons"]}>
				<button className={styles["buttons__devolution"]}>Aceptar Devolución</button>
				<button className={styles["buttons__devolution"]}>Denegar Devolución</button>
			</div>
		</div>
	);
};
