import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

/* =========================
   INIT (outside handler)
========================== */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, service, budget, message } = body;

    /* =========================
       BASIC VALIDATION
    ========================== */
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    /* =========================
       SAVE TO SUPABASE
    ========================== */
    const { error } = await supabase.from("contact_messages").insert([
      {
        full_name: name,
        email,
        company,
        service,
        budget,
        message,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    /* =========================
       SEND EMAIL
    ========================== */
    const emailResponse = await resend.emails.send({
      from: "Nexora Tech <onboarding@resend.dev>",
      to: ["nexoratechintl@gmail.com"],
      subject: `New Contact Lead: ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Service:</strong> ${service || "N/A"}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log("EMAIL SENT:", emailResponse);

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      { error: err.message || "Server Error" },
      { status: 500 }
    );
  }
}