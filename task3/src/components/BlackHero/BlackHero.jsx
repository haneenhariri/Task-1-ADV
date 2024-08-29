import './BlackHero.css'

export default function BlackHero({p,h1}) {
  return (
    <section className='black-hero'>
      <p className='p-black'>{p}</p>
      <h1 className='black-h'>{h1}</h1>
    </section>
  )
}
