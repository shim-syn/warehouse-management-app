import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  DeliveryTruck01Icon,
  Refresh01Icon,
  Alert01Icon,
} from "@hugeicons/core-free-icons"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import type { Activity, ActivityType } from "@/lib/types/dashboard"

interface ActivityFeedProps {
  activities: Activity[]
  maxItems?: number
  loading?: boolean
  className?: string
}

const activityConfig: Record<
  ActivityType,
  {
    icon: IconSvgElement
    badgeVariant: "default" | "secondary" | "outline" | "destructive"
    color: string
  }
> = {
  product_added: {
    icon: CheckmarkCircle01Icon,
    badgeVariant: "default",
    color: "text-primary",
  },
  order_shipped: {
    icon: DeliveryTruck01Icon,
    badgeVariant: "secondary",
    color: "text-secondary",
  },
  stock_updated: {
    icon: Refresh01Icon,
    badgeVariant: "outline",
    color: "text-accent",
  },
  low_stock_alert: {
    icon: Alert01Icon,
    badgeVariant: "destructive",
    color: "text-destructive",
  },
}

function ActivitySkeleton() {
  return (
    <div className="flex gap-3 p-3">
      <Skeleton className="size-8 rounded-full shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  )
}

export function ActivityFeed({
  activities,
  maxItems = 10,
  loading = false,
  className,
}: ActivityFeedProps) {
  const displayActivities = activities.slice(0, maxItems)

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {loading ? (
          <div className="space-y-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <ActivitySkeleton key={i} />
            ))}
          </div>
        ) : displayActivities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-sm text-muted-foreground">No recent activity</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[400px]">
              <div className="space-y-1">
                {displayActivities.map((activity) => {
                  const config = activityConfig[activity.type]
                  const Icon = config.icon

                  return (
                    <div
                      key={activity.id}
                      className={cn(
                        "flex gap-3 p-3 transition-colors hover:bg-muted/50",
                        "border-b last:border-b-0"
                      )}
                    >
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full bg-muted",
                          config.color
                        )}
                      >
                        <HugeiconsIcon icon={Icon} className="size-4" strokeWidth={2} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium leading-none">
                            {activity.title}
                          </p>
                          <Badge variant={config.badgeVariant} className="shrink-0 text-xs">
                            {activity.type.replace(/_/g, " ")}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>
            <div className="border-t p-3">
              <Link
                href="/dashboard/activity"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all activity →
              </Link>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
