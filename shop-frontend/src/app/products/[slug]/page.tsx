import ProductDetails from "@/features/components/ProductDetails";
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;



  return (
   <div className="container w-full bg-gray-50">           
        <ProductDetails slug={slug} />
   </div>
  );
}

export default Page;