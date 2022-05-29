
import table from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import styles from "../../styles/modules/Admin.module.css";

const AdminHomePage = () => {
	return (
		<AdminLayout
			title="Laden - Panel Administrador"
			description="Panel de Administrador"
		>
			<div className={styles["container__page"]}>
				<div>
					<h3>Usuarios en la plataforma</h3>
					<div className={styles["container__seller-table"]}>
            
          </div>
					<div className={styles["container__client-table"]}></div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default AdminHomePage;
