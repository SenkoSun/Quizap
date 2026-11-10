import "./Footer.css";

function Footer() {
  const phrase = "A little knowledge. A lot of chaos.";
  const help = "How to play";
  const feedback = "Send feedback ↗";

  return (
    <footer className="footer">
      <div>{phrase}</div>
      <div className="footer-links">
        <a href="#how-to-play">{help}</a>
        <a href="#feedback">{feedback}</a>
      </div>
    </footer>
  );
}

export default Footer;
