import { ShoppingLayout } from "../../components/layouts";
import styles from "./Suggestions.module.css";

const SuggestionPage = () => {
	return (
		<ShoppingLayout>
			<h1 className="text-center">Crear sugerencia</h1>
			<div className={styles["container"]}>
				<form className={styles["container__form"]}>
					<div className={styles["container__title"]}>
						<label htmlFor="exampleFormControlInput1">
							<h4> Título </h4>
						</label>
						<input
							type="text"
							className={styles["form-control"]}
							id="exampleFormControlInput1"
							placeholder="Título de su sugerencia"
						/>
					</div>
					<div className={styles["container__message"]}>
						<label htmlFor="">
							<h4> Mensaje</h4>
						</label>
						<textarea
							placeholder="Escribe tu sugerencia aquí"
							className={styles["form-control"]}
							rows="5"
						></textarea>
						{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/> */}
					</div>
					<div className={styles["container__buttons"]}>
						<button
							className={styles["buttons"]}
							type="submit"
							onClick={() => alert("Sugerencia enviada")}
						>
							Enviar
						</button>
						<button className={styles["buttons"]} type="button">
							Cancelar
						</button>
					</div>
				</form>
			</div>
		</ShoppingLayout>
	);
};

export default SuggestionPage;
