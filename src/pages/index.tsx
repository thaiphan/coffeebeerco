import type { NextPage } from 'next';
import { useGetProductsQuery } from '../store/apis/coffeebeerco';
import { ProductCard } from '../components/molecules/ProductCard';

const Home: NextPage = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="container px-2 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((product) => (
          <ProductCard
            key={product.index}
            image="http://placekitten.com/g/400/300"
            title={product.productName}
            category={product.type}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
