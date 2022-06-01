import { useState, useEffect } from "react";
import { ShoppingLayout } from "../../components/layouts";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "./Suggestions.module.css";

const SuggestionPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [success, setSuccess] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (title.length < 5) {
			setError(true);
			setErrorMessage("El título debe contener por lo menos 5 carácteres");
			return;
		}

		if (description.length < 20) {
			setError(true);
			setErrorMessage(
				"La descripción debe contener por lo menos 20 caracteres"
			);
			return;
		}

		setError(false);
		setErrorMessage("");

		await axios.post("/api/suggestions", {
			title: title,
			description: description,
		});

		setSuccess(true);

	};

	return (
		<ShoppingLayout
			title="Laden - Crea una sugerencia"
			description="Página de sugerencias"
		>
			<div className="container section">
				<div className={styles["container"]}>
					{error && <div>{errorMessage}</div>}
					{success && <div>Se envió tu sugerencia</div>}
					<form method="POST" className={styles["container__form"]}>
				<h1 className="text-center">Crear sugerencia</h1>
						<div className={styles["container__title"]}>
							<label htmlFor="exampleFormControlInput1">
								<h4> Título </h4>
							</label>
							<input
								type="text"
								id="exampleFormControlInput1"
								className={styles["form-control"]}
								placeholder="Título de su sugerencia"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className={styles["container__message"]}>
							<label htmlFor="">
								<h4> Mensaje </h4>
							</label>
							<textarea
								placeholder="Escribe tu sugerencia aquí"
								className={styles["form-control"]}
								rows="5"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
							{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/> */}
						</div>
						<div className={styles["container__buttons"]}>
							<button
								type="submit"
								className={styles["buttons"]}
								onClick={handleSubmit}
							>
								Enviar
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
		</ShoppingLayout>
	);
};

export default SuggestionPage;
