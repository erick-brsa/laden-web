import styles from "../Support.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { getReport, getUserById } from "../../../database";
import axios from "axios";
import { SupportLayout } from "../../../components/layouts/SupportLayout";

const ModifyReport = ({ report, user }) => {
	const [title, setTitle] = useState(report.title);
	const [description, setDescription] = useState(report.description);
	const [solution, setSolution] = useState(report.solution);
	const [status, setStatus] = useState(report.status);

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

		setError(false);
		setErrorMessage("");

		await axios.put("/api/support/report", {
			id: report.id,
			title,
			description,
			solution,
			status,
		});

		setSuccess(true);
		router.push('/support/reports')
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
									<select 
										disabled={user.role !== "ingeniero-mantenimiento"}
										className={styles["form-control"]}
										value={status}
										onChange={(e) => setStatus(e.target.value)}
									>
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
										placeholder="Escribe tu la descripción aquí"
										className={styles["form-control"]}
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>

								<div className={styles["container__message"]}>
									<label htmlFor="">
										<h4> Solución </h4>
									</label>
									<textarea
										placeholder="Escribe tu la descripción aquí"
										className={styles["form-control"]}
										value={solution}
										onChange={(e) => setSolution(e.target.value)}
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
	console.log(user.role)
	const report = await getReport(context.query.id);
	return {
		props: {
			user,
			report,
		},
	};
};

export default ModifyReport;
