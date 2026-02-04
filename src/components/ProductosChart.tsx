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

// Custom tooltip component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-[#1a1a2e]/95 border border-white/10 rounded-lg p-3 shadow-xl">
        <p className="font-semibold text-white mb-2">{label}</p>
        <p className="text-green-400 font-mono">
          {formatCurrencyFull(data.montoTotal)}
        </p>
        <p className="text-blue-400 text-sm mt-1">
          📦 {data.cantidad.toLocaleString('es-CL')} {data.unidad}
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Precio medio: {formatCurrencyFull(data.precioMedio)}/{data.unidad}
        </p>
      </div>
    )
  }
  return null
}

export default function ProductosChart({ fullWidth }: Props) {
  const data = categoriaData.slice(0, 12).map((item, index) => ({
    ...item,
    // Label combinado para el eje Y
    labelConCantidad: `${item.categoria} (${item.cantidad}${item.unidad})`,
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
            margin={{ top: 5, right: 30, left: fullWidth ? 180 : 140, bottom: 5 }}
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
              dataKey="labelConCantidad"
              stroke="rgba(255,255,255,0.5)"
              fontSize={11}
              width={fullWidth ? 170 : 130}
              tick={{ fill: 'rgba(255,255,255,0.7)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="montoTotal" radius={[0, 4, 4, 0]} fill="#e94560" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Leyenda */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
        <span>📦 = Cantidad comprada</span>
        <span>kg = Kilogramos</span>
        <span>un = Unidades</span>
        <span>gal = Galones</span>
        <span>paq = Paquetes</span>
      </div>
    </div>
  )
}
