// import { Link } from '../../../i18n/navigation'; will be used later
import InfoCard from '@/components/content/InfoCard';
import Header from "@/components/Header";
import TechStack from "@/components/content/TechStack";

const Page = () => {

    return (
        <div className="flex flex-col gap-16 items-center justify-center px-4">
            <Header />
            <div>
                <InfoCard />
                <TechStack />
            </div>
        </div>
    )
}
export default Page
