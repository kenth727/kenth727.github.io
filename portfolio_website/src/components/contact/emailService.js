import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
  try {
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);
    const result = await emailjs.send(
      serviceId, // Replace with your EmailJS service ID
      templateId, // Replace with your EmailJS template ID
      formData,
      publicKey // Replace with your EmailJS public key
    );
    return result;
  } catch (error) {
    throw new Error(error.text || 'Failed to send email');
  }
};
