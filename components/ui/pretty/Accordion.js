import styles from "../../../pages/support/Faqs.module.css";

const Accordion = ({question, answer}) => {
	return (
		<div className={`${styles["accordion__item"]} ${styles["accordion-open"]}`}>
			<header className={styles["accordion__header"]}>
				{/* <i className="bx bx-plus accordion__icon"></i> */}
				<h3 className={styles["accordion__title"]}>{question}</h3>
			</header>

			<div className={styles["accordion__content"]}>
				<p className={styles["accordion__description"]}>
					{answer}
				</p>
			</div>
		</div>
	);
};

export default Accordion;
