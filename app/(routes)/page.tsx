import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"; 
import ProductList from "@/components/product-list";

import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";


export const revalidate = 0;
const HomePage = async () => {
    
    const billboard = await getBillboard("e658fb1e-7e23-4705-9d4c-680ebb68c05e");
    const products = await getProducts({ isFeatured: true});
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Productos destacados" items={products} /> 
            </div>
        </Container>
    )
}

export default HomePage;