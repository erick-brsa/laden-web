import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { getUserById } from "../../../database";
import styles from "../Support.module.css";
import axios from "axios";
import { SupportLayout } from "../../../components/layouts/SupportLayout";

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

		await axios.post("/api/support/reports", {
			title: title,
			message: message,
			type: type,
			userId: user.id,
		});

		setSuccess(true);
		setTimeout(() => {
			location.reload();
		}, 5000);
	};

	if (user.role === "ingeniero-soporte") {
		return (
			<SupportLayout
				title="Laden - Panel de soporte"
				description="Panel de soporte"
			>
				<div className={styles["container__page"]}>
					<div className={styles["container__ingsupport-page"]}>
						<div className="container section">
							<h2>Ingeniero de Soporte</h2>
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
	}

	if (user.role === "asesor-mantenimiento") {
		return (
			<SupportLayout
				title="Laden - Panel de soporte"
				description="Panel de soporte"
			>
				<div className={styles["container__page"]}>
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
											onClick={(e) =>
												handleSubmitReport("asesor-mantenimiento", e)
											}
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
	}

	if (user.role === "ingeniero-mantenimiento") {
		return (
			<SupportLayout
				title="Laden - Panel de soporte"
				description="Panel de soporte"
			>
				<div className={styles["container__page"]}>
					<div className={styles["container__ingmantent-page"]}>
						<div className="container section">
							<h2>Ingeniero de Mantenimiento</h2>
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
											onClick={(e) =>
												handleSubmitReport("ing. mantenimiento", e)
											}
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
	}

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
