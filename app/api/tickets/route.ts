import { NextResponse } from "next/server";

import tickets from "@/app/database";

export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const newTicket = {
    id: tickets.length + 1,
    name: body.name,
    status: body.status,
    type: body.type,
  };
  tickets.push(newTicket);
  return NextResponse.json(tickets);
}
