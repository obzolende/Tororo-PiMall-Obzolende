import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 25.5,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/shop" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Continue Shopping</span>
            </Link>
            <h1 className="text-xl font-bold">Shopping Cart</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <Link href="/shop">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>

              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <div className="flex items-center space-x-1">
                          <span className="text-lg font-bold text-purple-600">π</span>
                          <span className="text-lg font-bold">{item.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm">
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-medium px-2">{item.quantity}</span>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-purple-600">π</span>
                        <span>{subtotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-purple-600">π</span>
                        <span>{shipping.toFixed(2)}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-purple-600 text-xl">π</span>
                        <span>{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <p className="text-sm text-gray-600 text-center">Secure payment with Pi Network</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
