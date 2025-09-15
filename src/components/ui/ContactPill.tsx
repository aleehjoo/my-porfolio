"use client";

import { useEffect, useState } from "react";
import { Github, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

export default function ContactPill() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
                show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
        >
            <div
                className="flex items-center gap-3 rounded-full bg-[var(--foreground)] shadow-lg px-5 py-2 border"
                style={{ borderColor: "var(--border)" }}
            >
                {[
                    {
                        href: "https://github.com/aleehjoo",
                        icon: <Github size={22} />,
                        hoverColor: "#181717",
                    },
                    {
                        href: "mailto:alejandroumila2@gmail.com",
                        icon: <Mail size={22} />,
                        hoverColor: "#EA4335",
                    },
                    {
                        href: "https://www.instagram.com/aleehjoo/",
                        icon: <Instagram size={22} />,
                        hoverColor: "#E4405F",
                    },
                    {
                        href: "https://www.linkedin.com/in/alejandro-umila-a33756349/",
                        icon: <Linkedin size={22} />,
                        hoverColor: "#0077B5",
                    },
                    {
                        href: "https://www.facebook.com/alejandro.umila.5/",
                        icon: <Facebook size={22} />,
                        hoverColor: "#1877F2",
                    },
                ].map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-125"
                    >
            <span
                className="flex items-center justify-center text-[var(--background)] transition-colors duration-300"
                onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = item.hoverColor)
                }
                onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                        "var(--background)")
                }
            >
              {item.icon}
            </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
