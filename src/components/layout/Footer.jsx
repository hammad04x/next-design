import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import "@/assets/styles/layout/footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-content">

                    {/* SECTION 1 - Brand */}
                    <div className="footer-column footer-brand">
                        <h2 className="footer-logo">TravelX</h2>
                        <p className="footer-description">
                            Lorem ipsum dolor sit amet consectetur. Vulputate erat ornare id sollicitudin turpis enim fames. Dolor enim ut nunc
                        </p>

                        <div className="footer-social">
                            <a href="#" className="footer-social-link">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="footer-social-link">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="footer-social-link">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="footer-social-link">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* SECTION 2 - Places + Address */}
                    <div className="footer-column places-column">
                        <h3 className="footer-heading">Frequently travelled places</h3>

                        <div className="dual-list">
                            <ul className="footer-list">
                                <li>Bali</li>
                                <li>Dubai</li>
                                <li>Japan</li>
                                <li>Europe</li>
                                <li>Australia</li>
                                <li>Switzerland</li>
                            </ul>

                            <ul className="footer-list">
                                <li>France</li>
                                <li>Italy</li>
                                <li>Greece</li>
                                <li>Vietnam</li>
                                <li>Thailand</li>
                                <li>Abu Dhabi</li>
                            </ul>
                        </div>

                        {/* ADDRESS MOVED HERE AS PER IMAGE */}
                        <div className="footer-address">
                            <div className="footer-address-label">Address:</div>
                            <div className="footer-address-text">
                                3th floor, 302-305, Loriya Group,
                                Chhapi, B.K, 325210
                            </div>
                        </div>

                    </div>

                    {/* SECTION 3 - Right Side */}
                    <div className="footer-column right-combined">

                        <h3 className="footer-heading full-width">
                            More in TravelX
                        </h3>

                        <div className="right-columns">
                            <div className="sub-column">
                                <ul className="footer-list">
                                    <li>About us</li>
                                    <li>Career</li>
                                    <li>Cookie Policy</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Condition</li>
                                    <li>Sitemap</li>
                                </ul>
                            </div>

                            <div className="sub-column">
                                <ul className="footer-list">
                                    <li>TravelX</li>
                                    <li>+91 83554 52582</li>
                                    <li>Contact@travelx.com</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="footer-copyright">
                <p>Copyright © {currentYear} TravelX. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
