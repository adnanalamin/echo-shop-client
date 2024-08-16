import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";


const Product = () => {
    const axiosPublic = useAxiosPublic();
  const { data: packeges = [12] } = useQuery({
    queryKey: ["packeges"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allProduct");
      return res.data;
    },
  });
    return (
        <div>
            <div className="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">
        {
            packeges.slice(0, 12).map(data => <ProductCard key={data._id} data={data}></ProductCard>)
        }

      </div>
    </div>
        </div>
    );
};

export default Product;