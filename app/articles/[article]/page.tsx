export default function Page({ params }: { params: { article: string } }) {
	const article = params.article
	return <main>article number is {article}</main>
}
