'use client'

import { useState } from 'react'
import KPICards from '@/components/KPICards'
import ProductosChart from '@/components/ProductosChart'
import ProveedoresChart from '@/components/ProveedoresChart'
import ComparativaPrecios from '@/components/ComparativaPrecios'
import TablaProductos from '@/components/TablaProductos'
import TablaProveedores from '@/components/TablaProveedores'
import ServiciosChart from '@/components/ServiciosChart'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-[#e94560] to-[#0f3460] rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold">K</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              KOBO Compras Dashboard
            </h1>
            <p className="text-gray-400 text-sm">Análisis de compras e insumos - Enero 2026</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {[
          { id: 'overview', label: 'Resumen' },
          { id: 'productos', label: 'Productos' },
          { id: 'proveedores', label: 'Proveedores' },
          { id: 'comparativa', label: 'Comparativa' },
          { id: 'servicios', label: 'Servicios' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#e94560] text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="space-y-8">
        {activeTab === 'overview' && (
          <>
            <KPICards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProductosChart />
              <ProveedoresChart />
            </div>
          </>
        )}

        {activeTab === 'productos' && (
          <>
            <ProductosChart fullWidth />
            <TablaProductos />
          </>
        )}

        {activeTab === 'proveedores' && (
          <>
            <ProveedoresChart fullWidth />
            <TablaProveedores />
          </>
        )}

        {activeTab === 'comparativa' && (
          <ComparativaPrecios />
        )}

        {activeTab === 'servicios' && (
          <ServiciosChart />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>KOBO Suite © 2026 - Dashboard de Compras</p>
      </footer>
    </main>
  )
}
