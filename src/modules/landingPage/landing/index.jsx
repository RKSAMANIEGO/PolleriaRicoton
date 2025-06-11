import { Button, Typography, Layout, Space } from "antd";
import { useNavigate } from "react-router-dom";
import logoPolleria from "../../../assets/logoPolleria.png";
import "./Landing.css"; 

const { Content, Footer } = Layout;
const { Text } = Typography;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout className="landing-layout">
      <Content className="landing-content">
        <img src={logoPolleria} alt="Logo" className="landing-logo" />

        <Button
          type="primary"
          size="large"
          shape="round"
          className="landing-menu-button"
          onClick={() => navigate("/login")}
        >
          Menú
        </Button>
      </Content>

      <Footer className="landing-footer">
        <Space direction="vertical" size={0}>
          <Button type="link" className="landing-link" onClick={() => navigate("/politicas")}>
            Políticas de privacidad
          </Button>
          <Button type="link" className="landing-link" onClick={() => navigate("/terminos")}>
            Términos
          </Button>
        </Space>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
