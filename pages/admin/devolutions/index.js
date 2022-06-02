import { AdminLayout } from "../../../components/layouts/AdminLayout";
import { DevolutionComponent } from "./devolutions";
import styles from "../../../styles/modules/Seller.module.css";

const DevolutionPage = () => {
	return (
		<AdminLayout title="Laden - Entregas" description="Entregas del vendedor">
			<div className={styles["container__page"]}>
				<h3>Devoluciones</h3>
				<DevolutionComponent></DevolutionComponent>
				<DevolutionComponent></DevolutionComponent>
			</div>
		</AdminLayout>
	);
};

export default DevolutionPage;
