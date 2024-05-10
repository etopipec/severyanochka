import { type Card } from "@/entities/product/card/types";

interface CardsProps {
  data: {
    title: string;
    listLinkText: string;
    listLinkHref: string;
    items: Card[];
  };
}

export { type CardsProps, type Card };
