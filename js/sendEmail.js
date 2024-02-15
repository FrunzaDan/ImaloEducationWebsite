// the host is EMAILJS https://dashboard.emailjs.com/admin/account

const serviceID = "service_5r2odqt";
const templateID = "template_ukta2bb";
const publicKey = "BdxEcu5ywdwa_-ej6";

let popupEmail = document.getElementById("popupEmail");

function openPopup() {
  popupEmail.classList.add("open-popup");
}

function closePopup() {
  popupEmail.classList.remove("open-popup");
}

function sendEmail() {
  var params = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    from_tel: document.getElementById("from_tel").value,
    from_message: document.getElementById("from_message").value,
  };

  document.getElementById("emailPopupTextHeader").innerHTML = "Bună, " + from_name.value;
  document.getElementById("emailPopupTextParagraph").innerHTML = "Se trimite... ";

  emailjs.send(serviceID, templateID, params, publicKey)
    .then(function (response) {
      if (response.status == 200) {
        console.log('EMAIL SUCCESS!', response.status, response.text);
        document.getElementById("emailPopupTextParagraph").innerHTML = "Mesajul tău a fost trimis cu succes! ";
      }
      else {
        console.log('EMAIL FAILED...', error);
        document.getElementById("emailPopupTextParagraph").innerHTML = "Serverele noastre sunt pline, te rog să trimiți un E-mail către imaloeducation@gmail.com. ";
      }

    }, function (error) {
      console.log('EMAIL FAILED...', error);
      document.getElementById("emailPopupTextParagraph").innerHTML = "Serverele noastre sunt pline, te rog să trimiți un E-mail către imaloeducation@gmail.com. ";
    });

  openPopup();
  setTimeout(closePopup, 8000);
}
