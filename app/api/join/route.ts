import { NextResponse } from "next/server";
import { sendJoinEmail } from "@/helper/sendVerification";

export async function POST(req: Request) {
  try {
    const { email, username, role, formLink } = await req.json();

    if (!email || !role || !username) {
      return NextResponse.json(
        { message: "Missing required fields: email, username, or role." },
        { status: 400 }
      );
    }

    // Use custom formLink if provided, or fallback to defaults
    const link =
      formLink ||
      (role === "Consultation"
        ? "https://form-ai-s85w.vercel.app/aiform/21"
        : "https://form-ai-s85w.vercel.app/aiform/19");

    const res = await sendJoinEmail(email, username, role, link);

    if (!res.success) {
      return NextResponse.json({ message: res.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("API /join error:", err);
    return NextResponse.json(
      { message: "Server error while sending email." },
      { status: 500 }
    );
  }
}
