/* eslint-disable react/no-unescaped-entities */
import {
  Html,
  Head,
  Font,
  Preview,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
  Hr, // Added Horizontal Rule for better visual separation
} from "@react-email/components";

interface Join404EmailProps {
  username: string;
  role: "Contributor" | "Client";
  formLink: string;
}

export default function Join404Email({
  username,
  role,
  formLink,
}: Join404EmailProps) {
  const brand = {
    primary: "#FAFAD2", // Light yellow/cream
    secondary: "#2563eb", // Strong blue for button
    bg: "#F8F9FA", // Slightly brighter background for more contrast
    text: "#212529", // Darker text for better readability
    gray: "#6C757D", // Slightly darker gray for subtle text
    border: "#E9ECEF", // Light border for subtle separation
  };
  return (
    <Html lang="en">
      <Head>
        <title>Welcome to 404Devs!</title>
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Helvetica", "Arial", "sans-serif"]}
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", // Added 500 weight for more flexibility
            format: "woff2",
          }}
          fontStyle="normal"
          fontWeight={400}
        />
      </Head>

      <Preview>{`Hi ${username}, let’s get your ${role.toLowerCase()} journey started at 404Devs. We're excited to have you!`}</Preview>

      <Section style={{ backgroundColor: brand.bg, padding: "40px 0" }}>
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)", // Slightly stronger shadow
            fontFamily: "Inter, sans-serif",
            border: `1px solid ${brand.border}`, // Subtle border for definition
          }}
        >
          {/* Header/Banner Section */}
          <Section
            style={{
              backgroundColor: brand.primary,
              textAlign: "center",
              padding: "32px",
              borderBottom: `1px solid ${brand.border}`, // Visual separation
            }}
          >
            <Heading
              as="h1" // Changed to h1 for primary heading
              style={{
                fontSize: "32px", // Slightly larger for impact
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.8px", // Tighter letter spacing
                color: brand.text, // Changed to brand.text for consistency and readability against primary
              }}
            >
              Welcome to 404Devs! 🎉
            </Heading>
            <Text
              style={{
                marginTop: "12px", // Increased margin
                fontSize: "18px", // Slightly larger
                color: brand.gray, // Using gray for secondary text
                lineHeight: "1.5",
              }}
            >
              We're thrilled to have you join our community as a{" "}
              <strong>{role}</strong>.
            </Text>
          </Section>

          {/* Body Content Section */}
          <Section style={{ padding: "32px 40px" }}>
            <Heading
              as="h3"
              style={{
                color: brand.text,
                fontSize: "22px", // Slightly larger
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Hello {username},
            </Heading>

            <Text
              style={{
                color: brand.text,
                fontSize: "16px",
                lineHeight: "1.7", // Improved line height for readability
                marginBottom: "24px",
              }}
            >
              Thank you for choosing <strong>404Devs</strong>! We’re excited to embark on this
              journey with you, whether you're bringing innovative ideas to life
              as a <strong>Client</strong> or contributing your expertise as a <strong>Contributor</strong>.
            </Text>

            {/* Call to Action */}
            <Row style={{ textAlign: "center", margin: "32px 0" }}>
              <Column>
                <Button
                  href={formLink}
                  style={{
                    backgroundColor: brand.secondary,
                    color: "#FFFFFF",
                    padding: "16px 32px", // Slightly more padding
                    borderRadius: "8px",
                    fontWeight: 700, // Bolder
                    fontSize: "17px", // Slightly larger text
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.2)", // Subtle shadow for the button
                  }}
                >
                  {role === "Contributor"
                    ? "Complete Your Contributor Profile"
                    : "Submit Your Project Brief"}
                </Button>
              </Column>
            </Row>

            <Text
              style={{
                color: brand.text,
                fontSize: "15px",
                lineHeight: "1.7",
                marginTop: "24px",
              }}
            >
              This quick form helps us understand your needs or skills better and
              ensures we can provide the best possible experience right from the start.
            </Text>

            <Hr style={{ borderColor: brand.border, margin: "36px 0" }} /> {/* Horizontal Rule */}

            {/* How We Work Section */}
            <Heading
              as="h4"
              style={{
                fontSize: "20px", // Slightly larger
                fontWeight: 600,
                margin: "0 0 16px",
                color: brand.text,
              }}
            >
              Here's What Happens Next:
            </Heading>

            <Text style={{ color: brand.text, fontSize: "16px", lineHeight: "1.8" }}>
              <strong style={{ color: brand.text }}>1. Submit your form:</strong> Share the details of your idea, problem, or your valuable skills with us.
              <br />
              <strong style={{ color: brand.text }}>2. Review in 48 hours:</strong> Our lead engineers will carefully review your submission and scope out the work involved or the perfect opportunities.
              <br />
              <strong style={{ color: brand.text }}>3. Kick-off call:</strong> We'll schedule a brief call to align on expectations, assign the right resources, and officially kick-off your journey with 404Devs.
            </Text>

            <Hr style={{ borderColor: brand.border, margin: "36px 0" }} /> {/* Horizontal Rule */}

            {/* Footer Text */}
            <Text
              style={{
                marginTop: "32px",
                color: brand.text,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We're genuinely excited to collaborate and <strong>build something impactful</strong>
              together. Your journey with 404Devs starts now!
              <br />
              <br />
              Best regards,
              <br />
              <strong style={{ color: brand.text }}>The 404Devs Team</strong>
            </Text>

            {/* Legal/Disclaimer Footer */}
            <Section style={{ marginTop: "40px", borderTop: `1px solid ${brand.border}`, paddingTop: "20px" }}>
              <Text
                style={{
                  fontSize: "12px",
                  color: "#A0A0A0", // Lighter gray for disclaimer
                  textAlign: "center",
                  lineHeight: "1.5",
                }}
              >
                If you did not request this email, please disregard it. This email was sent by 404Devs.
                <br />
                © {new Date().getFullYear()} 404Devs. All rights reserved.
              </Text>
            </Section>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}