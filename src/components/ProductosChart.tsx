'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { categoriaData, COLORS } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

const formatCurrencyFull = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

interface Props {
  fullWidth?: boolean
}

export default function ProductosChart({ fullWidth }: Props) {
  const data = categoriaData.slice(0, 12).map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length],
  }))

  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h2 className="card-header">💹 Top Productos por Gasto</h2>
      <div className={fullWidth ? 'h-[500px]' : 'h-[350px]'}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              type="number"
              tickFormatter={formatCurrency}
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
            />
            <YAxis
              type="category"
              dataKey="categoria"
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
              width={90}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [formatCurrencyFull(Number(value)), 'Monto']}
              contentStyle={{
                backgroundColor: 'rgba(26, 26, 46, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="montoTotal" radius={[0, 4, 4, 0]} fill="#e94560" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
