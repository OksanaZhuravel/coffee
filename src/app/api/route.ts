import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const prisma = new PrismaClient()

	const favorites = await prisma.favoriteItem.findMany()

	// console.log(favorites)
	return NextResponse.json({ favorites })
}
