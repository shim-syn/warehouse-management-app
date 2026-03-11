import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: "increase" | "decrease"
  }
  icon: IconSvgElement
  loading?: boolean
  className?: string
}

export function KPICard({
  title,
  value,
  change,
  icon: Icon,
  loading = false,
  className,
}: KPICardProps) {
  if (loading) {
    return (
      <Card className={className}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1.5 flex-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="size-9 rounded-lg" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <div className="flex items-center gap-1 text-xs">
                {change.type === "increase" ? (
                  <>
                    <HugeiconsIcon
                      icon={ArrowUp01Icon}
                      className="size-3.5 text-secondary"
                      strokeWidth={2}
                    />
                    <span className="font-medium text-secondary">
                      +{change.value}%
                    </span>
                  </>
                ) : (
                  <>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      className="size-3.5 text-destructive"
                      strokeWidth={2}
                    />
                    <span className="font-medium text-destructive">
                      -{change.value}%
                    </span>
                  </>
                )}
                <span className="text-muted-foreground">vs last month</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
            <HugeiconsIcon icon={Icon} className="size-4.5 text-primary" strokeWidth={2} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
