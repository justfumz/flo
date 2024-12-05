function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);

  return (
    <footer>&copy; The Flo by JustFumz {year}. All Rights Reserved</footer>
  );
}

export default Footer;
