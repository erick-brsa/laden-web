import styles from "../../../styles/modules/Seller.module.css";
import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { CloudUploadIcon, XIcon } from "@heroicons/react/solid";

const AddNewProduct = () => {
	return (
		<SellerLayout
			title="Laden - Nuevo Producto"
			description="Agregar Nuevo Producto"
		>
			<div className={styles["container__page"]}>
				<h3>Agrega un nuevo producto</h3>
				<div className={styles["container__form"]}>
					<div className={styles["container__camps"]}>
						<label className={styles["title__label"]}>
							<p className={styles["title"]}>Nombre</p>
							<input type="text" className={styles["input__label"]}></input>
						</label>

						<div className={styles["container__price-stock"]}>
							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Precio</p>
								<input type="text" className={styles["input__label"]}></input>
							</label>

							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Stock</p>
								<input type="text" className={styles["input__label"]}></input>
							</label>
						</div>

						<div className={styles["container__description"]}>
							<p className={styles["title"]}>Descripción</p>
							<textarea className={styles["textarea"]}></textarea>
						</div>

						<label className={styles["title__label"]}>
							<p className={styles["title"]}>Categoría</p>
							<select className={styles["input__select"]}>
								<option>Electronica, audio y video</option>
								<option>Celulares y telefonía</option>
								<option>Computación y tecnología</option>
								<option>Deportes y fitness</option>
								<option>Hogar y Muebles</option>
								<option>Instrumentos Musicales</option>
								<option>Libros, peliculas y música</option>
								<option>Ropa, bolsas y calzado</option>
								<option>Salud y Belleza</option>
								<option>Juegos y Juguets</option>
								<option>Otras Categorías</option>
							</select>
						</label>

						<div className={styles["container__imgs"]}>
							<p className={styles["title__img"]}>Imagenes</p>
							<div className={styles["container__img-actions"]}>
								<div className={styles["wrapper"]}>
									<div className={styles["image"]}>
										{/* <img className={styles["img__upload"]} src="https://unsplash.com/es/fotos/iWE2gH9n8oU" /> */}
									</div>
									<div className={styles["content"]}>
										<div className={styles["icon"]}>
											<CloudUploadIcon height={150} width={150} />
										</div>
										<div className={styles["text"]}>
											No se ha eligido ningún archivo
										</div>
									</div>
									<div id={styles["cancel-btn"]}>
										<XIcon height={24} width={24} />
									</div>
								</div>
							</div>
							<input id={styles["default-btn"]} type="file"></input>
							<button id={styles["custom-btn"]}>Elije un Archivo</button>
						</div>

						<div className={styles["buttons__actions"]}>
							<button className={styles["buttons"]}>Agregar</button>
							<button className={styles["buttons"]}>Cancelar</button>
						</div>
					</div>
				</div>
			</div>
		</SellerLayout>
	);
};

export default AddNewProduct;
