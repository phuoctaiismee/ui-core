"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SiteLogo from "../logo";
import { Box, ChartScatter, Waves } from "lucide-react";

const navigationLinks = [
  {
    label: "Products",
    childs: [
      {
        icon: <Waves />,
        label: "LaunchPad",
        description: "Launching high-impact pages efforlessty",
        href: "/",
      },
      {
        icon: <ChartScatter />,
        label: "Orbits Analytics",
        description: "Powerfull insight for smarter decisions",
        href: "/components",
      },
      {
        icon: <Box />,
        label: "Nova Integrator",
        description: "Seamsless connections with your favorite tools",
        href: "/guide",
      },
    ],
  },
  {
    label: "Solution",
    href: "/solution",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const SiteNavigation = () => {
  const items = navigationLinks.map((item, index) => {
    const asChild = item.childs && item.childs.length > 0;
    if (asChild) {
      return (
        <NavigationMenuItem key={index}>
          <NavigationMenuTrigger className="bg-primary/0 hover:bg-primary/5 hover:data-[state=open]:bg-primary/5 data-[state=open]:bg-primary/5 data-[active]:bg-primary/5 focus:bg-primary/5">
            {item.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 w-[300px] gap-3 p-2">
              {item.childs.map((child, index) => (
                <li key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex gap-6 items-start rounded-md p-4 text-sm hover:bg-accent/10"
                      href={child.href}
                    >
                      <div className="flex items-center justify-center size-8 bg-primary/20 p-2 rounded-full text-primary ring-8 ring-primary/10 mb-4">
                        {child.icon}
                      </div>
                      <div>
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {child.label}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {child.description}
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
    return (
      <NavigationMenuItem key={index}>
        <Link href={item.href || ""} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "hover:bg-primary/5")}
          >
            {item.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>{items}</NavigationMenuList>
    </NavigationMenu>
  );
};

export default SiteNavigation;
