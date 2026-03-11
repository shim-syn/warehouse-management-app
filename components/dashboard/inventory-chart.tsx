"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
    color: "hsl(var(--primary))",
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

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Inventory by Category</CardTitle>
        <CardDescription>
          Total of {totalUnits.toLocaleString()} units across {data.length} categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={100}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar
              dataKey="quantity"
              fill="var(--color-quantity)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
