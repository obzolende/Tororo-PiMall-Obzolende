import { ArrowLeft, Star, ShoppingCart, Heart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/shop" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Shop</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=500" alt="Product Image" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square relative rounded-lg overflow-hidden border-2 border-transparent hover:border-purple-600 cursor-pointer"
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=100`}
                    alt={`Product Image ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 bg-purple-100 text-purple-800">Electronics</Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Premium Wireless Headphones</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.5) • 128 reviews</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold text-purple-600">π</span>
              <span className="text-3xl font-bold">25.50</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience premium sound quality with these wireless headphones. Featuring advanced noise cancellation,
                30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals alike.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Active Noise Cancellation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>30-hour Battery Life</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Bluetooth 5.0 Connectivity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Premium Comfort Padding</span>
                </li>
              </ul>
            </div>

            {/* Quantity and Actions */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Quantity</span>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-lg font-medium px-4">1</span>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="sm:w-auto bg-transparent">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
