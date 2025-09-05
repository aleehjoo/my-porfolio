import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import Image from "next/image";

const InfoCard = () => {
    const t = useTranslations("infocard");

    return (
        <div
            className="
        the-shizzle border-2 rounded-xl
        w-full max-w-2xl mx-4 sm:mx-6 md:mx-auto
        p-4 sm:p-6
      "
        >
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Image
                    src="/headshot.jpg"
                    alt="profile"
                    width={75}
                    height={75}
                    className="rounded-full flex-shrink-0"
                />

                <div className="flex flex-col">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                        {t("name")}
                    </p>
                    <div className="flex flex-row gap-1 mt-1 items-center">
                        <MapPin strokeWidth={1.5} size={20} className="text-gray-500" />
                        <p className="text-sm sm:text-base md:text-lg text-gray-500">
                            {t("location")}
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
                {t("description")}
            </p>
        </div>
    );
};

export default InfoCard;
