import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()
export async function GET(request: Request) {
	const menuItems = await prisma.menuItem.findMany({
		include: {
			sizes: true,
			additives: true,
		},
	})
	console.log(menuItems)
	return NextResponse.json({ menuItems })
}
