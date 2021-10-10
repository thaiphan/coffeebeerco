export interface Product {
  index: number;
  isSale: boolean;
  price: string;
  productImage: string;
  productName: string;
  // It is also possible to have this as an enum or a string depending on
  // requirements
  type: 'Beer' | 'Wine' | 'Spirits' | 'Cider';
}
