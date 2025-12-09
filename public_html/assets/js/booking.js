// === BOOKING HELPERS ===
// Phone dialer, SMS, Messenger link preparation

document.addEventListener('DOMContentLoaded', () => {
  // Phone number (TODO: Update with real number)
  const PHONE_NUMBER = '+48123456789';
  const PHONE_CLEAN = '48123456789';

  // Dial phone
  window.dialPhone = function() {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  // Prepare SMS link
  window.prepareSMS = function(message = '') {
    const defaultMessage = encodeURIComponent('Cześć! Chciałbym umówić wizytę w salonie.');
    const smsText = message ? encodeURIComponent(message) : defaultMessage;
    return `sms:${PHONE_CLEAN}?body=${smsText}`;
  };

  // Prepare Messenger link
  window.prepareMessenger = function() {
    // TODO: Update with real Facebook page ID
    return 'https://m.me/salonikuagi';
  };

  // Booking CTA handlers
  document.querySelectorAll('[data-action="call"]').forEach(btn => {
    btn.addEventListener('click', () => dialPhone());
  });

  document.querySelectorAll('[data-action="sms"]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = prepareSMS();
    });
  });

  document.querySelectorAll('[data-action="messenger"]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(prepareMessenger(), '_blank', 'noopener,noreferrer');
    });
  });
});
