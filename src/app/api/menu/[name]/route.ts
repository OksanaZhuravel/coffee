import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

type Params = {
	name: string
}
export async function GET(request: Request, context: { params: Params }) {
	const prisma = new PrismaClient()
	const name = context.params.name

	const items = await prisma.menuItem.findMany({
		where: {
			name: {
				equals: name,
			},
		},
		include: {
			sizes: true,
			additives: true,
		},
	})

	// console.log(items)
	return NextResponse.json({ items })
}
