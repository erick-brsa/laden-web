import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../Support.module.css";
import axios from "axios";
import { SupportLayout } from "../../../components/layouts/SupportLayout";
import { getUserById } from "../../../database";

const NewFaqPage = ({ user }) => {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [success, setSuccess] = useState(false);

	const router = useRouter();

	const handleSubmitFaq = async (e) => {
		e.preventDefault();
		if (question.length < 5) {
			setError(true);
			setErrorMessage("El título debe contener por lo menos 5 carácteres");
			return;
		}

		if (answer.length < 20) {
			setError(true);
			setErrorMessage(
				"La descripción debe contener por lo menos 20 caracteres"
			);
			return;
		}

		setError(false);
		setErrorMessage("");

		await axios.post("/api/support/faqs", {
			question: question,
			answer: answer,
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
							<div className={styles["container"]}>
								{error && <div>{errorMessage}</div>}
								{success && <div>Faq guardada</div>}
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
											value={question}
											onChange={(e) => setQuestion(e.target.value)}
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
											value={answer}
											onChange={(e) => setAnswer(e.target.value)}
										></textarea>
									</div>
									<div className={styles["container__buttons"]}>
										<button
											type="submit"
											className={styles["buttons"]}
											onClick={(e) => handleSubmitFaq("ing. soporte", e)}
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
											onClick={() => router.push("/support/faqs")}
										>
											Ver FAQs
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
					<div className={styles["container__ingsupport-page"]}>
						<div className="container section">
							<div className={styles["container"]}>
								{error && <div>{errorMessage}</div>}
								{success && <div>Faq guardada</div>}
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
											value={question}
											onChange={(e) => setQuestion(e.target.value)}
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
											value={answer}
											onChange={(e) => setAnswer(e.target.value)}
										></textarea>
									</div>
									<div className={styles["container__buttons"]}>
										<button
											type="submit"
											className={styles["buttons"]}
											onClick={(e) => handleSubmitFaq("ing. soporte", e)}
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
											onClick={() => router.push("/support/faqs")}
										>
											Ver FAQs
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
					<h1>No tienes permisos para crear FAQs</h1>
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
		}

	const user = await getUserById(session.user.id);

	return {
		props: {
			user,
		},
	};
};


export default NewFaqPage;
