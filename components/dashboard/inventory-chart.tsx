"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"
import type { InventoryCategoryData } from "@/lib/types/dashboard"

interface InventoryChartProps {
  data: InventoryCategoryData[]
  loading?: boolean
  className?: string
}

const chartConfig = {
  quantity: {
    label: "Units in Stock",
  },
  herbicides: {
    label: "Herbicides",
    color: "hsl(var(--chart-1))",
  },
  fungicides: {
    label: "Fungicides",
    color: "hsl(var(--chart-2))",
  },
  adjuvants: {
    label: "Adjuvants",
    color: "hsl(var(--chart-3))",
  },
  growthRegulators: {
    label: "Growth Regulators",
    color: "hsl(var(--chart-4))",
  },
  bundles: {
    label: "Bundles",
    color: "hsl(var(--chart-5))",
  },
  insecticides: {
    label: "Insecticides",
    color: "hsl(280, 65%, 55%)",
  },
  seedTreatments: {
    label: "Seed Treatments",
    color: "hsl(180, 60%, 50%)",
  },
  nutrients: {
    label: "Nutrients",
    color: "hsl(45, 85%, 55%)",
  },
} satisfies ChartConfig

export function InventoryChart({ data, loading = false, className }: InventoryChartProps) {
  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    )
  }

  const totalUnits = data.reduce((sum, item) => sum + item.quantity, 0)

  // Vibrant color palette for each category
  const categoryColors: Record<string, string> = {
    "Herbicides": "hsl(var(--chart-1))",
    "Fungicides": "hsl(var(--chart-2))",
    "Adjuvants": "hsl(var(--chart-3))",
    "Growth Regulators": "hsl(var(--chart-4))",
    "Bundles": "hsl(var(--chart-5))",
    "Insecticides": "hsl(280, 65%, 55%)",
    "Seed Treatments": "hsl(180, 60%, 50%)",
    "Nutrients": "hsl(45, 85%, 55%)",
  }

  const getBarColor = (category: string) => {
    return categoryColors[category] || "hsl(var(--primary))"
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Inventory by Category</CardTitle>
        <CardDescription className="text-xs">
          Total of {totalUnits.toLocaleString()} units across {data.length} categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 65 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={65}
              interval={0}
              tick={{ fontSize: 10 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              cursor={{ fill: "hsl(var(--muted))" }}
              content={<ChartTooltipContent />}
            />
            <Bar
              dataKey="quantity"
              radius={[6, 6, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.category)} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
