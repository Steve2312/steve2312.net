import { useTranslation } from "react-i18next";


export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t flex justify-between p-10">
            <span className="flex-1 text-black text-sm tracking-wider">{t("all-rights-reserved", { name: "Stefan So"})}</span>
            <span className="flex-1 text-black text-right text-sm tracking-wider">2023 - 2024</span>
        </footer>
    )
}