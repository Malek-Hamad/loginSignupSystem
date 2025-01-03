import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

console.log("Mailtrap Configuration:");
console.log("Endpoint:", process.env.MAILTRAP_ENDPOINT);
console.log("Token:", process.env.MAILTRAP_TOKEN ? "Token Loaded" : "Token Missing");

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP,
});


export const sender = {
	email: "hello@demomailtrap.com",
	name: "Malek",
  };
  
