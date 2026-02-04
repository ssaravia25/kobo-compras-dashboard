'use client'

import { kpis } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function KPICards() {
  const kpiItems = [
    {
      label: 'Total Compras',
      value: formatCurrency(kpis.totalCompras),
      icon: '💰',
      color: 'from-green-500/20 to-green-600/10',
    },
    {
      label: 'Líneas Procesadas',
      value: kpis.totalLineas.toString(),
      icon: '📦',
      color: 'from-blue-500/20 to-blue-600/10',
    },
    {
      label: 'Categorías',
      value: kpis.totalCategorias.toString(),
      icon: '🏷️',
      color: 'from-purple-500/20 to-purple-600/10',
    },
    {
      label: 'Proveedores',
      value: kpis.totalProveedores.toString(),
      icon: '🏢',
      color: 'from-orange-500/20 to-orange-600/10',
    },
    {
      label: 'Top Producto',
      value: kpis.topProducto,
      icon: '🥑',
      color: 'from-yellow-500/20 to-yellow-600/10',
    },
    {
      label: 'Top Proveedor',
      value: 'Hod Foods',
      icon: '🏆',
      color: 'from-pink-500/20 to-pink-600/10',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {kpiItems.map((kpi, index) => (
        <div
          key={kpi.label}
          className={`kpi-card bg-gradient-to-br ${kpi.color}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-2xl mb-2">{kpi.icon}</div>
          <div className="kpi-value text-xl md:text-2xl">{kpi.value}</div>
          <div className="kpi-label">{kpi.label}</div>
        </div>
      ))}
    </div>
  )
}
