import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_ZDY3FuZU_MnUnCDi98eN1p4XhrD6cvqQZ")

export async function POST(request: Request) {
  try {
    const { name, email, company, quantity, notes, leatherName } = await request.json()

    if (!name || !email || !leatherName) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, leatherName)." },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vertexleather786@gmail.com",
      subject: `New Inquiry: ${leatherName} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1c1917; max-width: 600px; border: 1px solid #e7e5e4; rounded: 8px;">
          <h2 style="font-family: serif; border-bottom: 2px solid #b8901c; padding-bottom: 10px; color: #1c1917;">Vertex Leathers - Inquiry Request</h2>
          <p style="font-size: 14px; line-height: 1.5; color: #44403c;">You have received a new sample & quote inquiry from the Vertex website portal. Details are listed below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; width: 160px; font-size: 13px; color: #78716c; text-transform: uppercase;">Requested Leather</td>
              <td style="padding: 10px 0; font-weight: 500; font-size: 14px;">${leatherName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase;">Customer Name</td>
              <td style="padding: 10px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase;">Business Email</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #b8901c; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase;">Company</td>
              <td style="padding: 10px 0; font-size: 14px;">${company || "Not Specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e7e5e4;">
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase;">Est. Quantity (Sq. Ft)</td>
              <td style="padding: 10px 0; font-size: 14px; font-weight: 600;">${quantity} Sq. Ft</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; font-size: 13px; color: #78716c; text-transform: uppercase; vertical-align: top;">Notes & Requirements</td>
              <td style="padding: 10px 0; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${notes || "No custom specifications provided."}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px dashed #e7e5e4; font-size: 11px; color: #a8a29e; text-align: center;">
            This email was automatically dispatched from the Vertex Leathers inquiry system.
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
