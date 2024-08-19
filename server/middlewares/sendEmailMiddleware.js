// emailMiddleware.js
import nodemailer from "nodemailer";

// Create the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "elbcontact18@gmail.com",
    pass: "agzi vken ytqj gjwl", // Use the App Password here
  },
});

const sendEmailMiddleware = async (req, res, next) => {
  const {
    buyer_to,
    seller_to,
    subject,
    seller_text,
    buyer_text,
    postId,
    buyer_uid,
    seller_uid,
  } = req.body;

  // Define the mail options for the seller
  const sellerMailOptions = {
    from: "elbcontact18@gmail.com",
    to: seller_to,
    subject,
    text: seller_text,
  };

  // Define the mail options for the buyer
  const buyerMailOptions = {
    from: "elbcontact18@gmail.com",
    to: buyer_to,
    subject,
    text: buyer_text,
  };

  try {
    // Send email to the seller
    await transporter.sendMail(sellerMailOptions);
    console.log("Email sent to seller");

    // Send email to the buyer
    await transporter.sendMail(buyerMailOptions);
    console.log("Email sent to buyer");

    // Proceed to the next middleware/controller
    next();
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};

export default sendEmailMiddleware;
