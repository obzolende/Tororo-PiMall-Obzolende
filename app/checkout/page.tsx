import { ArrowLeft, CreditCard, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cart" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Cart</span>
            </Link>
            <h1 className="text-xl font-bold">Checkout</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main Street" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pi Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">π</span>
                  </div>
                  <span>Pi Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-purple-900">Secure Pi Network Payment</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Your payment will be processed securely through the Pi Network. No traditional banking required.
                  </p>
                </div>

                <div>
                  <Label htmlFor="piWallet">Pi Wallet Address</Label>
                  <Input id="piWallet" placeholder="Enter your Pi wallet address" />
                </div>

                <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-700">Pi Network connection verified</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Wireless Headphones × 1</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-purple-600">π</span>
                      <span>25.50</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span>Smart Watch × 2</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-purple-600">π</span>
                      <span>179.98</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-purple-600">π</span>
                      <span>205.48</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-purple-600">π</span>
                      <span>5.00</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-purple-600 text-xl">π</span>
                      <span>210.48</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay with Pi Coins
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">Powered by Pi Network</p>
                  <p className="text-xs text-gray-500">Your payment is secured by blockchain technology</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
