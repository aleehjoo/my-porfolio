import {useTranslations} from "next-intl";

const InfoCard = () => {
    const t = useTranslations("home");

    return (
        <div
            className="the-shizzle rounded-xl border-2
                 max-w-[800px] w-full
                 mx-4 sm:mx-6 md:mx-auto
                 p-4 sm:p-6"
        >
            <img className="hidden" alt="" />
            <p className="text-2xl sm:text-3xl font-bold">{t("title")}</p>
            <p className="text-base sm:text-lg mt-2">{t("content")}</p>
        </div>
    );
};

export default InfoCard;
