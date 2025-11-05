import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { CodeXml, Github, Home, User } from 'lucide-react';



const Header = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 
                flex items-center justify-center gap-5 
                shadow-2xl my-5 rounded-lg py-3 
                border border-gray-200 
                w-full sm:w-3/4 md:w-2/3 lg:w-1/2 fixed sm:left-96  ">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <CodeXml className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <User className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
}

export default Header