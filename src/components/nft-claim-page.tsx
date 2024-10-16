'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Star, Shield, Zap } from "lucide-react"

export function NftClaimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-purple-600">NFT Claim</div>
        <Button variant="outline" className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="NFT Preview"
              className="rounded-lg shadow-xl"
              width={400}
              height={400}
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800">Claim Your Exclusive NFT</h1>
            <p className="text-lg text-gray-600">
              Don't miss out on this unique opportunity to own a piece of digital art history.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Claim NFT
            </Button>
          </div>
        </div>
      </section>

      {/* About the NFT */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-purple-800 text-center">About the NFT</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            This exclusive NFT is part of a limited collection, featuring unique digital artwork that combines
            elements of abstract expressionism with cutting-edge generative techniques. Each piece is one-of-a-kind
            and represents a fusion of human creativity and artificial intelligence. The intricate details and
            vibrant colors make this NFT a standout piece in any digital art collection.
          </p>
        </div>
      </section>

      {/* About the Creator */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-purple-800 text-center">About the Creator</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Creator Avatar"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold mb-2 text-purple-700">DigitalDreamer</h3>
              <p className="text-gray-600">
                DigitalDreamer is a renowned digital artist with a background in traditional fine arts and computer science.
                Their work explores the intersection of technology and human emotion, pushing the boundaries of what's
                possible in the realm of digital art. With over a decade of experience in the digital art space,
                DigitalDreamer has been featured in numerous virtual galleries and has collaborated with some of the
                biggest names in the NFT world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16 bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Holder Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="h-8 w-8 text-yellow-500" />}
              title="Exclusive Access"
              description="Get VIP access to future drops and special events in the digital art world."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-green-500" />}
              title="Community Membership"
              description="Join a vibrant community of collectors and artists, sharing insights and opportunities."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-500" />}
              title="Royalty Sharing"
              description="Earn a percentage of secondary sales, benefiting from the NFT's increasing value over time."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}