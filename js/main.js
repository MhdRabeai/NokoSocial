const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSize = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const color = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
// Navbar
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    if (item.id == "notifications") {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "none";
    }
  });
});
//  Messages
// Message Search
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notifications-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// THEME_CUSTOMIZATION

const opentheme = () => {
  themeModal.style.display = "grid";
};
const closetheme = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closetheme);
theme.addEventListener("click", opentheme);

// Fonts
fontSize.forEach((size) => {
  let fontsize;
  size.addEventListener("click", () => {
    if (size.classList.contains("font-size-1")) {
      fontsize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontsize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontsize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontsize = "19px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontsize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontsize;
    fontSize.forEach((ele) => {
      ele.classList.remove("active");
    });
    size.classList.add("active");
  });
});
color.forEach((colo) => {
  colo.addEventListener("click", () => {
    if (colo.classList.contains("color-1")) {
      root.style.setProperty("--primari-color-hue", 252);
    } else if (colo.classList.contains("color-2")) {
      root.style.setProperty("--primari-color-hue", 52);
    } else if (colo.classList.contains("color-3")) {
      root.style.setProperty("--primari-color-hue", 352);
    } else if (colo.classList.contains("color-4")) {
      root.style.setProperty("--primari-color-hue", 152);
    } else if (colo.classList.contains("color-5")) {
      root.style.setProperty("--primari-color-hue", 202);
    }
    color.forEach((ele) => {
      ele.classList.remove("active");
    });
    colo.classList.add("active");
  });
});
