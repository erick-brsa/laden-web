import styles from '../../../styles/modules/Notifications.module.css';

export const Notification = () => {
    return (
        <div className={styles["notification"]}>
            <div className={styles["container__img"]}>
                <div className={styles["container__user"]}>
                    <img
                        className={styles["avatar"]}
                        src="https://ui-avatars.com/api/?name=juan"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles["container__comment"]}>
                <p className={styles["user__name"]}>Mr. Beast</p>
                <p className={styles["text__comment"]}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
                    iste! Tenetur voluptatem repellendus officiis earum exercitationem
                    corrupti aperiam. Nihil, nam.
                </p>
                <p className={styles["name_product"]}>Laptop Note book 15</p>
                <div className={styles["time"]}>20 minutes ago</div>
            </div>
        </div>
    )
}
