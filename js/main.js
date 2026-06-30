  // Update the copyright year automatically.
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile navigation menu.
  const mobileMenu = document.querySelector('.mobileMenu');
  const navLinks = document.querySelector('.links');


  /* Donation Modal Slider */

const donationModal = document.getElementById("donationModal");
const donationSlider = document.getElementById("donationSlider");
const closeDonation = document.getElementById("closeDonation");

const goToPayment = document.getElementById("goToPayment");
const backToDetails = document.getElementById("backToDetails");
const backToMethods = document.getElementById("backToMethods");

const paymentTitle = document.getElementById("paymentTitle");
const paymentDescription = document.getElementById("paymentDescription");
const selectedPaymentBadge = document.getElementById("selectedPaymentBadge");
const phoneLabel = document.getElementById("phoneLabel");
const mobileMoneyFields = document.getElementById("mobileMoneyFields");
const visaFields = document.getElementById("visaFields");

let selectedMethod = "mtn";

function goToStep(step) {
  if (donationSlider) {
    donationSlider.style.transform = `translateX(-${step * 33.3333}%)`;
  }
}

if (donationModal) {
  document.querySelectorAll(".causeBtn, .donateBtn").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      donationModal.classList.add("active");
      goToStep(0);
    });
  });

  closeDonation.addEventListener("click", function () {
    donationModal.classList.remove("active");
  });

  donationModal.addEventListener("click", function (e) {
    if (e.target.classList.contains("donationOverlay")) {
      donationModal.classList.remove("active");
    }
  });

  goToPayment.addEventListener("click", function () {
    goToStep(1);
  });

  backToDetails.addEventListener("click", function () {
    goToStep(0);
  });

  backToMethods.addEventListener("click", function () {
    goToStep(1);
  });

  document.querySelectorAll(".paymentChoice").forEach(choice => {
    choice.addEventListener("click", function () {
      selectedMethod = this.dataset.method;

      if (selectedMethod === "mtn") {
        paymentTitle.textContent = "MTN Mobile Money";
        paymentDescription.textContent = "Enter your MTN number. You will receive a prompt to enter your PIN.";
        selectedPaymentBadge.textContent = "MTN Mobile Money";
        phoneLabel.textContent = "MTN Number";
        mobileMoneyFields.style.display = "block";
        visaFields.style.display = "none";
      }

      if (selectedMethod === "airtel") {
        paymentTitle.textContent = "Airtel Money";
        paymentDescription.textContent = "Enter your Airtel number. You will receive a prompt to enter your PIN.";
        selectedPaymentBadge.textContent = "Airtel Money";
        phoneLabel.textContent = "Airtel Number";
        mobileMoneyFields.style.display = "block";
        visaFields.style.display = "none";
      }

      if (selectedMethod === "visa") {
        paymentTitle.textContent = "VISA Card Payment";
        paymentDescription.textContent = "Enter your VISA card details to complete your donation securely.";
        selectedPaymentBadge.textContent = "VISA Card";
        mobileMoneyFields.style.display = "none";
        visaFields.style.display = "block";
      }

      goToStep(2);
    });
  });
}


  if (mobileMenu && navLinks) {
    mobileMenu.setAttribute('aria-expanded', 'false');

    mobileMenu.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      mobileMenu.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.textContent = isOpen ? '×' : '☰';
    });



    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.textContent = '☰';
      });
    });
  }
