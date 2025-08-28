import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('home');

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('content')}</p>
            <p>{t('content2')}</p>
        </div>
    )
}
export default Page
