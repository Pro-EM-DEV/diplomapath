import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Please add OPENAI_API_KEY to .env.local" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // System prompt for the Career Guru
    const systemMessage = {
      role: 'system',
      content: `You are Career Guru, an expert career counselor for diploma engineering students in India. 
      You help students choose between paths like B.Tech lateral entry, jobs, government exams (SSC JE, RRB JE), or starting a business.
      Be encouraging, concise, and provide actionable, practical advice specific to the Indian engineering context. 
      Limit your responses to 2-3 short paragraphs to fit nicely in a chat UI.`
    };

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Can be upgraded to gpt-4 if preferred
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0]?.message?.content || "I'm having trouble thinking right now. Please try again.";

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error('OpenAI Error:', error);
    return NextResponse.json(
      { error: error.message || "An error occurred during the request." },
      { status: 500 }
    );
  }
}
