import {useTranslations} from "next-intl";

const InfoCard = () => {

    const t = useTranslations('home');

    return (
        <div>
            <div className="the-shizzle border-2 h-75 w-200 ">
                <p>{t('title')}</p>
            </div>
        </div>
    )
}
export default InfoCard