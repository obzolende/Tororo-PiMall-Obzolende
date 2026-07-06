"use client"

import { ArrowLeft, User, Settings, Heart, Package, LogOut, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
                <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2">
                  <Badge className="bg-purple-100 text-purple-800">Pioneer Member</Badge>
                  <Badge variant="outline">Verified</Badge>
                </div>
              </div>

              <Button variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">15</div>
              <div className="text-sm text-gray-600">Orders Placed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">π 1,247.83</div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Wishlist Items</div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Options */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/orders"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-gray-600" />
                  <span>My Orders</span>
                </div>
                <span className="text-gray-400">→</span>
              </Link>

              <Link
                href="/wishlist"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-gray-600" />
                  <span>Wishlist</span>
                </div>
                <span className="text-gray-400">→</span>
              </Link>

              <Link
                href="/wallet"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">π</span>
                  </div>
                  <span>Pi Wallet</span>
                </div>
                <span className="text-gray-400">→</span>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span>Account Settings</span>
                </div>
                <span className="text-gray-400">→</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <span>Privacy Settings</span>
                </div>
                <span className="text-gray-400">→</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <Button
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* App Info */}
        <Card>
          <CardContent className="p-4 text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">π</span>
              </div>
              <span className="font-semibold">ObzolendePi Solution</span>
            </div>
            <p className="text-sm text-gray-600">Version 1.0.0</p>
            <p className="text-xs text-gray-500">Powered by Obzolende Digital Technology</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
