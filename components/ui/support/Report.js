import styles from "../../../pages/support/Support.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export const Report = ({ report }) => {

    const router = useRouter();
    
    const handleDeleteReport = async () => {
        await axios.delete('/api/support/report', {
            data: {
                id: report.id
            }
        })
        router.push('/support/reports')
    }

    const handleCreateFaq = async () => {
        await axios.post('/api/support/faq', {
            question: report.title,
            answer: report.solution
        })
        router.push('/support/faqs')
    }

    return (
        <div className={styles["container__main"]}>
            <div className={styles["container__second"]}>
                <div className={styles["container__camp"]}>
                    <p className={styles["title__camp"]}>Titulo del reporte:</p>
                    <p>{report.title}</p>
                </div>
                <div className={styles["container__camp"]}>
                    <p className={styles["title__camp"]}>Estatus:</p>
                    <p>{report.status}</p>
                </div>
                <div className={styles["description__container"]}>
                    <p className={styles["title__camp"]}>Descripción</p>
                    <p className={styles["description"]}>
                        {report.description}
                    </p>
                </div>
                <div className={styles["container__buttons"]}>
                    <button
                        type="button"
                        className={styles["buttons"]}
                        onClick={handleDeleteReport}
                    >
                        Eliminar
                    </button>
                    <button
                        type="button"
                        className={styles["buttons"]}
                        onClick={() => router.push(`/support/reports/${report.id}`)}
                    >
                        Modificar
                    </button>
                    <button
                        type="button"
                        className={styles["buttons"]}
                        onClick={handleCreateFaq}
                    >
                        Crear FAQ
                    </button>
                </div>
            </div>
        </div>
    );
};
