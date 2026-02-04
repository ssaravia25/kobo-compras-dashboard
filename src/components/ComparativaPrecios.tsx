'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { comparativaData, proveedorProductoData, COLORS } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function ComparativaPrecios() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="card-header">📊 Comparativa de Precios por Producto</h2>
        <p className="text-gray-400 text-sm mb-6">
          Análisis de precios del mismo producto entre diferentes proveedores
        </p>

        <div className="grid gap-6">
          {comparativaData.map((item) => (
            <div key={item.producto} className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-[#e94560] mb-4">
                {item.producto}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-white/10">
                      <th className="text-left py-2 px-3">Proveedor</th>
                      <th className="text-right py-2 px-3">Cantidad</th>
                      <th className="text-right py-2 px-3">Precio Medio</th>
                      <th className="text-right py-2 px-3">Monto Total</th>
                      <th className="text-right py-2 px-3">Diferencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.proveedores.map((prov, index) => {
                      const minPrecio = Math.min(...item.proveedores.map((p) => p.precioMedio))
                      const diff = ((prov.precioMedio - minPrecio) / minPrecio) * 100

                      return (
                        <tr key={prov.nombre} className="border-b border-white/5">
                          <td className="py-3 px-3 text-white">{prov.nombre}</td>
                          <td className="py-3 px-3 text-right text-gray-300">
                            {prov.cantidad.toLocaleString('es-CL')}
                          </td>
                          <td className="py-3 px-3 text-right font-mono text-white">
                            {formatCurrency(prov.precioMedio)}
                          </td>
                          <td className="py-3 px-3 text-right font-mono text-gray-300">
                            {formatCurrency(prov.monto)}
                          </td>
                          <td className="py-3 px-3 text-right">
                            {diff === 0 ? (
                              <span className="text-green-400 font-semibold">Mejor precio</span>
                            ) : (
                              <span className="text-yellow-400">+{diff.toFixed(1)}%</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabla de precios por proveedor */}
      <div className="card">
        <h2 className="card-header">💵 Detalle de Precios por Proveedor</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-white/10">
                <th className="text-left py-2 px-3">Proveedor</th>
                <th className="text-left py-2 px-3">Producto</th>
                <th className="text-right py-2 px-3">Cantidad</th>
                <th className="text-right py-2 px-3">Precio Min</th>
                <th className="text-right py-2 px-3">Precio Max</th>
                <th className="text-right py-2 px-3">Precio Medio</th>
                <th className="text-right py-2 px-3">Monto</th>
              </tr>
            </thead>
            <tbody>
              {proveedorProductoData.map((item, index) => (
                <tr key={`${item.proveedor}-${item.producto}`} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 text-white">{item.proveedor}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-1 bg-[#e94560]/20 text-[#e94560] rounded text-xs">
                      {item.producto}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right text-gray-300">
                    {item.cantidad.toLocaleString('es-CL')}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-gray-400">
                    {formatCurrency(item.precioMin)}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-gray-400">
                    {formatCurrency(item.precioMax)}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-white font-semibold">
                    {formatCurrency(item.precioMedio)}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-green-400">
                    {formatCurrency(item.monto)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
