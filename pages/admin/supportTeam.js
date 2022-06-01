import { AdminLayout } from "../../components/layouts/AdminLayout";
import styles from "../../pages/support/Suggestions.module.css";

const supportTeam = () => {
	return (
		<AdminLayout>
			<div className={styles["container__page"]}>
				{/* Asesor Page */}
				<div className={styles["container__asesor-page"]}>
					<div className="container section">
						<div className={styles["container"]}>
							{/* {error && <div>{errorMessage}</div>}
							{success && <div>Se envió tu sugerencia</div>} */}
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
										// value={title}
										// onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className={styles["container__title"]}>
									<label htmlFor="">
										<h4>Fecha</h4>
									</label>
									<input
										type="date"
										className={styles["form-control"]}
										placeholder="Ingresa la fecha"
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
										// value={description}
										// onChange={(e) => setDescription(e.target.value)}
									></textarea>
									{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/> */}
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										// onClick={handleSubmit}
									>
										Guardar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										// onClick={() => router.push("/support")}
									>
										Cancelar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* Ingeniero de soporte Page */}
				<div className={styles["container__ingsupport-page"]}>
					<div className="container section">
						<div className={styles["container"]}>
							{/* {error && <div>{errorMessage}</div>}
							{success && <div>Se envió tu sugerencia</div>} */}
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
										// value={title}
										// onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className={styles["container__title"]}>
									<label htmlFor="">
										<h4>Fecha</h4>
									</label>
									<input
										type="date"
										className={styles["form-control"]}
										placeholder="Ingresa la fecha"
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
										// value={description}
										// onChange={(e) => setDescription(e.target.value)}
									></textarea>
									{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/> */}
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										// onClick={handleSubmit}
									>
										Guardar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										// onClick={() => router.push("/support")}
									>
										Cancelar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										// onClick={() => router.push("/support")}
									>
										Ver reporte
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* Ingeniero de mantenimiento Page */}
				<div className={styles["container__ingmantent-page"]}>
					<div className="container section">
						<div className={styles["container"]}>
							{/* {error && <div>{errorMessage}</div>}
							{success && <div>Se envió tu sugerencia</div>} */}
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
										// value={title}
										// onChange={(e) => setTitle(e.target.value)}
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
										// value={description}
										// onChange={(e) => setDescription(e.target.value)}
									></textarea>
									{/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/> */}
								</div>
								<div className={styles["container__buttons"]}>
									<button
										type="submit"
										className={styles["buttons"]}
										// onClick={handleSubmit}
									>
										Guardar
									</button>
									<button
										type="button"
										className={styles["buttons"]}
										// onClick={() => router.push("/support")}
									>
										Cancelar
									</button>
                                    
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default supportTeam;
