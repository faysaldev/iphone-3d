const ScroolToBottom = (classNames) => {
  const element = document.querySelector(classNames);

  window.scrollTo({
    top: element.getBoundingClientRect().top,
    x: 0,
    behavior: "smooth",
  });
};

const ScroolToTop = () => {
  window.scrollTo({
    top: 0,
    x: 0,
    behavior: "smooth",
  });
};

export { ScroolToBottom, ScroolToTop };
