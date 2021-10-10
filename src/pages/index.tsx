import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useMemo, useState } from 'react';

import { Select } from '../components/atoms/Select';
import { ProductCard } from '../components/molecules/ProductCard';
import { useGetProductsQuery } from '../store/apis/coffeebeerco';

const Home: NextPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'None' | string>('None');

  const { data = [] } = useGetProductsQuery();

  const uniqueProductTypes = useMemo(() => {
    const productTypes = new Set<string>();

    data.forEach((product) => {
      productTypes.add(product.type);
    });

    return Array.from(productTypes);
  }, [data]);

  const filterOptions = useMemo(() => {
    const options = [
      {
        value: 'None',
        label: 'All',
      },
    ];

    uniqueProductTypes.forEach((productType) => {
      options.push({
        value: productType,
        label: productType,
      });
    });

    return options;
  }, [uniqueProductTypes]);

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
        {data.map((product) => (
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
