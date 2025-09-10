// import { Link } from '../../../i18n/navigation'; will be used later
import InfoCard from '@/components/content/InfoCard';
import Header from "@/components/Header";
import TechStack from "@/components/content/TechStack";
import Projects from "@/components/content/Projects";

const Page = () => {

    return (
        <div className="flex flex-col gap-16 items-center justify-center px-4">
            <Header />
            <div>
                <InfoCard />
                <TechStack />
                <Projects />
            </div>
        </div>
    )
}
export default Page
