"use client"

import { ArrowLeft, Wallet, TrendingUp, Send, Plus, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

const transactions = [
  {
    id: 1,
    type: "purchase",
    description: "Wireless Headphones",
    amount: -25.5,
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: 2,
    type: "received",
    description: "Pi Mining Reward",
    amount: +50.0,
    date: "2024-01-14",
    status: "completed",
  },
  {
    id: 3,
    type: "purchase",
    description: "Smart Watch",
    amount: -89.99,
    date: "2024-01-13",
    status: "pending",
  },
]

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true)
  const balance = 1247.83

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
            <h1 className="text-xl font-bold">Pi Wallet</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Wallet className="w-6 h-6" />
                <span className="text-lg font-medium">Pi Balance</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBalance(!showBalance)}
                className="text-white hover:bg-white/20"
              >
                {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold">π</span>
                <span className="text-3xl font-bold">{showBalance ? balance.toFixed(2) : "••••••"}</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-100">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">+12.5% this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="h-16 bg-white text-gray-900 border hover:bg-gray-50">
            <div className="flex flex-col items-center space-y-1">
              <Send className="w-5 h-5" />
              <span className="text-sm">Send Pi</span>
            </div>
          </Button>
          <Button className="h-16 bg-white text-gray-900 border hover:bg-gray-50">
            <div className="flex flex-col items-center space-y-1">
              <Plus className="w-5 h-5" />
              <span className="text-sm">Add Pi</span>
            </div>
          </Button>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "purchase" ? "bg-red-100" : "bg-green-100"
                    }`}
                  >
                    {transaction.type === "purchase" ? (
                      <span className="text-red-600 text-sm">π</span>
                    ) : (
                      <span className="text-green-600 text-sm">π</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={`flex items-center space-x-1 ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <span className="font-bold">
                      {transaction.amount > 0 ? "+" : ""}π{Math.abs(transaction.amount)}
                    </span>
                  </div>
                  <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Wallet Info */}
        <Card>
          <CardHeader>
            <CardTitle>Wallet Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Wallet Address</p>
                <p className="font-mono text-sm break-all">π1A2B3C4D5E6F7G8H9I0J...</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Network</p>
                <p className="font-medium">Pi Mainnet</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> Your Pi coins are secured by the Pi Network blockchain. Always verify transaction
                details before confirming payments.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
