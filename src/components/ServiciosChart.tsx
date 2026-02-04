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
import { serviciosData } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function ServiciosChart() {
  const totalServicios = serviciosData.reduce((sum, item) => sum + item.monto, 0)

  return (
    <div className="space-y-6">
      {/* KPIs de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="kpi-card">
          <div className="text-2xl mb-2">💸</div>
          <div className="kpi-value">{formatCurrency(totalServicios)}</div>
          <div className="kpi-label">Total Servicios y Gastos Op.</div>
        </div>
        <div className="kpi-card">
          <div className="text-2xl mb-2">📱</div>
          <div className="kpi-value">{formatCurrency(serviciosData.find(s => s.categoria === 'COMISIONES PLATAFORMAS')?.monto || 0)}</div>
          <div className="kpi-label">Comisiones Plataformas</div>
        </div>
        <div className="kpi-card">
          <div className="text-2xl mb-2">🔧</div>
          <div className="kpi-value">{formatCurrency(serviciosData.find(s => s.categoria === 'MANTENIMIENTO')?.monto || 0)}</div>
          <div className="kpi-label">Mantenimiento</div>
        </div>
      </div>

      {/* Gráfico de servicios */}
      <div className="card">
        <h2 className="card-header">📊 Gastos Operativos y Servicios</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={serviciosData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                type="number"
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
              />
              <YAxis
                type="category"
                dataKey="categoria"
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
                width={140}
              />
              <Tooltip
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formatter={(value: any) => [formatCurrency(Number(value)), 'Monto']}
                contentStyle={{
                  backgroundColor: 'rgba(26, 26, 46, 0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="monto" radius={[0, 4, 4, 0]} fill="#e94560" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabla de servicios */}
      <div className="card">
        <h2 className="card-header">📋 Detalle de Servicios</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-white/10">
                <th className="text-left py-3 px-4">Categoría</th>
                <th className="text-left py-3 px-4">Descripción</th>
                <th className="text-right py-3 px-4">Monto</th>
                <th className="text-right py-3 px-4">% del Total</th>
              </tr>
            </thead>
            <tbody>
              {serviciosData.map((item) => {
                const percentage = (item.monto / totalServicios) * 100
                return (
                  <tr key={item.categoria} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-white">{item.categoria}</td>
                    <td className="py-3 px-4 text-gray-400">{item.descripcion}</td>
                    <td className="py-3 px-4 text-right font-mono text-green-400 font-semibold">
                      {formatCurrency(item.monto)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#e94560] rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-gray-400 text-xs w-12">
                          {percentage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-white/20 bg-white/5">
                <td colSpan={2} className="py-3 px-4 font-semibold text-white">TOTAL</td>
                <td className="py-3 px-4 text-right font-mono text-green-400 font-bold text-lg">
                  {formatCurrency(totalServicios)}
                </td>
                <td className="py-3 px-4 text-right text-gray-400">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
