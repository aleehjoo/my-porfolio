import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'de', 'tl'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
});