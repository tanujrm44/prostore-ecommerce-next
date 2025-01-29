import { Button } from "@/components/ui/button"
import ProductList from "@/components/ui/shared/product/product-list"
import data from "@/db/sample-data"
export default function page() {
  return <ProductList data={data.products} title="Newest Arrivals" limit={4} />
}
