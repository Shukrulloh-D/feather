import { Hero } from './hero/hero'
import { ShopByRoom } from './shop-by-room/shop-by-room'
import { Mission } from './mission/mission'
import { PromoSections } from './promo-sections/promo-sections'
import { Bestsellers } from './bestsellers/bestsellers'
import { FloydBanner } from './floyd-banner/floyd-banner'
import { Reviews } from './reviews/reviews'
import { EaseBanner } from './ease-banner/ease-banner'
import { FinalCta } from './final-cta/final-cta'

// Страница собирается из секций в порядке макета.
// Секции живут внутри страницы, потому что больше нигде не повторяются
export function HomePage() {
  return (
    <>
      <Hero />
      <ShopByRoom />
      <Mission />
      <PromoSections />
      <Bestsellers />
      <FloydBanner />
      <Reviews />
      <EaseBanner />
      <FinalCta />
    </>
  )
}
