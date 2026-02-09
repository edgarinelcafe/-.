function sayYes() {
  const music = document.getElementById("music");
  const message = document.getElementById("message");

  music.play();

  message.innerHTML = `
    💞 Heidy, te amo 💞<br>
    Te amo, ceja 💖<br>
    Te amo, mi niña 😍<br>
    Te amo hoy, mañana y siempre 💘<br><br>
    💕 TE AMO 💕 TE AMO 💕 TE AMO 💕
  `;
}
