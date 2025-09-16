"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useTranslations} from "next-intl";

const ContactForm = () => {
    const t = useTranslations("contactform");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);

            const response = await fetch("https://formspree.io/f/mdklvznl", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section className="w-full max-w-2xl mx-auto mt-12 p-6 border rounded-xl shadow-lg ">
            <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        {t('name')}
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        {t('email')}
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        {t('message')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="self-start rounded-lg bg-primary px-5 py-2 text-primary-foreground font-medium shadow-md transition-transform duration-200 hover:scale-105 disabled:opacity-50"
                >
                    {status === "submitting" ? `${t('sending')}` : `${t('submit')}`}
                </button>

                {status === "error" && (
                    <p className="text-red-600 text-sm mt-2">{t('error-message')}</p>
                )}
            </form>

            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm"
                        >
                            <h3 className="text-xl font-bold mb-2 text-foreground dark:text-primary-foreground">{t('sent')}</h3>
                            <p className="text-gray-600 mb-4">
                                {t('thank-you')}
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium shadow-md hover:scale-105 transition-transform"
                            >
                                {t('close')}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactForm;
