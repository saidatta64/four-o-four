# 404Devs Platform

A modern, production-ready platform for connecting clients and contributors, built with Next.js, TypeScript, Tailwind CSS, and Nodemailer for transactional emails.

---

## 🚀 Features
- **Client/Contributor Onboarding:** Users can request consultations or join as contributors via a beautiful, animated form.
- **Transactional Emails:** Automated, role-based onboarding emails sent using Nodemailer and React Email templates.
- **Responsive UI:** Built with Tailwind CSS for a seamless experience on all devices.
- **Dark Mode:** Fully supported.
- **FAQ, About, Terms, Privacy:** Informational pages included.

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nodemailer](https://nodemailer.com/) (Gmail SMTP)
- [@react-email/components](https://react.email/) (for email templates)

---

## ⚙️ Environment Setup

### 1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd project
```

### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Configure Environment Variables**
Create a `.env.local` file in the root directory with the following:
```env
GMAIL_USER=your_gmail_address@gmail.com
GMAIL_PASS=your_gmail_app_password
```
- Use an [App Password](https://support.google.com/accounts/answer/185833) if 2FA is enabled on your Gmail account.

---

## 🏃 Running Locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Production Build
```bash
npm run build
npm start
```

---

## 🚢 Deployment
- **Vercel:** Recommended for Next.js. Set environment variables in the Vercel dashboard.
- **Other Hosts:** Any Node.js-compatible host will work. Ensure environment variables are set.

---

## 🔑 Environment Variables
| Variable      | Description                        |
|---------------|------------------------------------|
| GMAIL_USER    | Gmail address for sending emails   |
| GMAIL_PASS    | Gmail app password                 |

---

## 📬 API Endpoints

### `POST /api/join`
- **Description:** Handles onboarding form submissions and sends a role-based email.
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "username": "UserName",
    "role": "Client" | "Contributor"
  }
  ```
- **Response:**
  - `{ "success": true, "message": "Email sent successfully!" }`
  - `{ "success": false, "message": "...error..." }`

---

## 🎨 Customization
- **Email Templates:** Edit `emails/VerificationEmail.tsx` for onboarding email content and style.
- **Form UI:** Edit `components/ui/Connect-prop.tsx` for the main onboarding form.
- **FAQ, About, etc.:** Edit pages in `app/` and components in `components/ui/`.

---

## 🐞 Troubleshooting
- **Email not received?**
  - Check spam/junk folder.
  - Ensure Gmail credentials are correct and App Password is used.
  - Check server logs for errors.
- **.env not loaded?**
  - Make sure `.env.local` exists and variables are correct.
- **Build errors?**
  - Run `npm install` to ensure all dependencies are installed.

---

## 🤝 Contact & Support
- For issues, open a GitHub issue or contact the maintainer.
- Contributions welcome!

---

© 2024 404Devs. All rights reserved.
