import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const GET = auth(function GET(req) {
  if (req.auth) {
    console.log('ok')
    NextResponse.json({ message: 'get data' })
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
})

export const PATCH = auth(function PATCH(req) {
  if (req.auth) return NextResponse.json(req.auth)
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
})