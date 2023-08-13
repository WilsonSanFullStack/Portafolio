import React from "react";

const Contact = () => {
  return (
    <div className="bg-rose-100 pt-12 min-h-screen flex items-center justify-center">
      <div className="m-5 grid grid-cols-2 sm:grid-cols-2 justify-center items-center">
        <div className="contact sm:w-32 sm:h-32">
          <a href="https://github.com/WilsonSanFullStack">
            <img src="/github.png" alt="GitHub"  />
          </a>
        </div>

        <div className="contact sm:w-32 sm:h-32">
          <a href="https://www.linkedin.com/in/wilsonsan/">
            <img src="/linkendin.png" alt="Linkendin" className=" w-52" />
          </a>
        </div>

        <div className="contact sm:w-32 sm:h-32">
          <a href="https://mail.google.com/mail/u/4/#inbox?compose=GTvVlcSHxwPqnbChMGcVwjlXWmSFXqFrbNfxkjPmkJGcFfZlPTVVRtGSzRfvRxjsqgRMsPVrnhWJG">
            <img src="/gmail.png" alt="gmail.com" />
          </a>
        </div>

        <div className="contact sm:w-32 sm:h-32">
          <a href="https://wa.me/qr/4V5CDNDQ4SRGG1">
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
