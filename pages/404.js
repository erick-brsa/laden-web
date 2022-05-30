import Link from "next/link";
import { ShoppingLayout } from "../components/layouts";
import styles from "../styles/modules/404.module.css";
const Custom404 = () => {
	return (
		<ShoppingLayout
			title="Página no encontrada"
			description="Página no encontrada"
		>
			<section className={styles["home"]}>
				<div className={styles["home__container"]}>
					<div className={styles["home__data"]}>
						<h1 className={styles["home__title"]}>Error 404</h1>
						<p className={styles["home__description"]}>
							Uy! la página antes era un panteon 😱
						</p>
						<Link href="/">
							<a className={styles["home__button"]}>Regresemos</a>
						</Link>
					</div>

					<div className={styles["home__img"]}>
						<img
							className={styles["image"]}
							src="https://github.com/bedimcode/responsive-404-page/blob/project-from-scratch/assets/img/ghost-img.png?raw=true"
						/>
						<div className={styles["home__shadow"]}></div>
					</div>
				</div>
			</section>
		</ShoppingLayout>
	);
};

export default Custom404;
