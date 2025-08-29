import { useTranslations } from 'next-intl';
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";



const Page = () => {
    const t = useTranslations('home');

    return (
        <div className="flex flex-row justify-between items-center">
            <h1 suppressHydrationWarning className="text-xl font-thin">{t('title')}</h1>
            <AnimatedThemeToggler />
        </div>
    )
}
export default Page
