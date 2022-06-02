import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ShoppingLayout } from "../../components/layouts";
import { getUserById } from "../../database";
import styles from "./Support.module.css";
import axios from "axios";

const SupportTeam = ({ user }) => {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");

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

		if (message.length < 20) {
			setError(true);
			setErrorMessage(
				"La descripción debe contener por lo menos 20 caracteres"
			);
			return;
		}

		setError(false);
		setErrorMessage("");

		await axios.post("/api/reports", {
			title: title,
			message: message,
			type: type,
			userId: user.id
		});

		setSuccess(true);
	};

	if (user.role === "ingeniero-soporte") {
		return (
			<ShoppingLayout
				title="Laden - Panel de soporte"
				description="Panel de soporte"
			>
				<div className={styles["container__ingsupport-page"]}>
					<div className="container section">
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
										<h4> Descripción </h4>
									</label>
									<textarea
										rows="5"
										placeholder="Escribe tu reporte aquí"
										className={styles["form-control"]}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
									<input
										type="text"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="Título de su sugerencia"
									/>
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										onClick={(e) => handleSubmitReport("soporte", e)}
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
									<button
										type="button"
										className={styles["buttons"]}
										onClick={() => router.push("/support")}
									>
										Ver reporte
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</ShoppingLayout>
		);
	}

	if (user.role === "ingeniero-mantenimiento") {
		return (
			<ShoppingLayout
				title="Laden - Panel de soporte"
				description="Panel de soporte"
			>
				<div className={styles["container__ingmantent-page"]}>
					<div className="container section">
						<div className={styles["container"]}>
							{error && <div>{errorMessage}</div>}
							{success && <div>Reporte guardado</div>}
							<form method="POST" className={styles["container__form"]}>
								<h1 className="text-center">Crear FAQ</h1>
								<div className={styles["container__title"]}>
									<label htmlFor="exampleFormControlInput1">
										<h4> Título </h4>
									</label>
									<input
										type="text"
										id="exampleFormControlInput1"
										className={styles["form-control"]}
										placeholder="Título de la FAQ"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>

								<div className={styles["container__message"]}>
									<label htmlFor="">
										<h4> Descripción </h4>
									</label>
									<textarea
										rows="5"
										placeholder="Escribe tu FAQ aquí"
										className={styles["form-control"]}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										onClick={(e) => handleSubmitReport("mantenimiento", e)}
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
			</ShoppingLayout>
		);
	}

	if (user.role === "asesor-mantenimiento") {
		return (
			<ShoppingLayout
				title="Laden - Panel de soporte"
				description="Panel de soporte"
			>
				<div className={styles["container__asesor-page"]}>
					<div className="container section">
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
										<h4> Descripción </h4>
									</label>
									<textarea
										rows="5"
										placeholder="Escribe tu reporte aquí"
										className={styles["form-control"]}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
						
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										onClick={(e) => handleSubmitReport("asesor", e)}
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
			</ShoppingLayout>
		);
	}

	return (
		<ShoppingLayout
			title="Laden - Panel de soporte"
			description="Panel de soporte"
		>
			<div>
				<h1>No eres parte del equipo de soporte</h1>
			</div>
		</ShoppingLayout>
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
