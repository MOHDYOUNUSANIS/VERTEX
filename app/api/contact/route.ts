import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)." },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vertexleather786@gmail.com",
      subject: `General Contact Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1c1917; max-width: 600px; border: 1px solid #e7e5e4; rounded: 8px;">
          <h2 style="font-family: serif; border-bottom: 2px solid #b8901c; padding-bottom: 10px; color: #1c1917;">Vertex Leathers - Contact Form Submission</h2>
          <p style="font-size: 14px; line-height: 1.5; color: #44403c;">You have received a new contact message from the Vertex website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; width: 160px; font-size: 13px; color: #78716c; text-transform: uppercase;">Sender Name</td>
              <td style="padding: 10px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase;">Email Address</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #b8901c; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px dashed #e7e5e4; font-size: 11px; color: #a8a29e; text-align: center;">
            This email was automatically dispatched from the Vertex Leathers contact system.
          </div>
        </div>
      `
    })

    if (error) {
      console.error("Resend API Error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error("Internal Server Error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
