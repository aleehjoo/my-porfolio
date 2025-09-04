import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
// import { Link } from '../../../i18n/navigation'; will be used later
import LocaleSwitcher from "@/components/LocaleSwitcher";
import InfoCard from '@/components/content/InfoCard';
import Header from "@/components/Header";
import TechStack from "@/components/content/TechStack";

const Page = () => {

    return (
        <div className="flex flex-col gap-16 items-center justify-center">
            <Header />
            <InfoCard />
            <TechStack />
        </div>
    )
}
export default Page
