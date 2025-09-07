import { JavaScriptIcon, TypeScriptIcon, ReactIcon, NextJSIcon, NodeJSIcon, ExpressJSIcon, TailwindIcon, MongoDBIcon, FirebaseIcon, SupabaseIcon, GitIcon } from "@/icons";

const techData = [
    { name: "JavaScript", description: "Dynamic web language", icon: JavaScriptIcon },
    { name: "TypeScript", description: "JavaScript, but better", icon: TypeScriptIcon },
    { name: "React", description: "UI library", icon: ReactIcon },
    { name: "Next.js", description: "React on steroids", icon: NextJSIcon },
    { name: "Node.js", description: "Backend runtime", icon: NodeJSIcon },
    { name: "Express.js", description: "Web framework", icon: ExpressJSIcon },
    { name: "Tailwind CSS", description: "Styling made easy", icon: TailwindIcon },
    { name: "MongoDB", description: "NoSQL database", icon: MongoDBIcon },
    { name: "Firebase", description: "Google’s dev toolbox", icon: FirebaseIcon },
    { name: "Supabase", description: "Open-source Firebase", icon: SupabaseIcon },
    { name: "Git", description: "Version control", icon: GitIcon }
];


const TechStack = () => {

    return (
        <section className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6">My Tech Stack</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {techData.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={tech.name}
                            className="flex flex-col items-start gap-2 p-4 rounded-xl border bg-background hover:shadow-md transition"
                        >
                            <div className="flex flex-row gap-2">
                                <Icon className="w-6 h-6 text-primary" />
                                <h3 className="text-lg font-semibold">{tech.name}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechStack;
