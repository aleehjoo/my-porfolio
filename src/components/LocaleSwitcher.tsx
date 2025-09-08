'use client';

import { usePathname, useRouter } from '../../i18n/navigation';
import { useLocale } from 'next-intl';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    };

    return (
        <div>
        <select
            value={locale}
            className="dropdown-menu"
            onChange={e => switchLocale(e.target.value)}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="tl">TL</option>
        </select>

            <DropdownMenu>
                <DropdownMenuTrigger>Language</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>EN</DropdownMenuItem>
                    <DropdownMenuItem>DE</DropdownMenuItem>
                    <DropdownMenuItem>TL</DropdownMenuItem>
                    <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}