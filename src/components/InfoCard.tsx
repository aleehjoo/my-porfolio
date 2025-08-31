import {useTranslations} from "next-intl";

const InfoCard = () => {

    const t = useTranslations('home');

    return (
        <div>
            <p>{t('title')}</p>
        </div>
    )
}
export default InfoCard
