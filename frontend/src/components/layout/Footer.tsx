const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto text-center py-4">
        <p>&copy; TaskMaster {currentYear} | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
 