import { getSession } from "next-auth/react";
import { SupportLayout } from "../../../components/layouts";
import { Report } from "../../../components/ui/";
import { getAllReports, getUserById } from "../../../database";
import styles from "../Support.module.css";

const ReportsPage = ({ reports }) => {
	return (
		<SupportLayout title="Laden - Reportes" description="Reportes">
			<div className={styles["container__page"]}>
				<div className={styles["container__content"]}>
					<h2>Reportes</h2>
					{reports.map((report) => (
						<Report
							key={report.id} 
							report={report}
							/>
					))}
				</div>
			</div>
		</SupportLayout>
	);
};

export const getServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session)
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};

	const user = await getUserById(session.user.id);
	const reports = await getAllReports();
	return {
		props: {
			user,
			reports,
		},
	};
};

export default ReportsPage;
