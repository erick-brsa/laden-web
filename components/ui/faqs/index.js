import styles from "../../../pages/support/Support.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export const Faq = ({id, question, answer}) => {
	const router = useRouter();
	const handleDelete = async () => {
		await axios.delete('/support/faqs', {
			id: id
		})
		router.push('/support/faqs')
	}

	return (
		<div className={styles["container__main"]}>
			<div className={styles["container__second"]}>
				<div className={styles["container__camp"]}>
					<p className={styles["title__camp"]}>Pregunta:</p>
					<p>{question}</p>
				</div>
				<div className={styles["description__container"]}>
					<p className={styles["title__camp"]}>Respuesta:</p>
					<p className={styles["description"]}>
						{answer}
					</p>
				</div>
				<div className={styles["container__buttons"]}>
					<button
						className={styles["buttons"]}
						onClick={() => router.push(`/support/faqs/${id}`)}
					>
						Modificar
					</button>
					<button
						type="button"
						className={styles["buttons"]}
						onClick={handleDelete}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};
