import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { email, city, role } = await req.json();

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.supabase_project_url!,
    process.env.supabase_service_role_key!
  );

  const resend = new Resend(process.env.resend_api_key);

  // Persist to Supabase
  const { error: dbError } = await supabase
    .from("waitlist")
    .insert({ email, city: city || null, role: role || null });

  if (dbError) {
    return Response.json({ error: dbError.message }, { status: 500 });
  }

  // Confirmation email to the user
  await resend.emails.send({
    from: "PostHumanAPI <onboarding@resend.dev>",
    to: email,
    subject: "You're on the list.",
    html: `
      <p>We got your request.</p>
      <p>We're starting in New York, Singapore, and London. When we open in your city, a real person will reach out.</p>
      <p>No automation. No bots. Just us.</p>
      <br/>
      <p>— PostHumanAPI</p>
    `,
  });

  // Internal notification to the team
  const notifyEmails = (process.env.notify_emails ?? "").split(",").map(e => e.trim()).filter(Boolean);
  if (notifyEmails.length > 0) {
    await resend.emails.send({
      from: "PostHumanAPI <onboarding@resend.dev>",
      to: notifyEmails,
      subject: `New waitlist signup: ${email}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city || "not provided"}</p>
        <p><strong>Role:</strong> ${role || "not selected"}</p>
      `,
    });
  }

  return Response.json({ success: true });
}
