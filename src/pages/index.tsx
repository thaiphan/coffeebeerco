import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useMemo, useState } from 'react';

import { Select } from '../components/atoms/Select';
import { ProductCard } from '../components/molecules/ProductCard';
import { ProductCardSkeleton } from '../components/molecules/ProductCardSkeleton';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '../store/apis/coffeebeerco';

const Home: NextPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'None' | string>('None');

  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: products = [], isSuccess } = useGetProductsQuery(
    selectedFilter !== 'None' ? selectedFilter : undefined
  );

  const filterOptions = useMemo(() => {
    const options = [
      {
        value: 'None',
        label: 'All',
      },
    ];

    categories.forEach((category) => {
      options.push({
        value: category,
        label: category,
      });
    });

    return options;
  }, [categories]);

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  return (
    <div className="container px-2 mx-auto">
      <NextSeo title="Products | Coffee Beer Co" />

      <div className="flex justify-end py-4 items-center gap-2">
        <p className="font-bold">Filter by:&nbsp;</p>
        <Select
          onChange={handleFilterChange}
          options={filterOptions}
          value={selectedFilter}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {isSuccess ? (
          products.map((product) => (
            <ProductCard
              key={product.index}
              image="http://placekitten.com/g/400/300"
              title={product.productName}
              category={product.type}
              price={product.price}
              isSale={product.isSale}
            />
          ))
        ) : (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
