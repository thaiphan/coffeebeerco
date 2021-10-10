import Image from 'next/image';

export interface ProductCardProps {
  image: string;
  title: string;
  category?: string;
  price: string;
  isSale: boolean;
}

/**
 * I personally prefer to not to extract components out like this until it needs
 * to be re-used somewhere else. However, I've done it here just to demonstrate
 * how I would manage a Next.js file structure -- I like to use Brad Frost's
 * Atomic Design.
 */
export const ProductCard = (props: ProductCardProps) => {
  return (
    <article className="group relative">
      {props.isSale ? (
        <div className="absolute left-0 top-2 z-10 bg-red-600 text-white px-4 py-1 font-bold">
          Sale
        </div>
      ) : null}
      <Image
        className="group-hover:opacity-75"
        src={props.image}
        height={300}
        width={400}
        layout="responsive"
      />
      <h3 className="font-bold mt-2">{props.title}</h3>
      {props.category ? (
        <p className="text-gray-700">{props.category}</p>
      ) : null}
      <p className="mt-2">
        <span
          className={props.isSale ? 'line-through text-red-600' : undefined}
        >
          {props.price}
        </span>
        {props.isSale ? <span className="ml-1">{props.price}</span> : null}
      </p>
    </article>
  );
};
