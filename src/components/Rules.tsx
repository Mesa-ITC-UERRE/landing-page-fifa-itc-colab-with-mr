import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const Rules = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-xl mx-auto"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Inscripción</AccordionTrigger>
        <AccordionContent>
          La inscripción al torneo tiene un costo de <strong>$50 MXN por integrante del equipo</strong>. 
          El pago deberá realizarse antes del inicio del torneo para confirmar la participación.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Formato del torneo</AccordionTrigger>
        <AccordionContent>
          El torneo se jugará en formato de <strong>eliminación directa</strong>. 
          Los enfrentamientos se determinarán mediante un sorteo previo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Sorteo de selecciones</AccordionTrigger>
        <AccordionContent>
          Antes de iniciar el torneo se realizará un <strong>sorteo de selecciones nacionales</strong>. 
          Cada equipo recibirá una selección asignada al azar y no podrá cambiarla durante el torneo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Configuración de partidos</AccordionTrigger>
        <AccordionContent>
          Los partidos se jugarán con una duración de <strong>6 minutos por tiempo</strong>.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Empates</AccordionTrigger>
        <AccordionContent>
          En caso de empate se jugará <strong>tiempo extra</strong>. 
          Si el empate continúa, el ganador se definirá mediante <strong>tanda de penales</strong>.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Semifinales y Final</AccordionTrigger>
        <AccordionContent>
          Las semifinales y la final se jugarán en formato <strong>ida y vuelta</strong>. 
          El ganador se determinará por marcador global.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Pausas</AccordionTrigger>
        <AccordionContent>
          Cada equipo podrá realizar <strong>máximo 2 pausas por partido</strong> y únicamente cuando el balón esté detenido.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>Controles</AccordionTrigger>
        <AccordionContent>
          Los participantes pueden <strong>traer su propio control</strong> si lo desean.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9">
        <AccordionTrigger>Fair Play</AccordionTrigger>
        <AccordionContent>
          Se espera que todos los participantes mantengan una conducta respetuosa hacia rivales, 
          organizadores y espectadores. No se permitirán insultos, provocaciones, comportamiento 
          antideportivo. El incumplimiento de estas normas puede resultar 
          en advertencias, pérdida del partido o descalificación.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-10">
        <AccordionTrigger>Premiación</AccordionTrigger>
        <AccordionContent>
          Se premiará al <strong>equipo ganador del torneo</strong>.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}