import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
        <h1 className="title">CONTACTO</h1>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="contact">
          <Link to="https://github.com/WilsonSanFullStack">
            <img src="/github.png" alt="GitHub" />
          </Link>
        </div>

        <div className="contact">
          <a href="https://www.linkedin.com/in/wilsonsan/">
            <img src="/linkendin.png" alt="Linkendin" className=" w-52" />
          </a>
        </div>

        <div className="contact">
          <a href="https://mail.google.com/mail/u/4/#inbox?compose=GTvVlcSHxwPqnbChMGcVwjlXWmSFXqFrbNfxkjPmkJGcFfZlPTVVRtGSzRfvRxjsqgRMsPVrnhWJG">
            <img src="/gmail.png" alt="gmail.com" />
          </a>
        </div>

        <div className="contact">
          <a href="https://wa.me/qr/4V5CDNDQ4SRGG1">
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center subTitle2'>
      <div className='w-16 px-2 animate-spin'>
      <img src="/copyright.png" alt="logo copyright" />
      </div>
      <div className="p-2 text-center">
      <h1 className='font-bold text-xl animate-bounce'>Copy Right 2023 </h1>
      </div>
      
    </div>
    </div>
  );
};

export default Contact;
