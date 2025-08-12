"use client"
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await resend.emails.send({
      from: "Your Name <javiconnectdev@gmail.com>", // اپنا email یہاں لگائیں
      to: email,
      subject: "Subscription Confirmation",
      text: "Thanks for subscribing to our newsletter!",
    });

    res.status(200).json({ message: "Thanks for subscribing!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
