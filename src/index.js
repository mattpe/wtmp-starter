import './styles/styles.scss';

// eslint-disable-next-line no-undef
console.log('Hello console! Am I in production mode?', PRODUCTION);

// PWA is generated only when building in production mode
// eslint-disable-next-line no-undef
if (PRODUCTION && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
