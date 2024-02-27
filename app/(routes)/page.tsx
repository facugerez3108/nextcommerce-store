import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"; 
import ProductList from "@/components/product-list";

import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";


export const revalidate = 0;
const HomePage = async () => {
    
    const billboard = await getBillboard("cba71923-1f69-47c4-862f-d4e8f6ef8cf3");
    const products = await getProducts({ isFeatured: true});
    
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList  title="Productos destacados" items={products} /> 
            </div>
        </Container>
    )
}

export default HomePage;