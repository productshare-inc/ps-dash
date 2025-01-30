'use client'
import { CompanyLogoNameProps } from "@repo/ts-types/home/v1";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";

export function CompanyLogoName({logo,darkLogo,name,quote}:CompanyLogoNameProps) {
    const {theme} = useTheme();

    useEffect(()=>{
  
    },[theme])

  return (
    <a href={'/'} className="flex gap-2 m-2">
        <div className="flex aspect-square size-8 items-center justify-center ">
            {theme === "dark" ?
                <Image src={darkLogo} alt='/next.svg' width={30} height={30} /> : 
                <Image src={logo} alt='/next.svg' width={30} height={30} />}
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{name}</span>
            <span className="truncate text-xs">{quote}</span>
        </div>
    </a>
  );
}