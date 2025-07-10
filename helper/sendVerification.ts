import { transporter } from "@/lib/nodemailer";
import Join404Email from "@/emails/VerificationEmail";
import { render } from "@react-email/render";
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
    const html = await render(Join404Email({ username, role: role as "Contributor" | "Client", formLink })); // render is async
    const text = `Hi ${username},\n\nThanks for your interest in 404Devs as a ${role}.\nPlease complete this short form so we can get started:\n\n${formLink}\n\nWe review every submission within 48 hours and then schedule a quick kickoff call.\n\n— Team 404Devs`;

    await transporter.sendMail({
      from: "404Devs <onboarding@404devs.com>",
      to: String(email),
      subject: `Welcome to 404Devs – next step as ${role}`,
      html: html, // ensure this is a string
      text: text, // ensure this is a string
    });

    return { success: true, message: "Join email sent!" };
  } catch (error) {
    console.error("Error sending join email:", error);
    return { success: false, message: "Failed to send join email" };
  }
}
