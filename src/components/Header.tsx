import { Counter } from '@/components/Counter'

export const Header = () => {
  return (
    <header className="m-10 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl text-center font-bold">Torneo Interno de Fifa</h1>
      <p className="text-center">
        Inscribete al primer torneo interno de Fifa de la U-ERRE, en colaboracion con la Mesa ITC y Manos
        Regias
      </p>
      <Counter />
    </header>
  )
}
