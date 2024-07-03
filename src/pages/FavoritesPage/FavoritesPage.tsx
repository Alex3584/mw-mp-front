import React from "react"
import { PageWrapper } from "App.styled"
import ProductCard from "blocks/ProductCard"
import { selectFavorites } from "features/Favorites/selectors"
import { ProductGroupContainer } from "pages/HomePage/styled"
import { dummyProducts } from "pages/dummyProducts"
import { Helmet } from "react-helmet"
import { useAppSelector } from "store"

const FavoritesPage: React.FC = () => {
  const idsInFavorites = useAppSelector(selectFavorites)

  return (
    <>
      <Helmet>
        <title>Главная - MW Market</title>
      </Helmet>

      <PageWrapper>
        <h2>Избранное</h2>

        {idsInFavorites.length ? (
          <ProductGroupContainer>
            {dummyProducts
              .filter((p) => idsInFavorites.includes(p.id))
              .map((p) => (
                <ProductCard
                  {...p}
                  key={p.id}
                  isLiked={false}
                  hideLikes={true}
                />
              ))}
          </ProductGroupContainer>
        ) : (
          <p>Пока в избранном ничего нет</p>
        )}
      </PageWrapper>
    </>
  )
}

export default FavoritesPage