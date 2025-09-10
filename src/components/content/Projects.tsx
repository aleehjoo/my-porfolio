"use client"

import {useTranslations} from "next-intl";

const projects = [
    {
        title: "Travel Agency Dashboard",
        description: "Description of project 1",
        image: "/project1.png",
        alt: "Travel Agency Dashboard",
        link: "https://travel-agency-three-sigma.vercel.app/",
    },
    {
        title: "Thrift Shop",
        description: "Description of project 1",
        image: "/project2.png",
        alt: "Thrift Shop",
        link: "https://thrift-shop-lilac.vercel.app/",
    },
]

const Projects = () => {
    const t = useTranslations("projects");

    return (
        <section className="mt-8 border-2 rounded-xl w-full max-w-3xl p-4 sm:p-6">

            <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>

            <div className="flex flex-col gap-4">
                <div>
                    { projects.map((project) => (
                        <div key={project.title} className="flex flex-col gap-2">
                            {/*adding some stuffs here later :33*/}
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects
