window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  if (scrollY > heroHeight - 100) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});

//for form formspee
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById("formStatus");

  try {
    const res = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    });

    if (res.ok) {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      const data = await res.json();
      if (data.errors) {
        status.textContent = data.errors.map(err => err.message).join(", ");
      } else {
        status.textContent = "⚠ Something went wrong.";
      }
      status.style.color = "red";
    }
  } catch (err) {
    status.textContent = "⚠ Network error.";
    status.style.color = "red";
  }
});


//video

const modal = document.getElementById("videoModal");
const openBtn = document.getElementById("openVideoModal");
const closeBtn = document.querySelector(".close");
const iframe = document.getElementById("videoIframe");
const videoURL = "https://www.youtube.com/embed/diy_EamiRnc?si=UxdZYisKZXKYY5YB&autoplay=1";


openBtn.onclick = function () {
  modal.style.display = "block";
  iframe.src = videoURL;
}

closeBtn.onclick = function () {
  modal.style.display = "none";
  iframe.src = "";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
}

// for </> text typing animationnn

  const element = document.getElementById("typewriter");
  const texts = [
  "<Hello>",
  "</Namaste>",        // Nepali
  "</Hola>",           // Spanish
  "</Bonjour>",        // French
  "</Konnichiwa>",     // Japanese
  "</Ciao>",           // Italian
  "</Hallo>",          // German
  "</Olá>",            // Portuguese (with accent)
  "</Salam>",          // Persian/Arabic greeting
  "</Nǐ hǎo>",         // Chinese (Mandarin)
  "</Annyeong>",       // Korean
  "</Sawasdee>",       // Thai
  "</Merhaba>",        // Turkish
  "</Zdravstvuyte>",   // Russian
  "</Shalom>",         // Hebrew
  "</Halo>",           // Indonesian
  "</Hej>",            // Swedish
  "</Selam>",          // Somali
  "</Yassou>"          // Greek
];

  let textIndex = 0;
  let charIndex = 0;
  let typing = true;

  function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}


  function type() {
    const currentText = texts[textIndex];

    if (typing) {
      if (charIndex < currentText.length) {
element.innerHTML = escapeHTML(currentText.slice(0, charIndex + 1)) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(type, 190); // Typing speed
      } else {
        typing = false;
        setTimeout(type, 1000); // Pause before deleting
      }
    } else {
      if (charIndex > 0) {
element.innerHTML = escapeHTML(currentText.slice(0, charIndex + 1)) + '<span class="cursor">|</span>';
        charIndex--;
        setTimeout(type, 190); // Deleting speed
      } else {
        typing = true;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300); // Pause before typing next
      }
    }
  }

  type();
