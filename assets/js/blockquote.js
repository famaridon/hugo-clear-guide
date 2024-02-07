document.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll("blockquote").forEach((blockquote) => {
    blockquote.classList.add("alert");
    if (blockquote.innerText.startsWith("ℹ")) {
      blockquote.classList.add("alert-primary");
    } else if (blockquote.innerText.startsWith("📎")) {
      blockquote.classList.add("alert-primary");
    } else if (blockquote.innerText.startsWith("❓")) {
      blockquote.classList.add("alert-primary");
    } else if (blockquote.innerText.startsWith("⚠")) {
      blockquote.classList.add("alert-warning");
    } else if (blockquote.innerText.startsWith("💡")) {
      blockquote.classList.add("alert-success");
    } else {
      blockquote.classList.add("alert-light");
    }
  });
});
