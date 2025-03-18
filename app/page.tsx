import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, Type } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Text Generator</h1>
          <p className="text-gray-300 mb-8">Choose your generation type</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/text-to-image" className="block">
            <Card className="p-6 hover:bg-gray-50 transition-colors cursor-pointer h-full">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <ImageIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold">Text to Image</h2>
                <p className="text-gray-600 text-center">
                  Convert your text descriptions into beautiful, AI-generated images
                </p>
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
          </Link>

          <Link href="/text-to-text" className="block">
            <Card className="p-6 hover:bg-gray-50 transition-colors cursor-pointer h-full">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Type className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold">Text to Text</h2>
                <p className="text-gray-600 text-center">
                  Generate creative text content using advanced AI technology
                </p>
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}