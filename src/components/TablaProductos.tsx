'use client'

import { useState } from 'react'
import { categoriaData } from '@/data/compras-data'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function TablaProductos() {
  const [sortBy, setSortBy] = useState<'montoTotal' | 'cantidad' | 'precioMedio'>('montoTotal')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const sortedData = [...categoriaData].sort((a, b) => {
    const multiplier = sortOrder === 'desc' ? -1 : 1
    return multiplier * (a[sortBy] - b[sortBy])
  })

  const handleSort = (column: 'montoTotal' | 'cantidad' | 'precioMedio') => {
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

  return (
    <div className="card">
      <h2 className="card-header">📋 Detalle por Categoría de Producto</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="text-left py-3 px-4">#</th>
              <th className="text-left py-3 px-4">Categoría</th>
              <th className="text-right py-3 px-4"># Compras</th>
              <th
                className="text-right py-3 px-4 cursor-pointer hover:text-white"
                onClick={() => handleSort('cantidad')}
              >
                Cantidad <SortIcon column="cantidad" />
              </th>
              <th
                className="text-right py-3 px-4 cursor-pointer hover:text-white"
                onClick={() => handleSort('montoTotal')}
              >
                Monto Total <SortIcon column="montoTotal" />
              </th>
              <th
                className="text-right py-3 px-4 cursor-pointer hover:text-white"
                onClick={() => handleSort('precioMedio')}
              >
                Precio Medio <SortIcon column="precioMedio" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={item.categoria}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                <td className="py-3 px-4">
                  <span className="font-medium text-white">{item.categoria}</span>
                </td>
                <td className="py-3 px-4 text-right text-gray-300">{item.numCompras}</td>
                <td className="py-3 px-4 text-right text-gray-300">
                  {item.cantidad.toLocaleString('es-CL', { maximumFractionDigits: 1 })}
                </td>
                <td className="py-3 px-4 text-right font-mono text-green-400 font-semibold">
                  {formatCurrency(item.montoTotal)}
                </td>
                <td className="py-3 px-4 text-right font-mono text-white">
                  {formatCurrency(item.precioMedio)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-white/20 bg-white/5">
              <td colSpan={4} className="py-3 px-4 font-semibold text-white">
                TOTAL
              </td>
              <td className="py-3 px-4 text-right font-mono text-green-400 font-bold text-lg">
                {formatCurrency(categoriaData.reduce((sum, item) => sum + item.montoTotal, 0))}
              </td>
              <td className="py-3 px-4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
