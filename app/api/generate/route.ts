import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { tool, input } = await request.json();

    if (!tool || !input) {
      return NextResponse.json(
        { error: "Tool type and input are required" },
        { status: 400 }
      );
    }

    // Get the generative model (Gemini Pro)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let prompt = "";

    // Create appropriate prompts based on the tool
    switch (tool) {
      case "summarize":
        prompt = `Summarize the following text concisely while preserving the key information and main points:\n\n${input}`;
        break;
      case "rephrase":
        prompt = `Rephrase the following text to maintain the same meaning but with different wording and structure:\n\n${input}`;
        break;
      case "chat":
        prompt = `${input}`;
        break;
      case "ideas":
        prompt = `Generate 5 creative and innovative ideas related to the following topic or request:\n\n${input}`;
        break;
      default:
        return NextResponse.json(
          { error: "Invalid tool type" },
          { status: 400 }
        );
    }

    // Generate content using the Gemini API

    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ result: text });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
