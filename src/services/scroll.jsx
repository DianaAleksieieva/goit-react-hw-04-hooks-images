export const scroll = () => {
  return window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};