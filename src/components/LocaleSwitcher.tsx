'use client';

import { usePathname, useRouter } from '../../i18n/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("dropdown")

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    };

    return (
            <DropdownMenu>
                <DropdownMenuTrigger><Globe size={20.7} strokeWidth={1.5}/></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel><span>{t('select')}</span></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => switchLocale("en")}>EN</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => switchLocale("de")}>DE</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => switchLocale("tl")}>TL</DropdownMenuItem>
                    <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    );
}