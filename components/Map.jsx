import React from "react";

export default function Map() {
  const [a, setA] = React.useState();
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.9613579268844!2d88.37436382442537!3d22.953073191139744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1714185826829!5m2!1sen!2sin"
        width="250"
        height="250"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

// moitreyo added this
