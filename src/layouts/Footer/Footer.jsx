import './Footer.scss';
import Socials from "@/components/Socials";
import footer from "@/layouts/Footer/index.js";

const Footer = () => {
  const menuItems = [
    {
      title: 'Home',
      links: [
        'Categories',
        'Devices',
        'Pricing',
        'FAQ'
      ]
    },
    {
      title: 'Movies',
      links: [
        'Gernes',
        'Trending',
        'New Release',
        'Popular'
      ]
    },
    {
      title: 'Shows',
      links: [
        'Gernes',
        'Trending',
        'New Release',
        'Popular'
      ]
    },
    {
      title: 'Support',
      links: ['Contact Us']
    },
    {
      title: 'Subscription',
      links: [
        'Plans',
        'Features',
      ]
    },
    {
      title: 'Connect With Us',
      soc1alLinks: [
        {
          label: 'Facebook',
          iconName: 'facebook'
        },
        {
          label: 'Twitter',
          iconName: 'twitter'
        },
        {
          label: 'LinkedIn',
          iconName: 'linked-in'
        },
      ]
    },
  ]

  const footerExtraLinks = [
    'Terms of Use',
    'Privacy Policy',
    'Cookie Policy',
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__menu">
          {menuItems.map(({ title, links, soc1alLinks }, index) => {
            return (
              <div
                className="footer__menu-column"
                key={index}
              >
                <a
                  className="footer__menu-title h6"
                  href="#"
                >
                  {title}
                </a>
                {links?.length > 0 && (
                  <ul className="footer__menu-list">
                    {links.map((link, index) => {
                      return (
                        <li
                          className="footer__menu-item"
                          key={index}
                        >
                          <a className="footer__menu-link" href="#">
                            {link}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {soc1alLinks?.length > 0 && (
                  <Socials
                    className="footer__soc1als"
                    links={soc1alLinks}
                  />
                )}
              </div>
            )
          })}
        </div>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvibe, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {footerExtraLinks.map((link, index) => (
              <a
                className="footer__extra-link"
                href='#'
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;