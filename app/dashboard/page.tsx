import type { Metadata } from "next"
import {
  Package01Icon,
  Alert01Icon,
  Clock01Icon,
  Dollar01Icon,
} from "@hugeicons/core-free-icons"

import { KPICard } from "@/components/dashboard/kpi-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { OrderChart } from "@/components/dashboard/order-chart"
import {
  getDashboardKPIs,
  getMockActivities,
  getOrderStatusData,
} from "@/lib/mock-data/dashboard"

export const metadata: Metadata = {
  title: "Dashboard - Syngenta Warehouse Management",
  description: "Real-time warehouse management dashboard with inventory tracking, order status overview, and activity monitoring for Syngenta operations.",
  openGraph: {
    title: "Dashboard - Syngenta Warehouse Management",
    description: "Real-time warehouse management dashboard with inventory tracking, order status overview, and activity monitoring for Syngenta operations.",
    type: "website",
    images: [
      {
        url: "/og/dashboard-og.png",
        width: 1280,
        height: 720,
        alt: "Syngenta Warehouse Management Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard - Syngenta Warehouse Management",
    description: "Real-time warehouse management dashboard with inventory tracking, order status overview, and activity monitoring.",
    images: ["/og/dashboard-og.png"],
  },
}

export default function DashboardPage() {
  const kpis = getDashboardKPIs()
  const activities = getMockActivities()
  const orderStatusData = getOrderStatusData()

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your warehouse management dashboard
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <KPICard
          title="Total Products"
          value={kpis.totalProducts}
          icon={Package01Icon}
          change={{ value: 12, type: "increase" }}
        />
        <KPICard
          title="Low Stock Items"
          value={kpis.lowStockCount}
          icon={Alert01Icon}
          change={{ value: 5, type: "decrease" }}
        />
        <KPICard
          title="Pending Orders"
          value={kpis.pendingOrders}
          icon={Clock01Icon}
          change={{ value: 8, type: "increase" }}
        />
        <KPICard
          title="Warehouse Value"
          value={`$${(kpis.warehouseValue / 1000).toFixed(1)}K`}
          icon={Dollar01Icon}
          change={{ value: 15, type: "increase" }}
        />
      </div>

      {/* Content Grid - Chart and Activity Feed */}
      <div className="grid gap-6 xl:grid-cols-2">
        <OrderChart data={orderStatusData} />
        <ActivityFeed activities={activities} maxItems={8} />
      </div>
    </div>
  )
}
