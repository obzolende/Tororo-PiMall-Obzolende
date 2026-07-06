import { Search, Filter, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "25.5",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "89.99",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "45.0",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Phone Case",
    price: "12.99",
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "35.5",
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
    rating: 4.6,
  },
  {
    id: 6,
    name: "USB Cable",
    price: "8.99",
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
    rating: 4.2,
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">π</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Shop</h1>
            </Link>
            <Link href="/cart">
              <Button variant="outline" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Button variant="outline" className="sm:w-auto bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <Badge className="absolute top-2 left-2 bg-purple-600">{product.category}</Badge>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-purple-600">π</span>
                      <span className="text-xl font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
