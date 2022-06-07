import styles from "../Support.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { getReport, getUserById } from "../../../database";
import axios from "axios";
import { SupportLayout } from "../../../components/layouts/SupportLayout";

const ModifyReport = ({ report }) => {
	const [title, setTitle] = useState(report.title);
	const [message, setMessage] = useState(report.message);

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [success, setSuccess] = useState(false);

	const router = useRouter();

	const handleSubmitReport = async (e) => {
		e.preventDefault();
		if (title.length < 5) {
			setError(true);
			setErrorMessage("El título debe contener por lo menos 5 carácteres");
			return;
		}

		if (message.length < 20) {
			setError(true);
			setErrorMessage(
				"La descripción debe contener por lo menos 20 caracteres"
			);
			return;
		}

		setError(false);
		setErrorMessage("");

		await axios.put("/api/support/reports", {
			id: report.id,
			title: title,
			message: message,
			status: "en proceso",
		});

		setSuccess(true);
		setTimeout(() => {
			location.reload();
		}, 5000);
	};

	return (
		<SupportLayout>
			<div className={styles["container__page"]}>
				<div className={styles["container__asesor-page"]}>
					<div className="container section">
						<div className={styles["container"]}>
							{error && <div>{errorMessage}</div>}
							{success && <div>Reporte modificado</div>}
							<form method="POST" className={styles["container__form"]}>
								<h1 className="text-center">Modificar Reporte</h1>
								<div className={styles["container__title"]}>
									<label htmlFor="exampleFormControlInput1">
										<h4> Título </h4>
									</label>
									<input
										type="text"
										id="exampleFormControlInput1"
										className={styles["form-control"]}
										placeholder="Título del reporte"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>

								<div className={styles["container__title"]}>
									<label htmlFor="exampleFormControlInput1">
										<h4> Estatus </h4>
									</label>
									<select className={styles["form-control"]}>
										<option value="Sin avance" className={styles["options"]}>
											Sin avance
										</option>
										<option value="En curso" className={styles["options"]}>
											En curso
										</option>
										<option value="Terminado" className={styles["options"]}>
											Terminado
										</option>
									</select>
								</div>

								<div className={styles["container__message"]}>
									<label htmlFor="">
										<h4> Descripción </h4>
									</label>
									<textarea
										rows="5"
										placeholder="Escribe tu la descripción aquí"
										className={styles["form-control"]}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										onClick={(e) => handleSubmitReport(e)}
									>
										Guardar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										onClick={() => router.push("/support/reports")}
									>
										Cancelar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</SupportLayout>
	);
};

export const getServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session)
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};

	const user = await getUserById(session.user.id);
	const report = await getReport(context.query.id);
	return {
		props: {
			user,
			report,
		},
	};
};

export default ModifyReport;
