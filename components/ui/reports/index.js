import styles from "../../../pages/support/Support.module.css";
import { useRouter } from "next/router";

export const Report = ({id, title, description, status, role}) => {
	const router = useRouter();
	return (
		<div className={styles["container__main"]}>
			<div className={styles["container__second"]}>
				<div className={styles["container__camp"]}>
					<p className={styles["title__camp"]}>Titulo del reporte:</p>
					<p>{title}</p>
				</div>
				<div className={styles["container__camp"]}>
					<p className={styles["title__camp"]}>Estatus:</p>
					<p>{status}</p>
				</div>
				<div className={styles["container__camp"]}>
					<p className={styles["title__camp"]}>Tipo de usuario:</p>
					<p>{role}</p>
				</div>
				<div className={styles["description__container"]}>
					<p className={styles["title__camp"]}>Descripción</p>
					<p className={styles["description"]}>
						{description}
					</p>
				</div>
				<div className={styles["container__buttons"]}>
					<button
						className={styles["buttons"]}
					>
						Eliminar
					</button>
					<button
						className={styles["buttons"]}
						onClick={() => router.push(`/support/reports/${id}`)}
					>
						Modificar
					</button>
				</div>
			</div>
		</div>
	);
};
