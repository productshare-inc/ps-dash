"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '../../shadcn/breadcrumb'

export const BreadcrumbsHeader = () => {
    const pathname = usePathname()
    const paths = pathname === "/" ? [""]: pathname?.split("/")
    const router = useRouter()
    const getFullPath = (index: number) => {
        return paths.slice(0, index + 1).join("/");
      };
    return (
        <div className="flex items-center flex-start">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <div role="button" className='capitalize cursor-pointer hover:dark:text-white hover:text-black' onClick={() => router.push("/")}>
                            Home
                        </div>
                    </BreadcrumbItem>
                    {paths.map((path, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <div role="button" className='capitalize cursor-pointer hover:dark:text-white hover:text-black' onClick={() => router.push(getFullPath(index))}>
                                    {path}
                                </div>
                            </BreadcrumbItem>
                            {index < paths.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
