export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export type ActivityType = 'product_added' | 'order_shipped' | 'stock_updated' | 'low_stock_alert'

export interface Product {
  id: string
  name: string
  sku: string
  quantity: number
  reorderThreshold: number
  unitPrice: number
  category: string
  lastUpdated: Date
}

export interface Order {
  id: string
  orderNumber: string
  status: OrderStatus
  items: Array<{
    productId: string
    productName: string
    quantity: number
    price: number
  }>
  totalValue: number
  createdAt: Date
  estimatedDelivery: Date
}

export interface Activity {
  id: string
  type: ActivityType
  title: string
  description: string
  timestamp: Date
  metadata?: Record<string, unknown>
}

export interface DashboardKPIs {
  totalProducts: number
  lowStockCount: number
  pendingOrders: number
  warehouseValue: number
}

export interface OrderStatusData {
  status: OrderStatus
  count: number
  fill: string
}

export interface InventoryCategoryData {
  category: string
  quantity: number
}
