import React from 'react';

interface AdminEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const AdminEmailTemplate: React.FC<Readonly<AdminEmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Nova mensagem de contato!</h1>
    <p>
      Você recebeu uma nova mensagem do formulário de contato do seu site.
    </p>
    <h2>Detalhes do Contato:</h2>
    <ul>
      <li><strong>Nome:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Telefone:</strong> {phone}</li>
    </ul>
    <h2>Mensagem:</h2>
    <p>{message}</p>
  </div>
);

export default AdminEmailTemplate;
