import { getSession } from "next-auth/react";
import { SupportLayout } from "../../../components/layouts/SupportLayout";
import { Report } from "../../../components/ui/reports/index";
import { getReports, getUserById } from "../../../database";
import styles from "../Support.module.css";

const ReportsPage = ({ reports, user }) => {
	return (
		<SupportLayout title="Laden - Reportes" description="Reportes">
			<div className={styles["container__page"]}>
				<div className={styles["container__content"]}>
					<h2>Reportes</h2>
					{reports.map((report) => (
						<Report
							key={report.id} 
							id={report.id} 
							title={report.title}
							description={report.message}
							role={user.role}
							status={report.status}
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
	const reports = await getReports(user.role);
	return {
		props: {
			user,
			reports,
		},
	};
};

export default ReportsPage;
