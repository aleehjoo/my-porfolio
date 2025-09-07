import React from 'react'
import {AnimatedThemeToggler} from "@/components/magicui/animated-theme-toggler";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Header = () => {

    return (
        <div className="flex flex-row gap-4 justify-end w-full mt-5 pr-8 sticky top-5">
            <AnimatedThemeToggler />
            <LocaleSwitcher />

        </div>
    )
}
export default Header
