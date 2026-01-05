import { NextResponse } from "next/server"
import { z } from "zod"

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

    // Here you would typically send an email using Resend, SendGrid, etc.
    // For now, we'll simulate a successful submission.
    
    // const { name, email, phone, message } = result.data
    // await sendEmail({ to: "krstudio@outlook.com.br", ... })

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
