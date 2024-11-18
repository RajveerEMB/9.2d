// Payment.jsx
import React, { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    window.location.href = 'https://buy.stripe.com/test_5kAaG759F4vygKI6oo';
  }, []);

  return null;
};

export default Payment;
