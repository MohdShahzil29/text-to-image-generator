import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: process.env.NEBIUS_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req : Response) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "deepseek-ai/DeepSeek-V3",
      max_tokens: 512,
      temperature: 0.3,
      top_p: 0.95,
      messages: [{ role: "user", content: prompt }] // Include the prompt here
    });

    console.log("Response", completion);

    return NextResponse.json({
      text: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { error: "Failed to generate text" },
      { status: 500 }
    );
  }
}
