/* eslint-disable @next/next/no-img-element */
import { getSession, useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { MenuIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/solid';
// import { getUserById } from '/database/dbUsers';

import styles from '/styles/modules/Header.module.css';

export const ShoppingHeader = () => {

    const [user, setUser] = useState(null);
        
    const session = useSession();

    useEffect(() => {
        if(session.status === 'authenticated') {
            console.log(session.data.user);
            setUser(session.data.user);
        }
    }, [session]);
    

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const router = useRouter()

    const handleOpenMenu = () => { setIsOpen(true); }

    const handleCloseMenu = () => { setIsOpen(false); }

    return (
        <header className="header" id="header">
            <div className={styles["main-nav-container"]}>
                <nav className={styles["main-nav"]}>
                    <Link href="/">
                        <a className="main-nav__logo">
                            <svg
                                className="main-nav__logo-svg"
                                width="85"
                                height="46"
                                viewBox="0 0 85 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z" fill="#E53F82" />
                                <path d="M25 13C27.7614 13 30 10.7614 30 8C30 5.23858 27.7614 3 25 3C22.2386 3 20 5.23858 20 8C20 10.7614 22.2386 13 25 13Z" fill="#7680C6" className="logo-morado" />
                                <path d="M40 13C42.7614 13 45 10.7614 45 8C45 5.23858 42.7614 3 40 3C37.2386 3 35 5.23858 35 8C35 10.7614 37.2386 13 40 13Z" fill="#57C6C1" />
                                <path d="M6.328 17.8H8.92V26.888H14.536V29H6.328V17.8ZM27.454 26.6H22.254L21.262 29H18.606L23.598 17.8H26.158L31.166 29H28.446L27.454 26.6ZM26.638 24.632L24.862 20.344L23.086 24.632H26.638ZM36.328 17.8H41.416C42.632 17.8 43.704 18.0347 44.632 18.504C45.5707 18.9627 46.296 19.6133 46.808 20.456C47.3307 21.2987 47.592 22.28 47.592 23.4C47.592 24.52 47.3307 25.5013 46.808 26.344C46.296 27.1867 45.5707 27.8427 44.632 28.312C43.704 28.7707 42.632 29 41.416 29H36.328V17.8ZM41.288 26.872C42.408 26.872 43.2987 26.5627 43.96 25.944C44.632 25.3147 44.968 24.4667 44.968 23.4C44.968 22.3333 44.632 21.4907 43.96 20.872C43.2987 20.2427 42.408 19.928 41.288 19.928H38.92V26.872H41.288ZM62.2188 26.92V29H53.5468V17.8H62.0108V19.88H56.1228V22.312H61.3228V24.328H56.1228V26.92H62.2188ZM78.5531 17.8V29H76.4251L70.8411 22.2V29H68.2811V17.8H70.4251L75.9931 24.6V17.8H78.5531Z" className="title" />
                                <path d="M6.824 36.456H5.032V35.4H9.912V36.456H8.12V41H6.824V36.456ZM12.2093 35.4H13.5053V41H12.2093V35.4ZM20.7703 39.96V41H16.4343V35.4H20.6663V36.44H17.7223V37.656H20.3223V38.664H17.7223V39.96H20.7703ZM28.5375 35.4V41H27.4735L24.6815 37.6V41H23.4015V35.4H24.4735L27.2575 38.8V35.4H28.5375ZM31.4624 35.4H34.0064C34.6144 35.4 35.1504 35.5173 35.6144 35.752C36.0838 35.9813 36.4464 36.3067 36.7024 36.728C36.9638 37.1493 37.0944 37.64 37.0944 38.2C37.0944 38.76 36.9638 39.2507 36.7024 39.672C36.4464 40.0933 36.0838 40.4213 35.6144 40.656C35.1504 40.8853 34.6144 41 34.0064 41H31.4624V35.4ZM33.9424 39.936C34.5024 39.936 34.9478 39.7813 35.2784 39.472C35.6144 39.1573 35.7824 38.7333 35.7824 38.2C35.7824 37.6667 35.6144 37.2453 35.2784 36.936C34.9478 36.6213 34.5024 36.464 33.9424 36.464H32.7584V39.936H33.9424ZM43.2817 39.8H40.6817L40.1857 41H38.8577L41.3537 35.4H42.6337L45.1377 41H43.7777L43.2817 39.8ZM42.8737 38.816L41.9857 36.672L41.0977 38.816H42.8737Z" className="text" />
                            </svg>
                        </a>
                    </Link>
                    <div className={styles["main-nav__search"]}>
                        <input
                            type="search"
                            id="search"
                            placeholder="Buscar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && search.length > 0) {
                                    router.push(`/search/${search}`);
                                }
                            }}
                        />
                        <MenuIcon
                            className={styles["main-menu-toggle"]}
                            onClick={handleOpenMenu}
                        />
                    </div>
                    <div className={styles["main-nav__menu"]}>
                        <ul className={styles["main-nav__list"]}>
                            <li className={styles["main-nav__item"]}>
                                <Link href="/">
                                    <a className={styles["main-nav__link home-icon"]}>
                                        <svg
                                            className={styles["main-nav__link-icon"]}
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071C21.3166 13.0976 20.6834 13.0976 20.2929 12.7071L20 12.4142V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12.4142L3.70711 12.7071C3.31658 13.0976 2.68342 13.0976 2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L11.2929 2.29289ZM6 10.4142V20H9V16C9 14.8954 9.89543 14 11 14H13C14.1046 14 15 14.8954 15 16V20H18V10.4142L12 4.41421L6 10.4142ZM13 20V16H11V20H13Z" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["main-nav__item"]}>
                                <a href="/saved" className="main-nav__link bottom-icon">
                                    <svg
                                        className={styles["main-nav__link-icon"]}
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0252 7.0251C14.0251 7.02511 14.0251 7.02512 14.0251 7.02513L12.7072 8.34317C12.5197 8.53072 12.2653 8.63609 12.0001 8.63609C11.7348 8.6361 11.4805 8.53074 11.2929 8.3432L9.97487 7.02513C8.60804 5.65829 6.39196 5.65829 5.02513 7.02513C3.65829 8.39196 3.65829 10.608 5.02513 11.9749L12 18.9498L18.9749 11.9749L19.682 12.682L18.9749 11.9749C20.3417 10.608 20.3417 8.39196 18.9749 7.02513C17.608 5.6583 15.392 5.65829 14.0252 7.0251ZM12.6109 5.61091C14.7588 3.46303 18.2412 3.46303 20.3891 5.61091C22.537 7.7588 22.537 11.2412 20.3891 13.3891L12.7072 21.0711C12.5196 21.2587 12.2653 21.364 12.0001 21.364C11.7348 21.364 11.4805 21.2587 11.2929 21.0711L3.61091 13.3891C1.46303 11.2412 1.46303 7.7588 3.61091 5.61091C5.7588 3.46303 9.2412 3.46303 11.3891 5.61091L12 6.22185L12.6109 5.61094L12.6109 5.61091Z" />
                                    </svg>
                                </a>
                            </li>
                            <li className={styles["main-nav__item"]}>
                                <Link href="/cart">
                                    <a className={`${styles["main-nav__link"]} ${styles["bottom-icon"]}`}>
                                        <svg
                                            className={styles["main-nav__link-icon"]}
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H5C5.47668 2 5.8871 2.33646 5.98058 2.80388L6.2198 4H21C21.3466 4 21.6684 4.17945 21.8507 4.47427C22.0329 4.76909 22.0494 5.13723 21.8944 5.44721L17.8944 13.4472C17.725 13.786 17.3788 14 17 14H7.41421L5.41421 16L17 16C18.6569 16 20 17.3431 20 19C20 20.6569 18.6569 22 17 22C15.3431 22 14 20.6569 14 19C14 18.6494 14.0602 18.3128 14.1707 18H9.82929C9.93985 18.3128 10 18.6494 10 19C10 20.6569 8.65685 22 7 22C5.34315 22 4 20.6569 4 19C4 18.5239 4.11092 18.0737 4.30832 17.6738C3.3292 17.0233 3.04054 15.5452 4 14.5858L5.91446 12.6713L4.1802 4H3C2.44772 4 2 3.55228 2 3ZM7.8198 12H16.382L19.382 6H6.6198L7.8198 12ZM7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20C7.55228 20 8 19.5523 8 19C8 18.4477 7.55228 18 7 18ZM17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18Z" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["main-nav__item"]}>
                                <Link href="/notifications">
                                    <a className="main-nav__link notification-icon">
                                        <svg
                                            className={styles["main-nav__link-icon"]}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            width="22px"
                                            height="22px"
                                        >
                                            <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["main-nav__item"]}>
                                <Link href="/account">
                                    <a className="main-nav__link bottom-icon">
                                        <svg
                                            className={styles["main-nav__link-icon"]}
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM6.08296 20H17.917C17.441 17.1623 14.973 15 12 15C9.027 15 6.55904 17.1623 6.08296 20ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21Z" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={styles["secondary-nav-container"]}>
                <div className={!isOpen ? styles["secondary-nav"] : styles["show-bg-secondary-nav__menu"]} onClick={handleCloseMenu}>
                    <nav className={!isOpen ? styles["secondary-nav__menu"] : styles["show-secondary-nav__menu"]} id="secondary-nav">
                        <ul className={styles["secondary-nav__list"]}>
                            {user ? (
                                <li className={styles["secondary-nav__item-profile"]}>
                                    <Link href="/account">
                                        <a className={styles["secondary-nav__link-profile"]}>
                                            <div className={styles["link-profile__user-image"]}>
                                                <img src={user.image} alt="Foto de perfil" />
                                            </div>
                                            <div className={styles["link-profile__user-info"]}>
                                                <span className={styles["profile__user-name"]}>
                                                    {user.name}
                                                </span>
                                                <span className={styles["profile__user-link"]}>
                                                    Ver perfil
                                                </span>
                                            </div>
                                            <div className={styles["link-profile__arrow"]}>
                                                <ChevronRightIcon height={40} width={40} />
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ) : (
                                <li className={styles["secondary-nav__item-profile"]}>
                                    <Link href="/auth/login">
                                        <a className={styles["secondary-nav__link-profile"]}>
                                            <div className={styles["link-profile__user-info"]}>
                                                <span className={styles["profile__user-name"]}>
                                                    Iniciar sesión
                                                </span>
                                            </div>
                                            <div className={styles["link-profile__arrow"]}>
                                                <ChevronRightIcon height={40} width={40} />
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            )}
                            <li className={styles["secondary-nav__item"]}>
                                <Link href="/categories">
                                    <a className={styles["secondary-nav__link"]}>
                                        Categorías
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["secondary-nav__item"]}>
                                <Link href="/offers">
                                    <a className={styles["secondary-nav__link"]}>
                                        Ofertas
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["secondary-nav__item"]}>
                                <Link href="/kisin/about">
                                    <a className={styles["secondary-nav__link"]}>
                                        Conócenos
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["secondary-nav__item"]}>
                                <Link href="/kisin/services">
                                    <a className={styles["secondary-nav__link"]}>
                                        Servicios
                                    </a>
                                </Link>
                            </li>
                            <li className={styles["secondary-nav__item"]}>
                                <Link href="/history">
                                    <a className={styles["secondary-nav__link"]}>
                                        Historial
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
