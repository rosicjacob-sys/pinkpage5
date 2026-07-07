import SplitHeading from './SplitHeading'
import Magnetic from './Magnetic'
import { useCart } from '../lib/cart'

export default function FinalCta() {
  const { bundle, add } = useCart()
  return (
    <section id="final-cta" className="final-cta">
      <div className="container final-inner">
        <SplitHeading as="h2" className="final-title">
          Ready when <em>you</em> are.
        </SplitHeading>
        <Magnetic>
          <button className="btn btn-lg" onClick={() => add(bundle.id === 'triple' ? 3 : 1)}>
            Add to cart — ${bundle.price}
            {bundle.id === 'sub' ? '/mo' : ''}
          </button>
        </Magnetic>
        <p className="mono-label final-trust">60-DAY GUARANTEE · SHIPS IN 24H · CANCEL ANYTIME</p>
      </div>
    </section>
  )
}
