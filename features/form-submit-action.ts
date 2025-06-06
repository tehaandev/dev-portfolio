"use server";
import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";

export default async function formSubmitAction(formData: FormData) {
  try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    const snsClient = new SNSClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      },
    });

    const params = {
      Message: JSON.stringify({
        name,
        email,
        message,
      }),
      TopicArn: process.env.AWS_SNS_TOPIC_ARN,
    };

    const command = new PublishCommand(params);
    const res = await snsClient.send(command);
    if (res.$metadata.httpStatusCode !== 200) {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Failed to submit form");
  }
}

