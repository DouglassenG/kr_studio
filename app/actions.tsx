"use server";

import { z } from "zod";
import { Resend } from "resend";
import { AdminEmailTemplate } from "@/components/email-template-admin";
import { ClientEmailTemplate } from "@/components/email-template-client";

// ⚠️ ATENÇÃO: Recomendo fortemente voltar a usar process.env
// Se sua chave anterior vazou, gere uma nova no site do Resend.
const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),

  email: z.string().email({ message: "Digite um email válido." }),

  // 👇 AQUI ESTÁ A CORREÇÃO:
  // Removemos o .regex() e usamos .transform() para aceitar qualquer formato
  phone: z
    .string()
    .transform((val) => {
      // Remove tudo que NÃO for número (parênteses, traços, espaços)
      return val.replace(/[^0-9]/g, "");
    })
    .refine((val) => val.length >= 10, {
      // Verifica se sobraram pelo menos 10 dígitos
      message: "Digite um telefone válido com DDD.",
    }),

  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export async function enviarContato(data: z.infer<typeof contactFormSchema>) {
  // Validação dos dados recebidos
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: "Dados do formulário inválidos.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const {
    name: nome,
    email: emailCliente,
    message: mensagem,
    phone, // Este telefone agora conterá apenas números (ex: 51999999999)
  } = result.data;

  try {
    // 1. E-mail para o Admin (VOCÊ)
    await resend.emails.send({
      from: "KR Studio <onboarding@resend.dev>",
      to: ["krstudio@outlook.com.br"],
      subject: `Novo Lead: ${nome}`,
      // Passamos o telefone limpo para o template
      react: (
        <AdminEmailTemplate
          name={nome}
          email={emailCliente}
          phone={phone}
          message={mensagem}
        />
      ),
      replyTo: emailCliente, // Permite responder direto ao cliente
    });

    // 2. E-mail de confirmação para o CLIENTE
    // ⚠️ NOTA IMPORTANTE:
    // Se você não configurou um domínio próprio no Resend (ex: krstudio.com.br),
    // o envio para 'emailCliente' VAI FALHAR com erro 403.
    // Para testar sem domínio, troque [emailCliente] pelo seu próprio email temporariamente.
    await resend.emails.send({
      from: "KR Studio <onboarding@resend.dev>",
      to: [emailCliente],
      subject: "Recebemos seu contato!",
      react: <ClientEmailTemplate name={nome} />,
    });

    return { success: true };
  } catch (error) {
    console.error("ERRO DETALHADO DO RESEND:", error);
    return {
      success: false,
      error: "Ocorreu um erro ao tentar enviar o e-mail pelo serviço.",
    };
  }
}
