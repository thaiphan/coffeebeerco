import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { ProductCard } from '../components/molecules/ProductCard';
import { useGetProductsQuery } from '../store/apis/coffeebeerco';

const Home: NextPage = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="container px-2 mx-auto">
      <NextSeo title="Products | Coffee Beer Co" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((product) => (
          <ProductCard
            key={product.index}
            image="http://placekitten.com/g/400/300"
            title={product.productName}
            category={product.type}
            price={product.price}
            isSale={product.isSale}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
