import { Reveal } from '@/shared/ui/reveal'
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
// Секции лежат внутри страницы, потому что больше нигде не повторяются.
// Reveal плавно показывает секцию при прокрутке; Hero виден сразу, поэтому без него
export function HomePage({ onAddToCart }) {
  return (
    <>
      <Hero />
      <Reveal><ShopByRoom /></Reveal>
      <Reveal><Mission /></Reveal>
      <Reveal><PromoSections /></Reveal>
      <Reveal><Bestsellers onAddToCart={onAddToCart} /></Reveal>
      <Reveal><FloydBanner /></Reveal>
      <Reveal><Reviews /></Reveal>
      <Reveal><EaseBanner /></Reveal>
      <Reveal><FinalCta /></Reveal>
    </>
  )
}
