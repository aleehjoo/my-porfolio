import { useTranslations } from 'next-intl';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
// import { Link } from '../../../i18n/navigation'; will be used later
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import InfoCard from '@/components/content/InfoCard';

const Page = ({params}: { params: Promise<{locale: string}> }) => {

    const { locale } = use(params);

    setRequestLocale(locale);

    const t = useTranslations('home');

    return (
        <div>
            <h1 className="text-xl font-thin">{t('title')}</h1>
            <InfoCard />
            <AnimatedThemeToggler />
            <LocaleSwitcher />
        </div>
    )
}
export default Page
