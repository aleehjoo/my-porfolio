import {
    Braces,
    Code2,
    Globe,
    Server,
    Boxes,
    FileCode,
    Database,
    Cloud,
    GitBranch
} from "lucide-react";

const techData = [
    { name: "JavaScript", description: "Dynamic programming language for the web", icon: Braces },
    { name: "TypeScript", description: "Typed superset of JavaScript", icon: FileCode },
    { name: "React", description: "Library for building UIs", icon: Code2 },
    { name: "Next.js", description: "React framework for production apps", icon: Globe },
    { name: "Node.js", description: "JavaScript runtime for the backend", icon: Server },
    { name: "Express.js", description: "Minimalist web framework for Node.js", icon: Boxes },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: FileCode },
    { name: "MongoDB", description: "NoSQL document-oriented database", icon: Database },
    { name: "Firebase", description: "Google’s app development platform", icon: Cloud },
    { name: "Supabase", description: "Open-source Firebase alternative", icon: Cloud },
    { name: "Git", description: "Version control system", icon: GitBranch }
];

const TechStack = () => {
    return (
        <section className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Tech Stack</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {techData.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={tech.name}
                            className="flex flex-col items-start gap-2 p-4 rounded-xl border bg-background hover:shadow-md transition"
                        >
                            <Icon className="w-6 h-6 text-primary" />
                            <h3 className="text-lg font-semibold">{tech.name}</h3>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechStack;
