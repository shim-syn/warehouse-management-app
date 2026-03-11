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
  const averageQuantity = totalUnits / data.length
  const lowStockThreshold = averageQuantity * 0.5 // 50% below average

  // Color bars based on stock level
  const getBarColor = (quantity: number) => {
    if (quantity < lowStockThreshold) {
      return "hsl(var(--destructive))" // Red for low stock
    }
    if (quantity < averageQuantity) {
      return "hsl(var(--warning))" // Orange/yellow for below average
    }
    return "hsl(var(--primary))" // Primary color for good stock
  }

  const lowStockCategories = data.filter(item => item.quantity < lowStockThreshold).length
  const belowAverageCategories = data.filter(
    item => item.quantity >= lowStockThreshold && item.quantity < averageQuantity
  ).length

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Inventory by Category</CardTitle>
        <CardDescription>
          Total of {totalUnits.toLocaleString()} units across {data.length} categories
          {lowStockCategories > 0 && (
            <> • <span className="text-destructive font-medium">{lowStockCategories} low stock</span></>
          )}
          {belowAverageCategories > 0 && (
            <> • <span className="text-warning font-medium">{belowAverageCategories} below average</span></>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
              tick={{ fontSize: 11 }}
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
              radius={[8, 8, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.quantity)} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
