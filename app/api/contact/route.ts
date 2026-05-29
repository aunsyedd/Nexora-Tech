import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    /* =========================
       SUPABASE
    ========================== */
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    /* =========================
       SAVE TO DATABASE
    ========================== */
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          full_name: body.name,
          email: body.email,
          company: body.company,
          service: body.service,
          budget: body.budget,
          message: body.message,
        },
      ]);

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    /* =========================
       SEND EMAIL
    ========================== */
const emailResponse = await resend.emails.send({
  from: "Nexora Tech <onboarding@resend.dev>",

  to: ["nexoratechintl@gmail.com"],

  subject: `New Contact Lead: ${body.name}`,

  html: `
    <div style="font-family:Arial;padding:20px;">
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Company:</strong> ${body.company || "N/A"}</p>
      <p><strong>Service:</strong> ${body.service || "N/A"}</p>
      <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    </div>
  `,
});

console.log("EMAIL RESPONSE:", emailResponse);

    return NextResponse.json({
      success: true,
    });

  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        error: err.message || "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}