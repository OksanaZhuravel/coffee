// export async function generateMetadata({ params, searchParams }: any) {
// 	const post = await FetchData(params.id)
// 	return {
// 		title: post.title,
// 		description: post.body,
// 	}
// }
// async function FetchData(name: string) {
// 	const res = await fetch('http://localhost:3000/api/data' + name)
// 	const result = await res.json()
// 	console.log(result)

// 	return result
// }
export default async function PageName({ params: { name } }: any) {
	// const post = await FetchData(name)
	// console.log(post)

	return (
		<div>
			name
			{name}
			{/* <span>{name}</span>
			{name.title}
			{name.body} */}
		</div>
	)
}
