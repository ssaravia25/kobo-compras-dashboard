// Datos procesados de las facturas XML de KOBO - Enero 2026

export interface CategoriaData {
  categoria: string;
  numCompras: number;
  cantidad: number;
  unidad: string;
  montoTotal: number;
  precioMedio: number;
}

export interface ProveedorData {
  proveedor: string;
  montoTotal: number;
  numLineas: number;
  categorias: number;
}

export interface ProveedorProductoData {
  proveedor: string;
  producto: string;
  cantidad: number;
  precioMin: number;
  precioMax: number;
  precioMedio: number;
  monto: number;
}

export interface ComparativaData {
  producto: string;
  proveedores: {
    nombre: string;
    cantidad: number;
    precioMedio: number;
    monto: number;
  }[];
}

// Resumen por categoría de producto
export const categoriaData: CategoriaData[] = [
  { categoria: 'PALTA', numCompras: 42, cantidad: 62, unidad: 'cajas', montoTotal: 2623500, precioMedio: 42315 },
  { categoria: 'SALMON', numCompras: 6, cantidad: 121.5, unidad: 'kg', montoTotal: 1646562, precioMedio: 13552 },
  { categoria: 'QUESO CREMA', numCompras: 11, cantidad: 19, unidad: 'cajas', montoTotal: 1495823, precioMedio: 165743 },
  { categoria: 'POLLO', numCompras: 19, cantidad: 702, unidad: 'kg', montoTotal: 1012893, precioMedio: 1443 },
  { categoria: 'ARROZ', numCompras: 11, cantidad: 63, unidad: 'bolsas', montoTotal: 773199, precioMedio: 12273 },
  { categoria: 'ATUN', numCompras: 7, cantidad: 82.9, unidad: 'kg', montoTotal: 648258, precioMedio: 7821 },
  { categoria: 'NORI', numCompras: 11, cantidad: 56, unidad: 'paq', montoTotal: 531440, precioMedio: 9490 },
  { categoria: 'MAYONESA', numCompras: 14, cantidad: 34, unidad: 'gal', montoTotal: 509633, precioMedio: 14989 },
  { categoria: 'ACEITE', numCompras: 8, cantidad: 20, unidad: 'bid', montoTotal: 370000, precioMedio: 18500 },
  { categoria: 'MARACUYA', numCompras: 15, cantidad: 46, unidad: 'kg', montoTotal: 270192, precioMedio: 5874 },
  { categoria: 'FILM/PAPEL', numCompras: 17, cantidad: 84, unidad: 'un', montoTotal: 258323, precioMedio: 3075 },
  { categoria: 'CERDO', numCompras: 8, cantidad: 780, unidad: 'un', montoTotal: 234000, precioMedio: 300 },
  { categoria: 'BANDEJAS/ENVASES', numCompras: 9, cantidad: 9, unidad: 'cajas', montoTotal: 219790, precioMedio: 24421 },
  { categoria: 'CAMARON', numCompras: 8, cantidad: 302, unidad: 'un', montoTotal: 210500, precioMedio: 697 },
  { categoria: 'PULPO', numCompras: 1, cantidad: 17, unidad: 'kg', montoTotal: 169830, precioMedio: 9990 },
  { categoria: 'TERIYAKI', numCompras: 4, cantidad: 10, unidad: 'kg', montoTotal: 139900, precioMedio: 13990 },
  { categoria: 'EMPANADAS/ARROLLADOS', numCompras: 3, cantidad: 4, unidad: 'cajas', montoTotal: 114000, precioMedio: 28500 },
  { categoria: 'PANKO', numCompras: 6, cantidad: 60, unidad: 'kg', montoTotal: 107400, precioMedio: 1790 },
  { categoria: 'WASABI', numCompras: 11, cantidad: 18, unidad: 'kg', montoTotal: 106326, precioMedio: 5907 },
  { categoria: 'GYOZAS', numCompras: 7, cantidad: 270, unidad: 'un', montoTotal: 97200, precioMedio: 360 },
  { categoria: 'AZUCAR', numCompras: 9, cantidad: 11, unidad: 'kg', montoTotal: 86790, precioMedio: 7890 },
  { categoria: 'HARINA', numCompras: 10, cantidad: 10, unidad: 'kg', montoTotal: 81093, precioMedio: 8109 },
  { categoria: 'SERVILLETAS', numCompras: 5, cantidad: 8, unidad: 'paq', montoTotal: 59805, precioMedio: 7476 },
  { categoria: 'AJI', numCompras: 8, cantidad: 23, unidad: 'un', montoTotal: 57500, precioMedio: 2500 },
  { categoria: 'ALMENDRAS', numCompras: 3, cantidad: 4, unidad: 'kg', montoTotal: 55960, precioMedio: 13990 },
  { categoria: 'VINAGRE', numCompras: 10, cantidad: 16, unidad: 'lt', montoTotal: 53280, precioMedio: 3330 },
  { categoria: 'TOFU', numCompras: 11, cantidad: 23, unidad: 'un', montoTotal: 51892, precioMedio: 2256 },
  { categoria: 'LIMPIEZA', numCompras: 11, cantidad: 29, unidad: 'un', montoTotal: 50895, precioMedio: 1755 },
  { categoria: 'YOGURT', numCompras: 5, cantidad: 15, unidad: 'un', montoTotal: 45080, precioMedio: 3005 },
  { categoria: 'POSTRES', numCompras: 4, cantidad: 21, unidad: 'un', montoTotal: 38850, precioMedio: 1850 },
];

// Datos por proveedor
export const proveedorData: ProveedorData[] = [
  { proveedor: 'Hod Foods Spa', montoTotal: 3373961, numLineas: 176, categorias: 25 },
  { proveedor: 'EMPRESA BAGNO SPA', montoTotal: 2623500, numLineas: 42, categorias: 1 },
  { proveedor: 'RAPPI CHILE SPA', montoTotal: 1913739, numLineas: 17, categorias: 2 },
  { proveedor: 'JUSTO SPA', montoTotal: 1585911, numLineas: 24, categorias: 3 },
  { proveedor: 'Promerco S.A.', montoTotal: 1514460, numLineas: 12, categorias: 2 },
  { proveedor: 'South Wind S.A.', montoTotal: 1144697, numLineas: 8, categorias: 2 },
  { proveedor: 'ALIMEX S.A.', montoTotal: 1144458, numLineas: 4, categorias: 1 },
  { proveedor: 'COMERCIAL COLORADO SPA', montoTotal: 701800, numLineas: 17, categorias: 2 },
  { proveedor: 'OLIVIER BINFA', montoTotal: 596700, numLineas: 29, categorias: 4 },
  { proveedor: 'ASIA WOK ALIMENTOS', montoTotal: 280400, numLineas: 7, categorias: 3 },
  { proveedor: 'RESTOMARKET SPA', montoTotal: 256845, numLineas: 15, categorias: 8 },
  { proveedor: 'BIDFOOD CHILE S.A.', montoTotal: 178754, numLineas: 26, categorias: 12 },
];

// Precio medio por proveedor y producto
export const proveedorProductoData: ProveedorProductoData[] = [
  // Hod Foods
  { proveedor: 'Hod Foods Spa', producto: 'POLLO', cantidad: 192, precioMin: 4290, precioMax: 4490, precioMedio: 4472, monto: 859893 },
  { proveedor: 'Hod Foods Spa', producto: 'ARROZ', cantidad: 63, precioMin: 12273, precioMax: 12273, precioMedio: 12273, monto: 773199 },
  { proveedor: 'Hod Foods Spa', producto: 'NORI', cantidad: 56, precioMin: 9490, precioMax: 9490, precioMedio: 9490, monto: 531440 },
  { proveedor: 'Hod Foods Spa', producto: 'PANKO', cantidad: 60, precioMin: 1790, precioMax: 1790, precioMedio: 1790, monto: 107400 },
  { proveedor: 'Hod Foods Spa', producto: 'WASABI', cantidad: 18, precioMin: 5907, precioMax: 5907, precioMedio: 5907, monto: 106326 },
  // BAGNO
  { proveedor: 'EMPRESA BAGNO SPA', producto: 'PALTA', cantidad: 62, precioMin: 33000, precioMax: 49500, precioMedio: 42036, monto: 2623500 },
  // Promerco
  { proveedor: 'Promerco S.A.', producto: 'QUESO CREMA', cantidad: 19, precioMin: 17598, precioMax: 193520, precioMedio: 145541, monto: 1495823 },
  // South Wind
  { proveedor: 'South Wind S.A.', producto: 'ATUN', cantidad: 77.9, precioMin: 8250, precioMax: 8250, precioMedio: 8250, monto: 642593 },
  { proveedor: 'South Wind S.A.', producto: 'SALMON', cantidad: 36.2, precioMin: 13300, precioMax: 14400, precioMedio: 13850, monto: 502104 },
  // ALIMEX
  { proveedor: 'ALIMEX S.A.', producto: 'SALMON', cantidad: 85.3, precioMin: 12500, precioMax: 14150, precioMedio: 13262, monto: 1144458 },
  // Colorado
  { proveedor: 'COMERCIAL COLORADO SPA', producto: 'ACEITE', cantidad: 20, precioMin: 18500, precioMax: 18500, precioMedio: 18500, monto: 370000 },
  { proveedor: 'COMERCIAL COLORADO SPA', producto: 'MAYONESA', cantidad: 21, precioMin: 15800, precioMax: 15800, precioMedio: 15800, monto: 331800 },
  // Olivier
  { proveedor: 'OLIVIER BINFA', producto: 'CERDO', cantidad: 780, precioMin: 300, precioMax: 300, precioMedio: 300, monto: 234000 },
  { proveedor: 'OLIVIER BINFA', producto: 'POLLO', cantidad: 510, precioMin: 300, precioMax: 300, precioMedio: 300, monto: 153000 },
  { proveedor: 'OLIVIER BINFA', producto: 'CAMARON', cantidad: 300, precioMin: 375, precioMax: 375, precioMedio: 375, monto: 112500 },
];

// Comparativa de precios por producto
export const comparativaData: ComparativaData[] = [
  {
    producto: 'SALMON',
    proveedores: [
      { nombre: 'ALIMEX S.A.', cantidad: 85.3, precioMedio: 13262, monto: 1144458 },
      { nombre: 'South Wind S.A.', cantidad: 36.2, precioMedio: 13850, monto: 502104 },
    ]
  },
  {
    producto: 'ATUN',
    proveedores: [
      { nombre: 'South Wind S.A.', cantidad: 77.9, precioMedio: 8250, monto: 642593 },
      { nombre: 'BIDFOOD CHILE', cantidad: 5, precioMedio: 1133, monto: 5665 },
    ]
  },
  {
    producto: 'MAYONESA',
    proveedores: [
      { nombre: 'COMERCIAL COLORADO', cantidad: 21, precioMedio: 15800, monto: 331800 },
      { nombre: 'RESTOMARKET', cantidad: 6, precioMedio: 15500, monto: 93000 },
      { nombre: 'ICB FOOD SERVICE', cantidad: 2, precioMedio: 3667, monto: 7333 },
    ]
  },
  {
    producto: 'POLLO',
    proveedores: [
      { nombre: 'Hod Foods (Pechuga)', cantidad: 192, precioMedio: 4472, monto: 859893 },
      { nombre: 'OLIVIER BINFA (Gyozas)', cantidad: 510, precioMedio: 300, monto: 153000 },
    ]
  },
];

// Servicios y gastos operativos
export const serviciosData = [
  { categoria: 'DEVOLUCIONES', monto: 3342815, descripcion: 'Devoluciones de plataformas' },
  { categoria: 'COMISIONES PLATAFORMAS', monto: 2092653, descripcion: 'Rappi, Justo, Uber Eats' },
  { categoria: 'MANTENIMIENTO', monto: 625000, descripcion: 'Reparaciones y obras' },
  { categoria: 'TELEFONIA/INTERNET', monto: 261045, descripcion: 'Comunicaciones' },
  { categoria: 'AGUA', monto: 134168, descripcion: 'Servicios de agua' },
  { categoria: 'FLETE/DESPACHO', monto: 133471, descripcion: 'Entregas especiales' },
];

// KPIs generales
export const kpis = {
  totalCompras: 20743120,
  totalLineas: 446,
  totalCategorias: 63,
  totalProveedores: 34,
  periodo: 'Enero 2026',
  topProducto: 'PALTA',
  topProveedor: 'Hod Foods Spa',
};

// Colores para gráficos
export const COLORS = [
  '#e94560', '#0f3460', '#16213e', '#1a1a2e',
  '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
  '#ffeaa7', '#dfe6e9', '#fd79a8', '#a29bfe',
];
