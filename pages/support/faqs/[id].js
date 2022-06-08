import styles from "../Support.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { getFaqById } from "../../../database/dbFaqs";
import { SupportLayout } from "../../../components/layouts/SupportLayout";

const ModifyFaq = ({ faq }) => {
	const [question, setQuestion] = useState(faq.question);
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

	return (
		<SupportLayout>
			<div className={styles["container__page"]}>
				<div className={styles["container__asesor-page"]}>
					<div className="container section">
						<div className={styles["container"]}>
							{error && <div>{errorMessage}</div>}
							{success && <div>Faq modificada</div>}
							<form method="POST" className={styles["container__form"]}>
								<h1 className="text-center">Modificar FAQ</h1>
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
										onClick={(e) => handleSubmitFaq(e)}
									>
										Guardar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										onClick={() => router.push("/support/faqs")}
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

	const faq = await getFaqById(context.query.id);
	return {
		props: {
			faq,
		},
	};
};

export default ModifyFaq;
