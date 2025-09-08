"use client";

import { useState } from "react";
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

const techData = [
    { key: "javascript", icon: JavaScriptIcon, color: "#F7DF1E" },
    { key: "typescript", icon: TypeScriptIcon, color: "#3178C6" },
    { key: "react", icon: ReactIcon, color: "#61DAFB" },
    { key: "nextjs", icon: NextJSIcon, color: "#000000" },
    { key: "nodejs", icon: NodeJSIcon, color: "#83CD29" },
    { key: "expressjs", icon: ExpressJSIcon, color: "#000000" },
    { key: "tailwind", icon: TailwindIcon, color: "#38BDF8" },
    { key: "mongodb", icon: MongoDBIcon, color: "#47A248" },
    { key: "firebase", icon: FirebaseIcon, color: "#FFCA28" },
    { key: "supabase", icon: SupabaseIcon, color: "#3ECF8E" },
    { key: "git", icon: GitIcon, color: "#F05032" },
];

export default function TechStack() {
    const t = useTranslations("techstack");
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {techData.map((tech) => {
                    const Icon = tech.icon;
                    const isHovered = hovered === tech.key;

                    const glowColor =
                        tech.color.toLowerCase() === "#000000" ? "rgba(255,255,255,0.9)" : tech.color;

                    return (
                        <div
                            key={tech.key}
                            className="
                            group flex flex-col items-start gap-2 p-4 rounded-xl border
                            bg-muted/70 hover:bg-muted transition hover:shadow-md
                          "
                            onMouseEnter={() => setHovered(tech.key)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="flex flex-row gap-2 items-center">
                                <Icon
                                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
                                    style={{
                                        filter: isHovered
                                            ? `drop-shadow(0 0 8px ${glowColor}) drop-shadow(0 0 14px ${glowColor})`
                                            : "grayscale(1) opacity(0.85)",
                                    }}
                                />
                                <h3 className="text-lg font-semibold">
                                    {t(`${tech.key}.name`)}
                                </h3>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                {t(`${tech.key}.description`)}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
