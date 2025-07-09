import { resend } from "@/lib/resend";
import Join404Email from "@/emails/VerificationEmail";
import type { EmailResponse } from "@/types/EmailResponse";

/**
 * Sends a role-specific “Join 404Devs” form email.
 * @param email       Recipient’s email address
 * @param username    User's name to personalize the email
 * @param role        "Contributor" | "Consultation"
 * @param formLink    The URL of the form the user should fill
 */
export async function sendJoinEmail(
  email: string,
  username: string,
  role: "Contributor" | "Client",
  formLink: string
): Promise<EmailResponse> {
  try {
    await resend.emails.send({
      from: "404Devs <onboarding@resend.dev>",
      to: [email],
      subject: `Welcome to 404Devs – next step as ${role}`,
      react: Join404Email({ username, role, formLink }),
      text: `Hi ${username},

Thanks for your interest in 404Devs as a ${role}.
Please complete this short form so we can get started:

${formLink}

We review every submission within 48 hours and then schedule a quick kickoff call.

— Team 404Devs`,
    });

    return { success: true, message: "Join email sent!" };
  } catch (error) {
    console.error("Error sending join email:", error);
    return { success: false, message: "Failed to send join email" };
  }
}

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<EmailResponse> {
  try {
    await resend.emails.send({
      from: "404Devs <no-reply@404devs.com>",
      to: [email],
      subject: "Your verification code",
      text: `Hello ${username},\n\nYour verification code is ${verifyCode}.\nIt expires in 15 minutes.`,
    });
    return { success: true, message: "Sent successfully!" };
  } catch (err) {
    console.error("Error sending verification e‑mail:", err);
    return { success: false, message: "Failed to send e‑mail" };
  }
}
