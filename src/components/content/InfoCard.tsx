import {useTranslations} from "next-intl";

const InfoCard = () => {

    const t = useTranslations('home');

    return (
        <div className="the-shizzle h-55 w-200 rounded-xl border-2">
            <img/>
            <p className="mt-8 ml-8 text-3xl font-bold">{t('title')}</p>
            <p className="ml-8 text-xl color-test-text">{t('content')}</p>
        </div>
    )
}
export default InfoCard