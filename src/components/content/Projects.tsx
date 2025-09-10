import React from 'react'
import {useTranslations} from "next-intl";

const Projects = () => {
    const t = useTranslations("projects");

    return (
        <section className="mt-8">

            <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>

            <div className="border-2 rounded-xl w-full max-w-3xl p-4 sm:p-6">

            </div>
        </section>
    )
}
export default Projects
