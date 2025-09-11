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
};

const projects = [
    {
        title: "Travel Agency Dashboard",
        description: "A responsive dashboard for managing travel bookings.",
        image: "/project1.png",
        alt: "Travel Agency Dashboard",
        link: "https://travel-agency-three-sigma.vercel.app/",
        tech: ["React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Thrift Shop",
        description: "E-commerce platform for secondhand clothing.",
        image: "/project2.png",
        alt: "Thrift Shop",
        link: "https://thrift-shop-lilac.vercel.app/",
        tech: ["React", "Node.js", "MongoDB"],
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
                        key={project.title}
                        className="relative w-full overflow-hidden rounded-2xl border shadow-lg group"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Thumbnail as background */}
                        <div className="relative h-128 w-full">
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="h-full w-full object-cover"
                            />
                            {/* Gradient fog overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        </div>

                        {/* Content (flex column, pinned at bottom) */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                            <div
                                className="flex flex-col gap-3 transform transition-transform duration-300 group-hover:-translate-y-4"
                            >
                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white drop-shadow">
                                    {project.title}
                                </h3>

                                {/* Tech stack pills */}
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

                                {/* Description */}
                                <p className="text-sm text-white/90">{project.description}</p>

                                {/* Button (appears & pushes content up) */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-md
                             opacity-0 translate-y-4 transition-all duration-300 ease-in-out
                             group-hover:opacity-100 group-hover:translate-y-0"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
