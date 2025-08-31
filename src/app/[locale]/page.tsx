import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import LocaleSwitcher from "@/app/[locale]/LocaleSwitcher";
import InfoCard from "@/components/InfoCard";

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
