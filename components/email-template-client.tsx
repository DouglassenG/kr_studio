import React from "react";

interface ClientEmailTemplateProps {
  name: string;
}

export const ClientEmailTemplate: React.FC<
  Readonly<ClientEmailTemplateProps>
> = ({ name }) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    }}
  >
    <div
      style={{ maxWidth: "600px", margin: "0 auto", border: "1px solid #eee" }}
    >
      {/* Header Colorido */}
      <div
        style={{
          backgroundColor: "#000000",
          padding: "30px 20px",
          textAlign: "center",
        }}
      >
        {/* Se tiver logo, iria aqui. Usando texto como placeholder estilizado */}
        <h2 style={{ color: "#ffffff", margin: 0, letterSpacing: "2px" }}>
          KR STUDIO
        </h2>
      </div>

      <div style={{ padding: "30px" }}>
        <h1 style={{ color: "#111", fontSize: "22px", marginTop: "0" }}>
          Recebemos seu contato, {name}! 🚀
        </h1>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
          Ficamos muito felizes pelo seu interesse. Este email é apenas para
          confirmar que sua mensagem já está conosco.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
          Nossa equipe responderá em breve. Enquanto aguarda, convidamos você a
          explorar nossos projetos recentes nas redes sociais.
        </p>

        <p style={{ margin: "25px 0" }}>
          <a
            href="https://www.instagram.com/kr.studio.oficial/"
            style={{
              color: "#000",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Ver novidades no Instagram &rarr;
          </a>
        </p>

        <p style={{ marginTop: "40px", fontSize: "16px" }}>
          Um abraço,
          <br />
          <strong>Equipe KR Studio</strong>
        </p>
      </div>

      {/* Footer Discreto */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          textAlign: "center",
          fontSize: "12px",
          color: "#666",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <strong>Segurança:</strong> Certifique-se de que este email veio de{" "}
          <em>krstudio@outlook.com.br</em>.
        </p>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} KR Studio. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </div>
);

export default ClientEmailTemplate;
