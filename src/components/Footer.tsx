
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p className="text-sm md:text-base">&copy; {year} Nemali Sai Vignesh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
