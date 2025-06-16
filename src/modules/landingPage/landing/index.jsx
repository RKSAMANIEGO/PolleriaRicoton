import { useState } from "react";
import { Button, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import logoPolleria from "../../../assets/logoPolleria.png";
import "./Landing.css";

const { Content } = Layout;
const { Text } = Typography;

const LandingPage = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case "privacy":
        return (
          <div className="landing-text">
            
               <b>Políticas de Privacidad de Carta Digital:</b><br /><br />
              <Text>
            <b>Pollería El Ricoton</b><br /><br />
            <b>1. Recopilación de información personal:</b><br />
            Al utilizar nuestra carta, podremos recopilar información personal como nombre, dirección, número de teléfono, dirección de correo electrónico, entre otros.<br />
            La información personal se recopilará de forma voluntaria proporcionada por los usuarios al registrarse o realizar una compra a través del catálogo.<br /><br />

            <b>2. Uso de la información personal:</b><br />
            En nuestra carta <a href="https://polleria-el-ricoton.glide.page" target="_blank" rel="noopener noreferrer">https://polleria-el-ricoton.glide.page</a><br />
            Utilizaremos la información personal recopilada para brindarle servicios personalizados, procesar sus pedidos, y proporcionarle información relacionada con nuestros productos y promociones.<br />
            Podemos utilizar la información personal para mejorar nuestros servicios y personalizar la experiencia del usuario en nuestra carta digital.<br />
            No compartiremos la información personal con terceros sin su consentimiento previo, a menos que sea requerido por ley o para cumplir con los requisitos de seguridad.<br />
            No venderemos, alquilaremos ni transferiremos su información personal a terceros con fines de marketing.<br /><br />

            <b>3. Seguridad de la información:</b><br />
            Implementaremos medidas de seguridad apropiadas para proteger la información personal contra accesos no autorizados, pérdida o divulgación.<br />
            Utilizaremos protocolos de seguridad para proteger la transmisión de datos confidenciales como la información de pago.<br /><br />

            <b>4. Cookies y tecnologías de seguimiento:</b><br />
            Podemos utilizar cookies y otras tecnologías de seguimiento para recopilar información sobre la forma en que los usuarios interactúan con nuestro catálogo online.<br />
            Estas tecnologías nos ayudarán a mejorar la funcionalidad y personalización del catálogo, así como a ofrecer productos relevantes y publicidad dirigida.<br /><br />

            <b>5. Control de su información personal:</b><br />
            Los usuarios tendrán control sobre su información personal proporcionada en la carta digital.<br />
            Podrán acceder, actualizar o eliminar su información personal a través de su cuenta de usuario, o comunicándose con nuestro servicio de atención al cliente.<br /><br />

            <b>6. Menores de edad:</b><br />
            Nuestro catálogo online no está dirigido a menores de edad y no recopilaremos intencionalmente información personal de ellos sin el consentimiento de un padre o tutor.<br /><br />

            <b>7. Cambios en la política de privacidad:</b><br />
            Nos reservamos el derecho de realizar cambios en nuestra política de privacidad en cualquier momento.<br />
            Se les notificará a los usuarios sobre los cambios en la política de privacidad a través de nuestra carta digital.<br /><br />

            <b>Pollería El Ricoton</b><br />
            Al utilizar nuestra carta digital, usted acepta y consiente nuestras políticas de privacidad.
          </Text>

          </div>
        );
      case "terms":
        return (
          <div className="landing-text">
            <Text>
  <b>Términos y condiciones de la carta digital:</b><br /><br />

  <b>Pollería El Ricoton</b><br /><br />

  1. Al acceder y utilizar este catálogo online, el usuario acepta los términos y condiciones establecidos a continuación. Si no está de acuerdo con estos términos, le solicitamos abstenerse de utilizar este servicio.<br /><br />

  2. La carta digital <a href="https://polleria-el-ricoton.glide.page" target="_blank" rel="noopener noreferrer">https://polleria-el-ricoton.glide.page</a> tiene como objetivo proporcionar información detallada sobre nuestros productos y servicios. Sin embargo, no garantizamos la exactitud, integridad o actualidad de la información contenida en el catálogo y no nos hacemos responsables por cualquier error u omisión en los detalles de los productos u otra información.<br /><br />

  3. Los precios y la disponibilidad de los productos en el catálogo están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar los precios, descripciones y especificaciones de los productos en cualquier momento sin ninguna obligación de notificación.<br /><br />

  4. El contenido de la carta digital, incluyendo imágenes, textos y logotipos, está protegido por derechos de autor y otros derechos de propiedad intelectual. Queda estrictamente prohibida cualquier reproducción, distribución, modificación o uso no autorizado del contenido sin nuestro consentimiento expreso por escrito.<br /><br />

  5. Para adquirir algún producto de la carta digital, el usuario deberá completar el proceso de compra proporcionando información personal y de pago. La información suministrada deberá ser precisa, completa y veraz. Nos reservamos el derecho de rechazar cualquier pedido si la información proporcionada es considerada falsa o engañosa.<br /><br />

  6. No nos hacemos responsables por cualquier daño o perjuicio directo, indirecto, consecuente o incidental derivado del uso o la imposibilidad de utilizar el catálogo online, incluyendo, entre otros, pérdida de datos, interrupción del negocio o cualquier otra pérdida financiera.<br /><br />

  7. Nos esforzamos por mantener el catálogo online libre de virus informáticos y otros elementos perjudiciales. Es responsabilidad del usuario contar con las medidas adecuadas y actualizadas de seguridad informática para proteger su dispositivo y su información.<br /><br />

  8. Nos reservamos el derecho de suspender, modificar o discontinuar el catálogo online en cualquier momento y sin previo aviso.<br /><br />

  9. Estos términos y condiciones se rigen por las leyes vigentes de <i>(país)</i> y cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de <i>(ciudad, país)</i>.<br /><br />

  Al utilizar esta carta digital, el usuario acepta cumplir con estos términos y condiciones. Le recomendamos revisar periódicamente estos términos, ya que podrían actualizarse ocasionalmente.
</Text>

          </div>
        );
      default:
        return (
          <div className="landing-text">
            <h1>Bienvenido a Pollería El Ricoton</h1>
          </div>
        );
    }
  };

  return (
    <Layout className="landing-layout-horizontal">

      <div className="landing-sidebar">
        <img src={logoPolleria} alt="Logo" className="landing-logo" />

        
        <Button
          className="landing-sidebar-button menu-button"
          onClick={() => navigate("/login")}
        >
          Menú
        </Button>

 
        <Button
          className={`landing-sidebar-button ${selectedSection === "privacy" ? "active" : ""}`}
          onClick={() => setSelectedSection("privacy")}
        >
          Políticas de privacidad
        </Button>

        <Button
          className={`landing-sidebar-button ${selectedSection === "terms" ? "active" : ""}`}
          onClick={() => setSelectedSection("terms")}
        >
          Términos y condiciones
        </Button>
      </div>

      {/* Área de contenido */}
      <Content className="landing-main-content">
        {renderContent()}
      </Content>
    </Layout>
  );
};

export default LandingPage;
