import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { getUserById } from "../../../database";
import styles from "../Support.module.css";
import axios from "axios";
import { SupportLayout } from "../../../components/layouts/SupportLayout";

const SupportTeam = ({ user }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [solution, setSolution] = useState("");
	const [type, setType] = useState("");

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [success, setSuccess] = useState(false);

	const router = useRouter();

	const handleSubmitReport = async (type, e) => {
		e.preventDefault();
		if (title.length < 5) {
			setError(true);
			setErrorMessage("El título debe contener por lo menos 5 carácteres");
			return;
		}

		if (description.length < 20) {
			setError(true);
			setErrorMessage("La descripción debe contener por lo menos 20 caracteres");
			return;
		}

		setError(false);
		setErrorMessage("");

		await axios.post("/api/support/report", {
			title, description, solution, type
		});

		setSuccess(true);
		router.push('/support/reports')
	};

	return (
		<SupportLayout
			title="Laden - Panel de soporte"
			description="Panel de soporte"
		>
			<div className={styles["container__page"]}>
				<div className={styles["container__ingsupport-page"]}>
					<div className="container section">
						<h1 className="text-center">
							{
								user.role === "ingeniero-soporte" ? (
									<span>Ingeniero de Soporte</span>
								) :
									user.role === "asesor-soporte" ? (
										<span>Asesorde Soporte</span>
									) : (
										user.role === "ingeniero-mantenimiento" ? (
											<span>Ingeniero mantenimiento</span>
										) : null
									)
							}
						</h1>
						<div className={styles["container"]}>
							{error && <div>{errorMessage}</div>}
							{success && <div>Reporte Guardado</div>}
							<form method="POST" className={styles["container__form"]}>
								<h1 className="text-center">Crear Reporte</h1>
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

								<div className={styles["container__message"]}>
									<label htmlFor="">
										<h4>Descripción</h4>
									</label>
									<textarea
										placeholder="Descripción"
										className={styles["form-control"]}
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>

								<div className={styles["container__message"]}>
									<label htmlFor="">
										<h4>Solución</h4>
									</label>
									<textarea
										placeholder="Escribe tu reporte aquí"
										className={styles["form-control"]}
										value={solution}
										onChange={(e) => setSolution(e.target.value)}
									/>
								</div>

								<div className={styles["container__message"]}>
									<label htmlFor="">
										<h4>Tipo de reporte</h4>
									</label>
									<select
										placeholder="Escribe tu reporte aquí"
										className={styles["form-control"]}
										value={type}
										onChange={(e) => setType(e.target.value)}
									>
										<option value='soporte'>Soporte</option>
										<option value='mantenimiento'>Mantenimiento</option>
									</select>
								</div>

								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										onClick={(e) => handleSubmitReport("ing. soporte", e)}
									>
										Guardar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										onClick={() => router.push("/support")}
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


	return (
		<SupportLayout
			title="Laden - Panel de soporte"
			description="Panel de soporte"
		>
			<div className={styles["container__page"]}>
				<div>
					<h1>No eres parte del equipo de soporte</h1>
				</div>
			</div>
		</SupportLayout>
	);
};

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx);
	if (!session)
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};

	const user = await getUserById(session.user.id);

	return {
		props: {
			user,
		},
	};
};

export default SupportTeam;
