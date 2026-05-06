import React, { useState } from "react";
import { FaWhatsapp} from "react-icons/fa"


const Contact = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0); // ✅ FIXED

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const cleanPhone = phone.replace(/\s+/g, "");
    const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (

    
    <div className="min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1622625841997-dfbffc98f4c9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }}
    
    >
     

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6">

        {/* 📞 LEFT SIDE - CONTACT INFO */}
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="mb-6">
            Have questions about our products? Reach out to us anytime. We’re here to help you 24/7.
          </p>

          <div className="space-y-3">
            <p>📞 +91 98765 43210</p>
            <p>📧 support@shop.com</p>
            <p>📍 Kerala, India</p>
          </div>
        </div>

        {/* 📝 RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="tel"
              placeholder="WhatsApp Number (e.g. 919876543210)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border px-4 py-2 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            />

<button type="submit" className=" flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black text-white font-semibold shadow-md hover:bg-green-600 hover:shadow-lg active:scale-95 transition-all duration-200">
  <FaWhatsapp className="text-xl" />
  Send via WhatsApp
</button>


          </form>
        </div>

      </div>
   
      

     
<div className="py-16 px-6">

<h2 className="text-center font-bold text-3xl text-white mb-8">
  Our Location
</h2>

<div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78609831318!2d76.2258916860956!3d9.970864495241543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1777747030451!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
    className="w-full"
  ></iframe>
</div>

</div>

    </div>
  );
};

export default Contact;
