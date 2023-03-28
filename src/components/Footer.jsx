function Footer() {
  const year = new Date()

  return (
    <footer className="footer-section">
      <h4>
        Copyright &copy; Backroads Travel Tours Company {year.getFullYear()}.
        All Rights Reserved
      </h4>
      <ul className="social-links">
        <li>
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
