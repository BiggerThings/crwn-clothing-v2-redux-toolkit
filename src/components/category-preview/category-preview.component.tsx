import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
