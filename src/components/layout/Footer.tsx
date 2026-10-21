function Footer() {
  return (
    <footer className="border-t bg-muted/40 p-4 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Employee Directory</p>
    </footer>
  );
}

export default Footer;
