import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // ✅ HANDLE CORS PRE-FLIGHT
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const raw = await req.text();
    console.log("RAW BODY:", raw);

    if (!raw) {
      return new Response("EMPTY BODY", { status: 400, headers: corsHeaders });
    }

    const body = JSON.parse(raw);

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    await resend.emails.send({
      from: "Nexora Tech <onboarding@resend.dev>",
      to: "auns5757@gmail.com",
      subject: "New Lead",
      html: `
        <h2>New Contact</h2>
        <p>Name: ${body.full_name}</p>
        <p>Email: ${body.email}</p>
        <p>Company: ${body.company}</p>
        <p>Service: ${body.service}</p>
        <p>Budget: ${body.budget}</p>
        <p>Message: ${body.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    console.log("ERROR:", err);

    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});