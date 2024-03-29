const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://0177441366">(+88)01602742861</a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@yourdomain.com">support@shohojdokan.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        {/* <a href="//twitter.com" title="Twitter">
          <i className="fa fa-TikTok"></i>
        </a> */}
        <a href="https://www.instagram.com/shohojdokan/?next=%2F" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555318182865" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555547074882" title="Facebook Pages">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="//pinterest.com" title="Pinterest">
          <i className="fa fa-pinterest"></i>
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
