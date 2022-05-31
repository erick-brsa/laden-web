import { AdminLayout } from "../../components/layouts/AdminLayout";
import styles from "../../styles/modules/Admin.module.css";
// import "styled-components-bootstrap";
import { getUsers } from "../../database";
import DataTable from "react-data-table-component";

const columns = [
	{
		name: "ID",
		selector: "id",
		sortable: true,
	},
	{
		name: "Correo",
		selector: "email",
		sortable: true,
	},
	{
		name: "Nombre",
		selector: "name",
		sortable: true,
	},
	{
		name: "Tipo de Usuario",
		selector: "role",
		sortable: true,
	},
];

const AdminHomePage = ({ users }) => {
	return (
		<AdminLayout
			title="Laden - Panel Administrador"
			description="Panel de Administrador"
		>
			<div className={styles["container__page"]}>
				<div>
					<h3>Usuarios en la plataforma</h3>
					<div className={styles["container__seller-table"]}>
						<div className={styles["table"]}>
							<div>
								<DataTable
									columns={columns}
									data={users}
									title="Usuarios"
									pagination
									fixedHeader
								/>
							</div>
						</div>
					</div>
					<div className={styles["container__client-table"]}></div>
				</div>
			</div>
		</AdminLayout>
	);
};

export const getServerSideProps = async (ctx) => {
	const users = await getUsers();

	return {
		props: {
			users,
		},
	};
};

export default AdminHomePage;
