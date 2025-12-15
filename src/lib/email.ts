import emailjs from '@emailjs/browser';
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


// EmailJS configuration
export const EMAILJS_CONFIG = {
    serviceId: serviceId,
    templateId: templateId,
    publicKey: publicKey,
};

// Initialize EmailJS
export const initEmailJS = () => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send email function
export const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
}) => {
    try {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to_name: 'Mirza Usama',
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );

        return { success: true, response };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return { success: false, error };
    }
};