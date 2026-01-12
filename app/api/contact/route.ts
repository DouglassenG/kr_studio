import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.issues },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = result.data

    // Configuração do transportador Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true para 465, false para outras portas (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Configuração do e-mail
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // No Outlook, o 'from' deve ser o seu próprio e-mail ou um alias verificado
      to: process.env.CONTACT_EMAIL_RECEIVER,
      replyTo: email, // Permite que você responda diretamente ao cliente
      subject: `Novo Contato via Site - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366f1;">Novo contato recebido pelo site KR Studio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f4f5; border-radius: 8px;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    }

    // Enviar o e-mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
