import React from "react";
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFotos}>
        <div className={styles.fotos}>
          <a href="https://github.com/WilsonSanFullStack">
            <img src="/github.png" alt="GitHub" width={250} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://www.linkedin.com/in/wilsonsan/">
            <img src="/linkendin.png" alt="Linkendin" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://mail.google.com/mail/u/4/#inbox?compose=GTvVlcSHxwPqnbChMGcVwjlXWmSFXqFrbNfxkjPmkJGcFfZlPTVVRtGSzRfvRxjsqgRMsPVrnhWJG">
            <img src="/gmail.png" alt="gmail.com" width={200} />
          </a>
        </div>

        {/* <div className={styles.fotos}>
          <a href="https://t.me/+573213041636">
            <img src="/telegram.png" alt="Telegram" width={200} />
          </a>
        </div> */}

        <div className={styles.fotos}>
          <a href="https://wa.me/qr/4V5CDNDQ4SRGG1">
            <img src="/whatsapp.png" alt="WhatsApp" width={200} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
{/* <div className={styles.about}>
      
     
      <div className={styles.containerFotos}>
        <div className={styles.fotos}>
          <a href="https://github.com/ryuksan">
            <img src="../imagen/github.png" alt="GitHub" width={250} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://www.linkedin.com/in/wilson-san-280893265/overlay/contact-info/">
            <img src="../imagen/linkendin.png" alt="Linkendin" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://mail.google.com/mail/u/4/#inbox?compose=GTvVlcSHxwPqnbChMGcVwjlXWmSFXqFrbNfxkjPmkJGcFfZlPTVVRtGSzRfvRxjsqgRMsPVrnhWJG">
            <img src="../imagen/gmail.png" alt="gmail.com" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://t.me/+573213041636">
            <img src="../imagen/telegram.png" alt="Telegram" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://wa.me/qr/4V5CDNDQ4SRGG1">
            <img src="../imagen/whatsapp.png" alt="WhatsApp" width={200} />
          </a>
        </div>
      </div>
    </div> */}
