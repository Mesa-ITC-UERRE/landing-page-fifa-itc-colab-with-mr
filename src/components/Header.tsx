import logo from '../assets/logo.png'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <header className="m-10 flex flex-col gap-5 justify-center items-center">
      <img
        src={logo.src}
        alt="FIFA ITC Colab with MR"
        width={logo.width}
        height={logo.height}
        className="h-auto w-full max-w-xs"
      />
      <h1 className="text-4xl text-center font-bold">Torneo Interno EA FC 25</h1>
      <p className="text-center">
        Inscribete al torneo benefico de EA FC 25 de la U-ERRE, en colaboracion con la Mesa ITC y Manos
        Regias.
      </p>
      <p>
        La recolección de dinero será para fondear el evento del Día del niño en la Casa Hogar de Guadalupe
      </p>
      <a href="https://forms.cloud.microsoft/r/hdQB9ZEfBh" target="_blank">
        <Button>
          Registrate aquí
        </Button>
      </a>
    </header>
  )
}
