"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Datos de ejemplo para facturas recientes
  const facturas = [
    {
      id: "FAC-2023-001",
      fecha: "10/04/2025",
      cliente: "Comercial Mexicana S.A.",
      monto: "$5,230.50",
      estado: "Pagada",
    },
    {
      id: "FAC-2023-002",
      fecha: "08/04/2025",
      cliente: "Distribuidora del Norte",
      monto: "$1,845.75",
      estado: "Pendiente",
    },
    { id: "FAC-2023-003", fecha: "05/04/2025", cliente: "Servicios Integrales", monto: "$3,450.00", estado: "Pagada" },
    {
      id: "FAC-2023-004",
      fecha: "01/04/2025",
      cliente: "Tecnología Avanzada",
      monto: "$7,890.25",
      estado: "Cancelada",
    },
    { id: "FAC-2023-005", fecha: "28/03/2025", cliente: "Supermercados Unidos", monto: "$2,340.80", estado: "Pagada" },
  ]

  // Filtrar facturas basado en la búsqueda
  const facturasFiltered = facturas.filter(
    (factura) =>
      factura.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      factura.cliente.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-white md:min-h-screen">
        <div className="p-4 flex justify-between items-center md:justify-start md:flex-col md:items-start">
          <div className="flex items-center gap-2 mb-0 md:mb-8 mt-2">
            <span className="text-xl">📄</span>
            <h1 className="text-xl font-bold">FacturaMX</h1>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <span className="text-lg">👤</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="mr-2">👤</span>
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">⚙️</span>
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="mr-2">🚪</span>
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <nav className="p-2 md:p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700"
              >
                <span className="text-lg">🏠</span>
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a
                href="/facturas"
                className="flex items-center gap-3 px-4 py-2 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <span className="text-lg">📄</span>
                <span>Facturas</span>
              </a>
            </li>
            <li>
              <a
                href="/reportes"
                className="flex items-center gap-3 px-4 py-2 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <span className="text-lg">📊</span>
                <span>Reportes</span>
              </a>
            </li>
            <li>
              <a
                href="/configuracion"
                className="flex items-center gap-3 px-4 py-2 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <span className="text-lg">⚙️</span>
                <span>Configuración</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block p-4 mt-auto border-t border-slate-800">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <span className="text-sm">👤</span>
            </div>
            <div>
              <p className="text-sm font-medium">Carlos Rodríguez</p>
              <p className="text-xs text-slate-400">Administrador</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white mt-2">
            <span className="mr-2">🚪</span>
            Cerrar Sesión
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500">Bienvenido de nuevo, Carlos</p>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto flex gap-2">
            <Button className="bg-green-600 hover:bg-green-700">
              <span className="mr-2">➕</span>
              Nueva Factura
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Facturas Emitidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-green-500 flex items-center mt-1">+12% desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Monto Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,289.30</div>
              <p className="text-xs text-green-500 flex items-center mt-1">+8% desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Facturas Pendientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-red-500 flex items-center mt-1">+3 desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Timbres Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">872</div>
              <p className="text-xs text-slate-500 flex items-center mt-1">De 1,000 contratados</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="recientes" className="mb-8">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="recientes">Facturas Recientes</TabsTrigger>
              <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
            </TabsList>
            <div className="relative w-full max-w-sm">
              <span className="absolute left-2.5 top-2.5 text-slate-500">🔍</span>
              <Input
                type="search"
                placeholder="Buscar facturas..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <TabsContent value="recientes" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Folio</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead className="hidden md:table-cell">Cliente</TableHead>
                      <TableHead>Monto</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facturasFiltered.map((factura) => (
                      <TableRow key={factura.id}>
                        <TableCell className="font-medium">{factura.id}</TableCell>
                        <TableCell>{factura.fecha}</TableCell>
                        <TableCell className="hidden md:table-cell">{factura.cliente}</TableCell>
                        <TableCell>{factura.monto}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              factura.estado === "Pagada"
                                ? "default"
                                : factura.estado === "Pendiente"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {factura.estado}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <span className="text-lg">⬇️</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <div className="text-xs text-slate-500">
                  Mostrando {facturasFiltered.length} de {facturas.length} facturas
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm">
                    Siguiente
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pendientes" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Facturas Pendientes</CardTitle>
                <CardDescription>Facturas que están pendientes de pago o confirmación.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>No hay facturas pendientes que coincidan con tu búsqueda.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Usage Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Resumen de Uso</CardTitle>
            <CardDescription>Información sobre tu consumo y saldo actual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Timbres Utilizados (Mes Actual)</span>
                  <span className="text-sm font-medium">128</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "12.8%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Almacenamiento Utilizado</span>
                  <span className="text-sm font-medium">2.4 GB</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "48%" }}></div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500">
                      Saldo actual: <span className="font-medium text-slate-700">$1,250.00 MXN</span>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Costo por timbre: <span className="font-medium text-slate-700">$5.00 MXN</span>
                    </p>
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                    Timbres disponibles: 250
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Historial de Consumo</Button>
            <Button>Recargar Saldo</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
