import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ProductCard from "blocks/ProductCard";
// import { selectFavorites } from "features/Favorites/selectors";
import { PageWrapper } from "App.styled";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { dummyProducts } from "pages/dummyProducts";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>();

  return (
    <>
      <Helmet>
        <title>Главная - MW Marketplace</title>
      </Helmet>

      <PageWrapper>
        <ProductGroup>
          <h2>Рекомендуемые товары</h2>

          <ProductGroupContainer>
            {dummyProducts.map((p) => (
              <ProductCard
                {...p}
                key={p.id}
                // isLiked={idsInFavorites.includes(p.id)}
              />
            ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  );
};

export default HomePage;
