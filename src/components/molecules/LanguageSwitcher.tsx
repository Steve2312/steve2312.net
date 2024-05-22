import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const [show, setShow] = useState(false);

    const getDelay = (index: number, ascending: boolean): string => {
        switch (index) {
            case 0:
                return ascending ? 'delay-[0ms]' : 'delay-[200ms]';
            case 1:
                return ascending ? 'delay-[50ms]' : 'delay-[150ms]';
            case 2:
                return ascending ? 'delay-[100ms]' : 'delay-[100ms]';
            case 3:
                return ascending ? 'delay-[150ms]' : 'delay-[50ms]';
            case 4:
                return ascending ? 'delay-[200ms]' : 'delay-[0ms]';
            default:
                return '';
        }
    };

    const getLanguageLabel = (language: string): string => {
        switch (language) {
            case 'en':
                return 'ENG';
            case 'jp':
                return '日本';
            case 'kr':
                return '한글';
            case 'zh':
                return '中文';
            default:
                return language.toUpperCase();
        }
    };

    return (
        <div className="relative">
            <button
                className="md:text-lg font-bold tracking-wider hover:underline underline-offset-4"
                onClick={() => setShow(!show)}
            >
                {getLanguageLabel(i18n.language)}
            </button>
            <ul className="absolute right-0 z-10">
                {i18n.languages
                    .filter((language) => language !== i18n.language)
                    .map((language, index) => (
                        <li
                            key={language}
                            className={`mt-6 transition-all ${getDelay(
                                index,
                                show
                            )} ${
                                show
                                    ? 'opacity-100'
                                    : 'opacity-0 translate-x-10 pointer-events-none'
                            }`}
                        >
                            <span
                                className={
                                    'text-gray-300 hover:text-gray-100 md:text-lg font-bold tracking-wider hover:underline underline-offset-4 whitespace-nowrap block text-right transition-colors'
                                }
                            >
                                <Link to={'/' + language} reloadDocument>
                                    {getLanguageLabel(language)}
                                </Link>
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
