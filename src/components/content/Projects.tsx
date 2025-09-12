"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    JavaScriptIcon,
    TypeScriptIcon,
    ReactIcon,
    NextJSIcon,
    NodeJSIcon,
    ExpressJSIcon,
    TailwindIcon,
    MongoDBIcon,
    FirebaseIcon,
    SupabaseIcon,
    GitIcon,
    ReactRouterIcon,
} from "@/icons";

const techMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    JavaScript: JavaScriptIcon,
    TypeScript: TypeScriptIcon,
    React: ReactIcon,
    "Next.js": NextJSIcon,
    "Node.js": NodeJSIcon,
    "Express.js": ExpressJSIcon,
    "Tailwind CSS": TailwindIcon,
    MongoDB: MongoDBIcon,
    Firebase: FirebaseIcon,
    Supabase: SupabaseIcon,
    Git: GitIcon,
    "React Router": ReactRouterIcon,
};

const projects = [
    {
        key: "project1",
        image: "/project1.png",
        link: "https://travel-agency-three-sigma.vercel.app/",
        tech: ["React", "React Router", "Tailwind CSS"],
    },
    {
        key: "project2",
        image: "/project2.png",
        link: "https://thrift-shop-lilac.vercel.app/",
        tech: ["React", "Tailwind CSS"],
    },
];

const Projects = () => {
    const t = useTranslations("projects");

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>

            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.key}
                        className="relative w-full overflow-hidden rounded-2xl border shadow-lg group"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="relative h-128 w-full">
                            <img
                                src={project.image}
                                alt={t(`${project.key}.alt`)}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6 pb-8">
                            <div
                                className="flex flex-col gap-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-6"
                            >
                                <h3 className="text-xl font-semibold text-white drop-shadow">
                                    {t(`${project.key}.title`)}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => {
                                        const Icon = techMap[tech];
                                        return (
                                            <span
                                                key={tech}
                                                className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
                                            >
                        <Icon className="w-4 h-4" />
                                                {tech}
                      </span>
                                        );
                                    })}
                                </div>

                                <p className="text-sm text-white/90">
                                    {t(`${project.key}.description`)}
                                </p>

                                <div className="h-0 overflow-visible mb-2">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-md
                        opacity-0 translate-y-4 transition-all duration-500 ease-in-out
                        group-hover:opacity-100 group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 "
                                    >
                                        <span>{t("button")}</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
