'use client'

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { proveedorData, COLORS } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

interface Props {
  fullWidth?: boolean
}

export default function ProveedoresChart({ fullWidth }: Props) {
  const data = proveedorData.slice(0, 8).map((item, index) => ({
    name: item.proveedor.length > 15 ? item.proveedor.substring(0, 15) + '...' : item.proveedor,
    value: item.montoTotal,
    fullName: item.proveedor,
    fill: COLORS[index % COLORS.length],
  }))

  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h2 className="card-header">🏢 Distribución por Proveedor</h2>
      <div className={fullWidth ? 'h-[500px]' : 'h-[350px]'}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={fullWidth ? 100 : 60}
              outerRadius={fullWidth ? 160 : 100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
              }
              labelLine={{ stroke: 'rgba(255,255,255,0.3)' }}
            />
            <Tooltip
              formatter={(value) => [formatCurrency(Number(value)), 'Monto']}
              contentStyle={{
                backgroundColor: 'rgba(26, 26, 46, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
