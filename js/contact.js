document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.yandex.com.tr",
        Username: "rapor@pakelgida.com",
        Password: "eepkvxllpyjozkjk",
        To: "selimayyildiz@pakelgida.com",
        From: "rapor@pakelgida.com",
        Subject: "Lezzet Durağı - İletişim Mesajı",
        Body: `
            <strong>İsim:</strong> ${name}<br>
            <strong>E-Posta:</strong> ${email}<br>
            <strong>Mesaj:</strong> ${message}
        `
    })
    .then(() => {
        document.getElementById("statusMessage").textContent = "Mesajınız başarıyla gönderildi!";
        document.getElementById("statusMessage").style.color = "green";
        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
        document.getElementById("statusMessage").textContent = "Mesaj gönderimi başarısız oldu!";
        document.getElementById("statusMessage").style.color = "red";
        console.error("Hata:", error);
    });
});
