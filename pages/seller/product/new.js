import styles from "../../../styles/modules/Seller.module.css";
import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { CloudUploadIcon, XIcon } from "@heroicons/react/solid";
import { getSession } from "next-auth/react";
import { getAllCategories, getAllSubcategories, getUserById } from "../../../database";

const NewProductPage = ({ categories }) => {
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
								<input type="number" className={styles["input__label"]}></input>
							</label>

							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Stock</p>
								<input type="number" className={styles["input__label"]}></input>
							</label>
						</div>

						<div className={styles["container__description"]}>
							<p className={styles["title"]}>Descripción</p>
							<textarea className={styles["textarea"]}></textarea>
						</div>

						<label className={styles["title__label"]}>
							<p className={styles["title"]}>Categoría</p>
							<select className={styles["input__select"]}>
								<option disabled>Selecciona una categoria</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</label>

						<label className={styles["title__label"]}>
							<p className={styles["title"]}>Subategoría</p>
							<select className={styles["input__select"]}>
								<option disabled>Selecciona una subcategoria</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</label>

						{/* <div className={styles["container__imgs"]}>
								<p className={styles["title__img"]}>Imagenes</p>
								<div className={styles["container__img-actions"]}>
									<div className={styles["wrapper"]}>
										<div className={styles["image"]}>
											<img className={styles["img__upload"]} src="https://unsplash.com/es/fotos/iWE2gH9n8oU" />
										</div>
										<div className={styles["content"]}>
											<div className={styles["icon"]}>
												<CloudUploadIcon height={150} width={150} />
											</div>
											<div className={styles["text"]}>
												No se ha eligido ningún archivo
											</div>
										</div>
										<div className={styles["cancel-btn"]}>
											<XIcon height={24} width={24} />
										</div>
									</div>
								</div>
								<input className={styles["default-btn"]} type="file"></input>
								<button className={styles["custom-btn"]}>Elije un Archivo</button>
							</div> */}

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

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return {
		redirect: { destination: "/auth/login", permanent: false }
	}

	const user = await getUserById(session.user.id);
	if (user.role !== "vendedor") return {
		redirect: { destination: "/", permanent: false }
	}

	const categories = await getAllCategories();
	const subcategories = await getAllSubcategories();

	return {
		props: { categories, subcategories, user }
	};
}

export default NewProductPage;
