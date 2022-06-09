import { LogoutIcon } from "@heroicons/react/outline";
import { BellIcon, ClipboardCheckIcon, InboxInIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/modules/Admin.module.css";

export const SupportLayout = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<header className={styles["container__nav"]}>
				<div className={styles["l-navbar"]}>
					<nav className={styles["nav"]}>
						<div>
							<Link href="/support">
								<a className={styles["nav__logo"]}>
									<svg
										className="main-nav__logo-svg"
										width="85"
										height="46"
										viewBox="0 0 85 46"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
											fill="#E53F82"
										/>
										<path
											d="M25 13C27.7614 13 30 10.7614 30 8C30 5.23858 27.7614 3 25 3C22.2386 3 20 5.23858 20 8C20 10.7614 22.2386 13 25 13Z"
											fill="#7680C6"
											className="logo-morado"
										/>
										<path
											d="M40 13C42.7614 13 45 10.7614 45 8C45 5.23858 42.7614 3 40 3C37.2386 3 35 5.23858 35 8C35 10.7614 37.2386 13 40 13Z"
											fill="#57C6C1"
										/>
										<path
											d="M6.328 17.8H8.92V26.888H14.536V29H6.328V17.8ZM27.454 26.6H22.254L21.262 29H18.606L23.598 17.8H26.158L31.166 29H28.446L27.454 26.6ZM26.638 24.632L24.862 20.344L23.086 24.632H26.638ZM36.328 17.8H41.416C42.632 17.8 43.704 18.0347 44.632 18.504C45.5707 18.9627 46.296 19.6133 46.808 20.456C47.3307 21.2987 47.592 22.28 47.592 23.4C47.592 24.52 47.3307 25.5013 46.808 26.344C46.296 27.1867 45.5707 27.8427 44.632 28.312C43.704 28.7707 42.632 29 41.416 29H36.328V17.8ZM41.288 26.872C42.408 26.872 43.2987 26.5627 43.96 25.944C44.632 25.3147 44.968 24.4667 44.968 23.4C44.968 22.3333 44.632 21.4907 43.96 20.872C43.2987 20.2427 42.408 19.928 41.288 19.928H38.92V26.872H41.288ZM62.2188 26.92V29H53.5468V17.8H62.0108V19.88H56.1228V22.312H61.3228V24.328H56.1228V26.92H62.2188ZM78.5531 17.8V29H76.4251L70.8411 22.2V29H68.2811V17.8H70.4251L75.9931 24.6V17.8H78.5531Z"
											className="title"
										/>
										<path
											d="M6.824 36.456H5.032V35.4H9.912V36.456H8.12V41H6.824V36.456ZM12.2093 35.4H13.5053V41H12.2093V35.4ZM20.7703 39.96V41H16.4343V35.4H20.6663V36.44H17.7223V37.656H20.3223V38.664H17.7223V39.96H20.7703ZM28.5375 35.4V41H27.4735L24.6815 37.6V41H23.4015V35.4H24.4735L27.2575 38.8V35.4H28.5375ZM31.4624 35.4H34.0064C34.6144 35.4 35.1504 35.5173 35.6144 35.752C36.0838 35.9813 36.4464 36.3067 36.7024 36.728C36.9638 37.1493 37.0944 37.64 37.0944 38.2C37.0944 38.76 36.9638 39.2507 36.7024 39.672C36.4464 40.0933 36.0838 40.4213 35.6144 40.656C35.1504 40.8853 34.6144 41 34.0064 41H31.4624V35.4ZM33.9424 39.936C34.5024 39.936 34.9478 39.7813 35.2784 39.472C35.6144 39.1573 35.7824 38.7333 35.7824 38.2C35.7824 37.6667 35.6144 37.2453 35.2784 36.936C34.9478 36.6213 34.5024 36.464 33.9424 36.464H32.7584V39.936H33.9424ZM43.2817 39.8H40.6817L40.1857 41H38.8577L41.3537 35.4H42.6337L45.1377 41H43.7777L43.2817 39.8ZM42.8737 38.816L41.9857 36.672L41.0977 38.816H42.8737Z"
											className="text"
										/>
									</svg>
								</a>
							</Link>

							<div className={styles["nav__list"]}>
								<Link href="/support/reports/new">
									<a className={styles["nav__link"]}>
										<BellIcon height={24} width={24} />
										<span className={styles["nav__name"]}>Crear Reporte</span>
									</a>
								</Link>

								<Link href="/support/reports">
									<a className={styles["nav__link"]}>
										<ClipboardCheckIcon height={24} width={24} />
										<span className={styles["nav__name"]}>Ver Reportes</span>
									</a>
								</Link>
								<Link href="/support/faqs/new">
									<a href="#" className={styles["nav__link"]}>
										<InboxInIcon height={24} width={24} />
										<span className={styles["nav__name"]}>Crear FAQs</span>
									</a>
								</Link>
								<Link href="/support/faqs">
									<a href="#" className={styles["nav__link"]}>
										<InboxInIcon height={24} width={24} />
										<span className={styles["nav__name"]}>Ver FAQs</span>
									</a>
								</Link>
							</div>
						</div>

						<div className={styles["container__logout"]}>
							<a href="#" className={styles["nav__link"]}>
								<LogoutIcon height={24} width={24} />
								<button
									className={styles["logout-btn"]}
									onClick={() => signOut()}
								>
									Cerrar Sesión
								</button>
							</a>
						</div>
					</nav>
				</div>
			</header>
			{children}
		</>
	);
};
