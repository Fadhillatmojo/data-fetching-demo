type Product = {
	"id": number;
	"title": string;
	"price": number;
	"description": string;
};


export default async function ProductsPage() {
	const response = await fetch("http://localhost:3001/products");
	// in next 14 app, without reload, the data that already fetched are saved in the cache folder, so it will not request on the api server
	const products = await response.json();
	return (
		<div className="grid grid-cols-2 gap-2 p-4">
			{products.map((product: Product) => (
				<div key={product.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-black">
					<div className="flex flex-col space-y-1">
						<h2 className="text-lg font-semibold">{product.title}</h2>
						<h2 className="text-sm">Price: $ {product.price}</h2>
					</div>
					<div className="flex flex-col space-y-1 items-end">
						<h2 className="text-md">{product.description}</h2>
					</div>
				</div>
			))}

		</div>
	);
}