import InfoCard from '@/components/content/InfoCard';
import Header from "@/components/Header";
import TechStack from "@/components/content/TechStack";
import Projects from "@/components/content/Projects";
import Footer from "@/components/Footer";
import ContactForm from "@/components/content/ContactForm";

const Page = () => {
    return (
        <div className="flex flex-col gap-6 px-4">
            <Header />

            <div className="w-full max-w-3xl mx-auto">
                <InfoCard />
            </div>

            <div className="w-full max-w-3xl mx-auto">
                <TechStack />
            </div>

            <div className="w-full max-w-3xl mx-auto">
                <Projects />
            </div>

            <div className="w-full max-w-3xl mx-auto">
                <ContactForm />
            </div>

            <Footer />
        </div>
    );
};

export default Page
