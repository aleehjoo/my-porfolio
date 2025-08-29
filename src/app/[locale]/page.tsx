import { useTranslations } from 'next-intl';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { Link } from '../../../i18n/navigation';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import LocaleSwitcher from "@/app/[locale]/LocaleSwitcher";

const Page = ({params}: { params: Promise<{locale: string}>; }) => {

    const { locale } = use(params);

    setRequestLocale(locale);

    const t = useTranslations('home');

    return (
        <div className="flex flex-row gap-20 items-center justify-center">
            <h1 suppressHydrationWarning className="text-xl font-thin">{t('title')}</h1>
            <AnimatedThemeToggler />
            <Link href="/"></Link>

            <LocaleSwitcher />
        </div>
    )
}
export default Page
