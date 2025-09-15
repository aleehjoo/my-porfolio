import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../../i18n/routing';
import "./styles.css";
import {setRequestLocale} from "next-intl/server";
import ContactPill from "@/components/ui/ContactPill";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const {locale} = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = (await import(`../../../messages/${locale}.json`)).default;

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
            <ContactPill />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
