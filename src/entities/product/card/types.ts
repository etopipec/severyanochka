interface Card {
  id: number;
  img: string;
  name: string;
  price: number;
  priceWithSale: number;
  count?: number;
  sale?: number;
  isLiked?: boolean;
}

export { type Card };
