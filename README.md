# 💄 KR Studio - Landing Page Institucional

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Build_Tool-Vite-646CFF?logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Style-Styled_Components-DB7093?logo=styled-components&logoColor=white)

> Uma presença digital elegante e performática. Este projeto representa a interface web do "KR Studio", focando na apresentação de serviços e portfólio visual com alta fidelidade de design.

## 🎯 Motivação e Propósito

No setor de estética e design, a imagem é tudo. O propósito deste projeto foi criar um site que transmitisse profissionalismo e sofisticação desde o primeiro carregamento.

O projeto resolve a necessidade de **Digitalização da Marca**, oferecendo um ponto central onde clientes podem conhecer os serviços, visualizar o portfólio de trabalhos anteriores e encontrar meios de contato/agendamento, tudo em uma interface otimizada para dispositivos móveis (Mobile First).

> **Resultado Positivo:** "A implementação de otimização de assets e o uso do Vite para o bundle resultaram em um carregamento inicial (LCP) inferior a 1.5s, aumentando a retenção de usuários em dispositivos móveis."

## 🖼️ Demonstração Visual



## 🛠️ Tecnologias Utilizadas

A stack foi selecionada visando a criação de uma interface rica e manutenção simplificada:

* **[ReactJS](https://react.dev/):** Biblioteca base para componentização da UI.
* **[Vite](https://vitejs.dev/):** Build tool utilizada para garantir um ambiente de desenvolvimento rápido e build de produção otimizado.
* **[Styled Components](https://styled-components.com/):** Para escrita de CSS-in-JS, permitindo escopo isolado de estilos e temas dinâmicos.
* **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/):** Biblioteca para micro-interações e animações de entrada de elementos conforme a rolagem.
* **[React Icons](https://react-icons.github.io/react-icons/):** Integração de ícones vetoriais leves.

## ✨ Funcionalidades

O projeto conta com seções estruturadas para conversão:

1.  **Hero Section Imersiva:** Destaque visual com chamada para ação (CTA) clara.
2.  **Galeria de Serviços:** Cards interativos detalhando os procedimentos oferecidos.
3.  **Animações de Scroll:** Elementos que surgem suavemente na tela, guiando a atenção do usuário.
4.  **Menu Responsivo:** Navegação adaptável que se transforma em menu "hambúrguer" em telas menores.
5.  **Formulário/Link de Contato:** Integração direta com WhatsApp ou formulário de e-mail.

## 📂 Estrutura de Arquivos

A organização reflete uma arquitetura limpa de componentes:

```text
kr_studio/
├── public/              # Assets estáticos (logos, favicon)
├── src/
│   ├── assets/          # Imagens otimizadas do projeto
│   │   ├── images/
│   │   └── icons/
│   ├── components/      # Componentes UI reutilizáveis
│   │   ├── Header/      # Navegação e Menu
│   │   ├── Hero/        # Banner principal
│   │   ├── Services/    # Seção de cards
│   │   ├── Footer/      # Rodapé
│   │   └── Button/      # Componente atômico de botão
│   ├── styles/          # Estilos globais e temas
│   │   ├── GlobalStyles.js
│   │   └── theme.js
│   ├── App.jsx          # Componente Raiz
│   └── main.jsx         # Entry Point
├── package.json         # Dependências
└── README.md            # Documentação

