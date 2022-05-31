import { useState } from "react";
import styles from "../../../styles/modules/Seller.module.css";
import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { CloudUploadIcon, XIcon } from "@heroicons/react/solid";
import { getSession } from "next-auth/react";
import { getAllCategories, getAllSubcategories, getUserById } from "../../../database";
import { useRouter } from "next/router";
import axios from "axios";

const NewProductPage = ({ categories, subcategories, user }) => {

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [inStock, setInStock] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [subcategory, setSubcategory] = useState("");
	const [image, setImage] = useState("");

	const [categoriesList, setCategoriesList] = useState(categories);
	const [subcategoriesList, setSubcategoriesList] = useState(subcategories);
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (name === "" || price === "" || inStock === "" || description === "" || category === "") {
			setError(true);
			setErrorMessage("Todos los campos son obligatorios");
			return
		}

		await axios.post("/api/products/new", {
			name: name,
			price: Number(price),
			description: description,
			inStock: Number(inStock),
			slug: name.toLowerCase().replace(/ /g, "-"),
			tags: ["",""],
			categoryId: category,
			subcategoryId: subcategory,
			images: [image, image],
			sellerId: user.id,
		})
		router.push('/seller/products')
	}

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
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className={styles["input__label"]}></input>
						</label>

						<div className={styles["container__price-stock"]}>
							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Precio</p>
								<input
									value={price}
									onChange={(e) => setPrice(Number(e.target.value))}
									type="number"
									className={styles["input__label"]}>

								</input>
							</label>

							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Stock</p>
								<input
									value={inStock}
									onChange={(e) => setInStock(Number(e.target.value))}
									type="number" className={styles["input__label"]}></input>
							</label>
						</div>

						<div className={styles["container__description"]}>
							<p className={styles["title"]}>Descripción</p>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className={styles["textarea"]}></textarea>
						</div>

						<label className={styles["title__label"]}>
							<p className={styles["title"]}>Categoría</p>
							<select
								onChange={(e) => setCategory(Number(e.target.value))}
								className={styles["input__select"]}>
								<option value={0}>Selecciona una categoria</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</label>

						{category !== "" && category !== 0 && category !== 11 && (
							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Subategoría</p>
								<select
									onChange={(e) => setSubcategory(Number(e.target.value))}
									className={styles["input__select"]}>
									<option>Selecciona una subcategoria</option>
									{categories[category]?.subcategories.map((subcategory) => (
										<option key={subcategory?.id} value={subcategory?.id}>
											{subcategory?.name}
										</option>
									))}
								</select>
							</label>
						)}

						<div className={styles["container__price-stock"]}>
							<label className={styles["title__label"]}>
								<p className={styles["title"]}>Imagen</p>
								<input
									value={image}
									onChange={(e) => setImage(e.target.value)}
									type="text"
									className={styles["input__label"]}>
								</input>
							</label>
						</div>

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
							<button
								onClick={(e) => handleSubmit(e)}
								className={styles["buttons"]}>Agregar</button>
							<button
								onClick={() => router.push("/seller/peoducts")}
								className={styles["buttons"]}>Cancelar</button>
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
