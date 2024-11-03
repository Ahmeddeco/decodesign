export default function Page({ params }) {
	const article = params.article
	return (
		<h1 className='text-white h-screen text-5xl flex  items-center justify-center'>article page {article}</h1>
	)
}
