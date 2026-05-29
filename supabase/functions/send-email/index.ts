// Setup type definitions for built-in Supabase Runtime APIs
import "@supabase/functions-js/edge-runtime.d.ts";

import { Resend } from "npm:resend";

// ADD YOUR RESEND API KEY HERE
const resend = new Resend("re_eJWT6otE_Nnywce7A7uT2mmPeAHi7yv4Ps");

console.log("Send Email Function Started!");

Deno.serve(async (req) => {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      service,
      budget,
      message,
    } = body;

    const response = await resend.emails.send({
      from: "Nexora Tech <onboarding@resend.dev>",
      to: ["nexoratechintl@gmail.com"],
      subject: `New Contact Form Submission - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        response,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});