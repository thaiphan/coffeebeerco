import Image from 'next/image';

export interface ProductCardProps {
  image: string;
  title: string;
  category?: string;
  price: String;
}

/**
 * I personally prefer to not to extract components out like this until it needs
 * to be re-used somewhere else. However, I've done it here just to demonstrate
 * how I would manage a Next.js file structure -- I like to use Brad Frost's
 * Atomic Design.
 */
export const ProductCard = (props: ProductCardProps) => {
  return (
    <article className="group">
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
      <p className="mt-2">{props.price}</p>
    </article>
  );
};
