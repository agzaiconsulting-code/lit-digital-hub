import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Cookies — LIT Digital Hub',
  description: 'Política de cookies y tecnologías de seguimiento de LIT Digital Hub',
}

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-5 py-20">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Política de Cookies</h1>
          <p className="text-gray-500 text-sm mb-12">Política de Cookies y Tecnologías de Seguimiento — Actualizado a abril de 2026</p>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-8">
            <section>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">1. ¿Qué son las Cookies?</h3>
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Se utilizan para mejorar tu experiencia de navegación, recordar preferencias y analizar cómo utilizas nuestro sitio.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">2. Tipos de Cookies que Utilizamos</h3>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-1">Cookies Esenciales</h4>
                      <p>
                        Necesarias para el funcionamiento correcto del sitio web. Sin ellas, algunas funciones no funcionarían correctamente.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-700 mb-1">Cookies de Rendimiento</h4>
                      <p>
                        Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web, qué páginas visitan y si hay errores. Esto nos permite mejorar continuamente.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-700 mb-1">Cookies de Funcionalidad</h4>
                      <p>
                        Recuerdan tus preferencias y selecciones (idioma, región, tema) para personalizar tu experiencia.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-700 mb-1">Cookies de Marketing</h4>
                      <p>
                        Se utilizan para rastrear tu comportamiento con el fin de entregar publicidad relevante y medir la efectividad de nuestras campañas.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">3. Terceros que Usan Cookies</h3>
                  <p>
                    Utilizamos servicios de terceros que pueden establecer sus propias cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li><strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento de usuarios</li>
                    <li><strong>Proveedores de Hosting:</strong> Para garantizar el funcionamiento técnico del sitio</li>
                    <li><strong>Redes Sociales:</strong> Para integración y seguimiento social</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4. Duración de las Cookies</h3>
                  <p>
                    Las cookies pueden ser:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li><strong>De Sesión:</strong> Se eliminan cuando cierras tu navegador</li>
                    <li><strong>Persistentes:</strong> Se mantienen en tu dispositivo durante un período especificado</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">5. Tu Consentimiento</h3>
                  <p>
                    Al continuar navegando en nuestro sitio web, consenties el uso de cookies según esta política. Puedes cambiar tu consentimiento en cualquier momento.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">6. Cómo Gestionar las Cookies</h3>
                  <p>
                    Puedes controlar y eliminar cookies a través de la configuración de tu navegador:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li><strong>Edge:</strong> Configuración → Privacidad → Borrar datos de exploración</li>
                  </ul>
                  <p className="mt-3">
                    Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">7. Cookies y Privacidad</h3>
                  <p>
                    Las cookies utilizadas en nuestro sitio web están sujetas a nuestra Política de Privacidad. Para obtener más información sobre cómo tratamos tus datos personales, consulta nuestra
                    <a href="/politica-privacidad" className="text-brand-red hover:underline ml-1">Política de Privacidad</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">8. Cambios en esta Política</h3>
                  <p>
                    Podemos actualizar esta política de cookies en cualquier momento. Te recomendamos que revises esta página periódicamente para estar informado de cualquier cambio.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">9. Contacto</h3>
                  <p>
                    Si tienes preguntas sobre nuestro uso de cookies, puedes contactarnos:
                  </p>
                  <p className="mt-3">
                    <strong>Email:</strong> <a href="mailto:lazaroirimia@gmail.com" className="text-brand-red hover:underline">lazaroirimia@gmail.com</a>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600">
              <strong>Nota legal:</strong> Esta política de cookies cumple con la Directiva de Cookies de la UE y las regulaciones españolas sobre comercio electrónico.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
