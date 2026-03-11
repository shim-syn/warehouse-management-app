import type {
  Product,
  Order,
  Activity,
  DashboardKPIs,
  OrderStatusData,
  OrderStatus,
  InventoryCategoryData
} from '@/lib/types/dashboard'

// Mock Products
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Herbicide Concentrate',
    sku: 'SYN-HRB-001',
    quantity: 450,
    reorderThreshold: 100,
    unitPrice: 89.99,
    category: 'Herbicides',
    lastUpdated: new Date('2026-03-10')
  },
  {
    id: '2',
    name: 'Advanced Insecticide Solution',
    sku: 'SYN-INS-002',
    quantity: 75,
    reorderThreshold: 80,
    unitPrice: 124.50,
    category: 'Insecticides',
    lastUpdated: new Date('2026-03-09')
  },
  {
    id: '3',
    name: 'Organic Fungicide Treatment',
    sku: 'SYN-FUN-003',
    quantity: 320,
    reorderThreshold: 150,
    unitPrice: 67.25,
    category: 'Fungicides',
    lastUpdated: new Date('2026-03-11')
  },
  {
    id: '4',
    name: 'Soil Nutrient Enhancer',
    sku: 'SYN-NUT-004',
    quantity: 42,
    reorderThreshold: 50,
    unitPrice: 45.00,
    category: 'Nutrients',
    lastUpdated: new Date('2026-03-08')
  },
  {
    id: '5',
    name: 'Growth Regulator Pro',
    sku: 'SYN-GRW-005',
    quantity: 180,
    reorderThreshold: 60,
    unitPrice: 156.75,
    category: 'Growth Regulators',
    lastUpdated: new Date('2026-03-10')
  },
  {
    id: '6',
    name: 'Seed Treatment Formula',
    sku: 'SYN-SED-006',
    quantity: 28,
    reorderThreshold: 40,
    unitPrice: 98.00,
    category: 'Seed Treatments',
    lastUpdated: new Date('2026-03-07')
  },
  {
    id: '7',
    name: 'Selective Weed Control',
    sku: 'SYN-HRB-007',
    quantity: 510,
    reorderThreshold: 120,
    unitPrice: 72.50,
    category: 'Herbicides',
    lastUpdated: new Date('2026-03-11')
  },
  {
    id: '8',
    name: 'Foliar Spray Adjuvant',
    sku: 'SYN-ADJ-008',
    quantity: 235,
    reorderThreshold: 80,
    unitPrice: 34.99,
    category: 'Adjuvants',
    lastUpdated: new Date('2026-03-09')
  },
  {
    id: '9',
    name: 'Systemic Pesticide',
    sku: 'SYN-INS-009',
    quantity: 15,
    reorderThreshold: 30,
    unitPrice: 189.00,
    category: 'Insecticides',
    lastUpdated: new Date('2026-03-06')
  },
  {
    id: '10',
    name: 'Crop Protection Bundle',
    sku: 'SYN-BUN-010',
    quantity: 165,
    reorderThreshold: 50,
    unitPrice: 245.00,
    category: 'Bundles',
    lastUpdated: new Date('2026-03-10')
  }
]

// Mock Orders
const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2026-001',
    status: 'pending',
    items: [
      { productId: '1', productName: 'Premium Herbicide Concentrate', quantity: 10, price: 89.99 },
      { productId: '3', productName: 'Organic Fungicide Treatment', quantity: 5, price: 67.25 }
    ],
    totalValue: 1236.15,
    createdAt: new Date('2026-03-11T08:30:00'),
    estimatedDelivery: new Date('2026-03-15')
  },
  {
    id: '2',
    orderNumber: 'ORD-2026-002',
    status: 'processing',
    items: [
      { productId: '5', productName: 'Growth Regulator Pro', quantity: 8, price: 156.75 }
    ],
    totalValue: 1254.00,
    createdAt: new Date('2026-03-10T14:20:00'),
    estimatedDelivery: new Date('2026-03-14')
  },
  {
    id: '3',
    orderNumber: 'ORD-2026-003',
    status: 'shipped',
    items: [
      { productId: '7', productName: 'Selective Weed Control', quantity: 15, price: 72.50 },
      { productId: '8', productName: 'Foliar Spray Adjuvant', quantity: 12, price: 34.99 }
    ],
    totalValue: 1507.38,
    createdAt: new Date('2026-03-09T10:15:00'),
    estimatedDelivery: new Date('2026-03-12')
  },
  {
    id: '4',
    orderNumber: 'ORD-2026-004',
    status: 'delivered',
    items: [
      { productId: '10', productName: 'Crop Protection Bundle', quantity: 3, price: 245.00 }
    ],
    totalValue: 735.00,
    createdAt: new Date('2026-03-05T09:00:00'),
    estimatedDelivery: new Date('2026-03-08')
  },
  {
    id: '5',
    orderNumber: 'ORD-2026-005',
    status: 'pending',
    items: [
      { productId: '2', productName: 'Advanced Insecticide Solution', quantity: 6, price: 124.50 }
    ],
    totalValue: 747.00,
    createdAt: new Date('2026-03-11T11:45:00'),
    estimatedDelivery: new Date('2026-03-16')
  },
  {
    id: '6',
    orderNumber: 'ORD-2026-006',
    status: 'processing',
    items: [
      { productId: '1', productName: 'Premium Herbicide Concentrate', quantity: 20, price: 89.99 },
      { productId: '4', productName: 'Soil Nutrient Enhancer', quantity: 15, price: 45.00 }
    ],
    totalValue: 2474.80,
    createdAt: new Date('2026-03-10T16:30:00'),
    estimatedDelivery: new Date('2026-03-13')
  },
  {
    id: '7',
    orderNumber: 'ORD-2026-007',
    status: 'shipped',
    items: [
      { productId: '3', productName: 'Organic Fungicide Treatment', quantity: 10, price: 67.25 }
    ],
    totalValue: 672.50,
    createdAt: new Date('2026-03-08T13:20:00'),
    estimatedDelivery: new Date('2026-03-11')
  },
  {
    id: '8',
    orderNumber: 'ORD-2026-008',
    status: 'delivered',
    items: [
      { productId: '6', productName: 'Seed Treatment Formula', quantity: 5, price: 98.00 }
    ],
    totalValue: 490.00,
    createdAt: new Date('2026-03-04T10:00:00'),
    estimatedDelivery: new Date('2026-03-07')
  },
  {
    id: '9',
    orderNumber: 'ORD-2026-009',
    status: 'processing',
    items: [
      { productId: '9', productName: 'Systemic Pesticide', quantity: 4, price: 189.00 }
    ],
    totalValue: 756.00,
    createdAt: new Date('2026-03-10T09:15:00'),
    estimatedDelivery: new Date('2026-03-14')
  },
  {
    id: '10',
    orderNumber: 'ORD-2026-010',
    status: 'pending',
    items: [
      { productId: '7', productName: 'Selective Weed Control', quantity: 8, price: 72.50 },
      { productId: '5', productName: 'Growth Regulator Pro', quantity: 3, price: 156.75 }
    ],
    totalValue: 1050.25,
    createdAt: new Date('2026-03-11T07:00:00'),
    estimatedDelivery: new Date('2026-03-15')
  }
]

// Mock Activities
const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'order_shipped',
    title: 'Order Shipped',
    description: 'Order ORD-2026-003 has been shipped to customer',
    timestamp: new Date('2026-03-11T09:30:00'),
    metadata: { orderNumber: 'ORD-2026-003' }
  },
  {
    id: '2',
    type: 'low_stock_alert',
    title: 'Low Stock Alert',
    description: 'Systemic Pesticide (SYN-INS-009) is below reorder threshold',
    timestamp: new Date('2026-03-11T08:15:00'),
    metadata: { sku: 'SYN-INS-009', quantity: 15 }
  },
  {
    id: '3',
    type: 'product_added',
    title: 'Product Added',
    description: 'New product "Organic Fungicide Treatment" added to inventory',
    timestamp: new Date('2026-03-11T07:45:00'),
    metadata: { sku: 'SYN-FUN-003' }
  },
  {
    id: '4',
    type: 'stock_updated',
    title: 'Stock Updated',
    description: 'Received shipment of 200 units of Premium Herbicide Concentrate',
    timestamp: new Date('2026-03-10T16:20:00'),
    metadata: { sku: 'SYN-HRB-001', quantity: 200 }
  },
  {
    id: '5',
    type: 'order_shipped',
    title: 'Order Shipped',
    description: 'Order ORD-2026-007 has been shipped to customer',
    timestamp: new Date('2026-03-10T14:10:00'),
    metadata: { orderNumber: 'ORD-2026-007' }
  },
  {
    id: '6',
    type: 'low_stock_alert',
    title: 'Low Stock Alert',
    description: 'Seed Treatment Formula (SYN-SED-006) is below reorder threshold',
    timestamp: new Date('2026-03-10T11:30:00'),
    metadata: { sku: 'SYN-SED-006', quantity: 28 }
  },
  {
    id: '7',
    type: 'stock_updated',
    title: 'Stock Updated',
    description: 'Inventory adjustment for Foliar Spray Adjuvant: +50 units',
    timestamp: new Date('2026-03-09T15:45:00'),
    metadata: { sku: 'SYN-ADJ-008', quantity: 50 }
  },
  {
    id: '8',
    type: 'product_added',
    title: 'Product Added',
    description: 'New product "Crop Protection Bundle" added to inventory',
    timestamp: new Date('2026-03-09T10:00:00'),
    metadata: { sku: 'SYN-BUN-010' }
  },
  {
    id: '9',
    type: 'low_stock_alert',
    title: 'Low Stock Alert',
    description: 'Soil Nutrient Enhancer (SYN-NUT-004) is below reorder threshold',
    timestamp: new Date('2026-03-08T13:20:00'),
    metadata: { sku: 'SYN-NUT-004', quantity: 42 }
  },
  {
    id: '10',
    type: 'order_shipped',
    title: 'Order Shipped',
    description: 'Order ORD-2026-004 has been delivered to customer',
    timestamp: new Date('2026-03-08T09:00:00'),
    metadata: { orderNumber: 'ORD-2026-004' }
  }
]

// Calculate KPIs
export function getDashboardKPIs(): DashboardKPIs {
  const totalProducts = mockProducts.length
  const lowStockCount = mockProducts.filter(
    (product) => product.quantity <= product.reorderThreshold
  ).length
  const pendingOrders = mockOrders.filter(
    (order) => order.status === 'pending' || order.status === 'processing'
  ).length
  const warehouseValue = mockProducts.reduce(
    (total, product) => total + product.quantity * product.unitPrice,
    0
  )

  return {
    totalProducts,
    lowStockCount,
    pendingOrders,
    warehouseValue
  }
}

// Get order status data for chart
export function getOrderStatusData(): OrderStatusData[] {
  const statusCounts = mockOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1
    return acc
  }, {} as Record<OrderStatus, number>)

  const allStatuses: OrderStatusData[] = [
    { status: 'pending' as OrderStatus, count: statusCounts.pending || 0, fill: 'var(--color-chart-1)' },
    { status: 'processing' as OrderStatus, count: statusCounts.processing || 0, fill: 'var(--color-chart-2)' },
    { status: 'shipped' as OrderStatus, count: statusCounts.shipped || 0, fill: 'var(--color-chart-3)' },
    { status: 'delivered' as OrderStatus, count: statusCounts.delivered || 0, fill: 'var(--color-chart-4)' },
    { status: 'cancelled' as OrderStatus, count: statusCounts.cancelled || 0, fill: 'var(--color-chart-5)' }
  ]

  return allStatuses.filter((item) => item.count > 0)
}

export function getMockProducts(): Product[] {
  return mockProducts
}

export function getMockOrders(): Order[] {
  return mockOrders
}

export function getMockActivities(): Activity[] {
  return mockActivities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

// Get inventory data by category for bar chart
export function getInventoryCategoryData(): InventoryCategoryData[] {
  const categoryTotals = mockProducts.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + product.quantity
    return acc
  }, {} as Record<string, number>)

  return Object.entries(categoryTotals)
    .map(([category, quantity]) => ({ category, quantity }))
    .sort((a, b) => b.quantity - a.quantity)
}
