import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Aviso Legal — LIT Digital Hub',
  description: 'Condiciones generales de uso y aviso legal de LIT Digital Hub',
}

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-5 py-20">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Aviso Legal</h1>
          <p className="text-gray-500 text-sm mb-12">Condiciones Generales de Uso — Actualizado a abril de 2026</p>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Condiciones Generales de Uso</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Titular</h3>
                  <p>
                    <strong>Nombre:</strong> Lázaro Irimia Terrán<br />
                    <strong>NIF:</strong> 76581166K<br />
                    <strong>Domicilio:</strong> O Pedrón 1, Vilanova de Lourenzá, 27760 Lugo (España)<br />
                    <strong>Email:</strong> lazaroirimia@gmail.com<br />
                    <strong>Actividad:</strong> Servicios de Social Media y Gestión Digital
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">1. Objeto y Ámbito de Aplicación</h3>
                  <p>
                    Las presentes Condiciones Generales de Uso regulan el acceso, navegación y utilización del sitio web www.litdigitalhub.com (en adelante, el "Sitio Web"). El acceso al Sitio Web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este documento.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">2. Condiciones de Acceso</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>El acceso al Sitio Web por parte de los usuarios tiene carácter libre y gratuito.</li>
                    <li>El Sitio Web está dirigido a usuarios mayores de edad.</li>
                    <li>El Titular no asume responsabilidad alguna en caso de que menores de edad faciliten datos a través de la web.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">3. Propiedad Intelectual e Industrial</h3>
                  <p>
                    Lázaro Irimia Terrán es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
                  </p>
                  <p className="mt-3">
                    Queda expresamente prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del Titular.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4. Responsabilidad y Exclusiones</h3>
                  <p>
                    El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Errores u omisiones en los contenidos</li>
                    <li>Falta de disponibilidad del Sitio Web</li>
                    <li>Transmisión de virus o programas maliciosos o lesivos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">5. Modificaciones</h3>
                  <p>
                    El Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">6. Política de Enlaces</h3>
                  <p>
                    En el caso de que en el Sitio Web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, el Titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">7. Legislación Aplicable y Jurisdicción</h3>
                  <p>
                    La relación entre el Titular y el Usuario se regirá por la normativa española vigente. Para la resolución de cualquier conflicto que pudiera surgir, las partes se someten a los juzgados y tribunales de la ciudad de Lugo, salvo que la ley establezca lo contrario por razón de la condición de consumidor del usuario.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600">
              <strong>Contacto:</strong> Para cualquier duda o consulta respecto a este aviso legal, puedes contactarnos en
              <a href="mailto:lazaroirimia@gmail.com" className="text-brand-red hover:underline ml-1">lazaroirimia@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
