"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TextToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateText = async () => {
    if (!input) {
      toast({
        title: "Error",
        description: "Please enter some text",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setOutput(data.text);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-white mb-6 hover:text-gray-300">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">Text to Text Generator</h1>
          <div className="space-y-4">
            <Textarea
              placeholder="Enter your text prompt..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[100px]"
            />
            <Button
              onClick={generateText}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Text"
              )}
            </Button>

            {output && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Generated Text:</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="whitespace-pre-wrap">{output}</p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}