const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 w-full text-center mx-auto">
      <p className="text-xs">Maurice Tañeca@{currentYear}</p>
    </footer>
  );
};

export default Footer;
