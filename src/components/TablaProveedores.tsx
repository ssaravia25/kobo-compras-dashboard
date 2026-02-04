'use client'

import { useState } from 'react'
import { proveedorData } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function TablaProveedores() {
  const [sortBy, setSortBy] = useState<'montoTotal' | 'numLineas' | 'categorias'>('montoTotal')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const sortedData = [...proveedorData].sort((a, b) => {
    const multiplier = sortOrder === 'desc' ? -1 : 1
    return multiplier * (a[sortBy] - b[sortBy])
  })

  const handleSort = (column: 'montoTotal' | 'numLineas' | 'categorias') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    } else {
      setSortBy(column)
      setSortOrder('desc')
    }
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (sortBy !== column) return <span className="text-gray-600">↕</span>
    return sortOrder === 'desc' ? <span>↓</span> : <span>↑</span>
  }

  const totalMonto = proveedorData.reduce((sum, item) => sum + item.montoTotal, 0)

  return (
    <div className="card">
      <h2 className="card-header">🏢 Detalle por Proveedor</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="text-left py-3 px-4">#</th>
              <th className="text-left py-3 px-4">Proveedor</th>
              <th
                className="text-right py-3 px-4 cursor-pointer hover:text-white"
                onClick={() => handleSort('numLineas')}
              >
                # Líneas <SortIcon column="numLineas" />
              </th>
              <th
                className="text-right py-3 px-4 cursor-pointer hover:text-white"
                onClick={() => handleSort('categorias')}
              >
                Categorías <SortIcon column="categorias" />
              </th>
              <th
                className="text-right py-3 px-4 cursor-pointer hover:text-white"
                onClick={() => handleSort('montoTotal')}
              >
                Monto Total <SortIcon column="montoTotal" />
              </th>
              <th className="text-right py-3 px-4">% del Total</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => {
              const percentage = (item.montoTotal / totalMonto) * 100

              return (
                <tr
                  key={item.proveedor}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-white">{item.proveedor}</span>
                  </td>
                  <td className="py-3 px-4 text-right text-gray-300">{item.numLineas}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2 py-1 bg-[#0f3460] rounded text-xs">
                      {item.categorias}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-green-400 font-semibold">
                    {formatCurrency(item.montoTotal)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
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
              <td colSpan={4} className="py-3 px-4 font-semibold text-white">
                TOTAL
              </td>
              <td className="py-3 px-4 text-right font-mono text-green-400 font-bold text-lg">
                {formatCurrency(totalMonto)}
              </td>
              <td className="py-3 px-4 text-right text-gray-400">100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
