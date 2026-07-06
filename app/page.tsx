import { ShoppingBag, Coins, Smartphone, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">ObzolendePi</h1>
            </div>
            <Link href="/profile">
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop with Pi Coins</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience seamless shopping without traditional banking. Pay with Pi coins for products of your choice at
              your fingertips.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Start Shopping
              </Button>
            </Link>
            <Link href="/wallet">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Coins className="w-5 h-5 mr-2" />
                My Pi Wallet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Mobile First</h3>
              <p className="text-gray-600">Optimized for mobile shopping experience with intuitive touch controls</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure Pi coin transactions without traditional banking</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Instant Checkout</h3>
              <p className="text-gray-600">Quick and easy checkout process with Pi coin integration</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Coins className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">ObzolendePi Solution</span>
            </div>
            <p className="text-gray-400">Powered by Obzolende Digital Technology</p>
            <p className="text-sm text-gray-500">Making shopping easy at your fingertips with Pi coins</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
