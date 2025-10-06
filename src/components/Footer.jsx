import "./Footer.scss";

const Footer = () => {
    const year = new Date().getFullYear(); 
  return (
    <footer>
      <div className="date">&copy; {year} by Jokić</div>
      <div className="powered">Powered by <a href="https://lonelycowboy94.github.io/Personal-portfolio---website/" target="_blanc">LonelyCowboy</a> &#174;</div>
    </footer>
  );
};

export default Footer;
