"use client";

import {useTranslations} from "next-intl";

const Footer = () => {
    const t = useTranslations("footer");
    return (
        <footer className="mt-16 w-full max-w-3xl mx-auto" >
            <div className="border-t border-gray-700" />

            <div className="flex flex-col items-center justify-center gap-2 py-6 text-sm ">
                <p className="text-center">{t('text1')}</p>
                <p className="text-center">{t('text2')}</p>
            </div>
        </footer>
    );
};

export default Footer;
