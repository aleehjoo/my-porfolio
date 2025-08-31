import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
// import { Link } from '../../../i18n/navigation'; will be used later
import LocaleSwitcher from "@/components/LocaleSwitcher";
import InfoCard from '@/components/content/InfoCard';

const Page = () => {

    return (
        <div className="flex flex-col gap-16 items-center justify-center">
            <AnimatedThemeToggler />
            <LocaleSwitcher />
            <InfoCard />
        </div>
    )
}
export default Page
