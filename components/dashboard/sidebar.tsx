"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  Package01Icon,
  ShoppingBag01Icon,
  Analytics01Icon,
  Settings01Icon,
  Moon01Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home01Icon },
  { name: "Inventory", href: "/dashboard/inventory", icon: Package01Icon },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag01Icon },
  { name: "Reports", href: "/dashboard/reports", icon: Analytics01Icon },
  { name: "Settings", href: "/dashboard/settings", icon: Settings01Icon },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Syngenta</span>
            <span className="text-xs text-muted-foreground">Warehouse</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={item.href}>
                    <HugeiconsIcon icon={item.icon} className="size-4" strokeWidth={2} />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-xs text-muted-foreground">Theme</span>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <HugeiconsIcon
              icon={theme === "dark" ? Sun01Icon : Moon01Icon}
              className="size-4"
              strokeWidth={2}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
