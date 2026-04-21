import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Privacidad — LIT Digital Hub',
  description: 'Política de privacidad y protección de datos de LIT Digital Hub',
}

export default function PoliticaPrivacidad() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-5 py-20">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Política de Privacidad</h1>
          <p className="text-gray-500 text-sm mb-12">Política de Protección de Datos — Actualizado a abril de 2026</p>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-8">
            <section>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">1. Responsable del Tratamiento</h3>
                  <p>
                    <strong>Nombre:</strong> Lázaro Irimia Terrán<br />
                    <strong>NIF:</strong> 76581166K<br />
                    <strong>Email:</strong> lazaroirimia@gmail.com
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">2. Finalidad del Tratamiento</h3>
                  <p>
                    Tratamos tus datos personales para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Responder a tus consultas y solicitudes</li>
                    <li>Mantener contacto sobre nuestros servicios</li>
                    <li>Mejorar nuestro sitio web y servicios</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">3. Base Jurídica del Tratamiento</h3>
                  <p>
                    El tratamiento de tus datos se fundamenta en:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Tu consentimiento explícito</li>
                    <li>Ejecución de un contrato</li>
                    <li>Cumplimiento de una obligación legal</li>
                    <li>Intereses legítimos del responsable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">4. Datos Personales Recopilados</h3>
                  <p>
                    Recopilamos los siguientes datos a través de nuestros formularios:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Nombre</li>
                    <li>Email</li>
                    <li>Teléfono</li>
                    <li>Información sobre tus necesidades de servicio</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">5. Destinatarios de los Datos</h3>
                  <p>
                    Tus datos personales no serán compartidos con terceros, excepto:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Cuando sea obligatorio por ley</li>
                    <li>A nuestros proveedores de servicios (hosting, email, etc.)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">6. Derechos de los Usuarios</h3>
                  <p>
                    Tienes derecho a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li><strong>Acceso:</strong> Acceder a tus datos personales</li>
                    <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                    <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos</li>
                    <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                    <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                  </ul>
                  <p className="mt-3">
                    Para ejercer estos derechos, contacta a <a href="mailto:lazaroirimia@gmail.com" className="text-brand-red hover:underline">lazaroirimia@gmail.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">7. Seguridad de los Datos</h3>
                  <p>
                    Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso, alteración, pérdida o destrucción no autorizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">8. Período de Retención</h3>
                  <p>
                    Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades indicadas o mientras sea requerido por la ley.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">9. Cambios en esta Política</h3>
                  <p>
                    Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Te notificaremos sobre cambios significativos publicando la política actualizada en nuestro sitio web.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">10. Contacto</h3>
                  <p>
                    Para cualquier pregunta sobre esta política o tus derechos relacionados con la privacidad, puedes contactarnos:
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
              Esta política de privacidad cumple con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica 3/2018 (LOPDGDD) de España.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
