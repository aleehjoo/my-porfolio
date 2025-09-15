import { useTranslations } from "next-intl";
import {Github, Instagram, Mail, MapPin} from "lucide-react";
import Image from "next/image";

const InfoCard = () => {
    const t = useTranslations("infocard");

    return (
        <section
            className="
                the-shizzle border-2 rounded-xl
                w-full max-w-3xl
                p-4 sm:p-6
            "
        >
            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
                {/* Left side: avatar + name/location */}
                <div className="flex gap-4 items-center flex-shrink-0">
                    <div className="relative w-[75px] h-[75px] rounded-full overflow-hidden flex-shrink-0 group transition-transform duration-300 hover:rotate-6">
                        <div className="relative w-full h-full">
                            <Image
                                src="/headshot.jpg"
                                alt="profile"
                                fill
                                className="object-cover rounded-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                            />
                            <Image
                                src="/hoverHeadshot.jpg"
                                alt="hover profile"
                                fill
                                className="object-cover rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                            {t("name")}
                        </h3>
                        <div className="flex flex-row gap-1 mt-1 items-center">
                            <MapPin
                                strokeWidth={1.5}
                                size={20}
                                className="text-muted-foreground transition-transform duration-200 hover:scale-125 hover:text-red-500"
                            />
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                                {t("location")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side: icons */}
                <div className="flex flex-row gap-2 flex-shrink-0">
                    <a
                        href="mailto:alejandroumila2@gmail.com"
                        className="p-2 rounded-md hover:text-red-500 transition-transform duration-300 hover:scale-125"
                    >
                        <Mail size={22} />
                    </a>
                    {/*<a*/}
                    {/*    href="https://github.com/aleehjoo"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*    className="p-2 rounded-md hover:text-gray-900 transition-transform duration-300 hover:scale-125"*/}
                    {/*>*/}
                    {/*    <Github size={22} />*/}
                    {/*</a>*/}
                    <a
                        href="https://www.instagram.com/aleehjoo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:text-pink-500 transition-transform duration-300 hover:scale-125"
                    >
                        <Instagram size={22} />
                    </a>
                </div>
            </div>



            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
                {t("description")}
            </p>
        </section>
    );
};

export default InfoCard;
