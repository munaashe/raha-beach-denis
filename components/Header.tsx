'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';



const Header: React.FC = () => {
    const t = useTranslations('header');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { locale } = useParams();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const changeLanguage = (lang: string) => {
        // Implement your language change logic here
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/">
                    Logo
                </Link>
                <nav className="hidden md:block">
                    <ul className="space-x-4">
                        <li className="inline-block">
                            <Link href="/"
                                className={`${pathname === '/' ? 'text-yellow-500' : 'text-white'
                                    } hover:text-yellow-500`}
                            >
                                {t('page1')}
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link href={`/${locale}/add-book`}
                                className={`${pathname === `${locale}/add-book`
                                    ? 'text-yellow-500'
                                    : 'text-white'
                                    } hover:text-yellow-500`}
                            >
                                {t('page2')}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.646 5.646a.5.5 0 0 1 .708 0L10 10.293l5.646-5.647a.5.5 0 0 1 .708.708L10.707 11l5.647 5.646a.5.5 0 0 1-.708.708L10 11.707l-5.646 5.647a.5.5 0 0 1-.708-.708L9.293 11 3.646 5.354a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 9a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 py-2">
                    <ul className="px-4 space-y-2">
                        <li>
                            <Link href="/"
                                className={`${pathname === '/' ? 'text-yellow-500' : 'text-white'
                                    } hover:text-yellow-500`}
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={`${locale}/add-book`}
                                className={`${pathname === `${locale}/add-book`
                                    ? 'text-yellow-500'
                                    : 'text-white'
                                    } hover:text-yellow-500`}
                                onClick={closeMenu}
                            >
                                Add Book
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;


