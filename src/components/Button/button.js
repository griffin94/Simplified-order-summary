function setupProceedToPaymentButton(element) {
  element.addEventListener('click', () => {
    element.classList.toggle('button--loading');
  });
}

export default setupProceedToPaymentButton;
