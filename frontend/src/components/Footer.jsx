import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-300">
      <div className="flex md:flex-col border-b-1 border-gray-500">
        <div className="bg-gray-300 text-gray-900 font-medium flex flex-col md:flex-row w-full justify-between gap-6 !px-3 lg:!px-6 !py-6">
          <div className="flex gap-10 sm:gap-20 w-full md:w-1/2 justify-between md:justify-start">
            <div className="flex flex-col gap-3">
              <h1 className="text-base md:text-lg">Social Links</h1>
              <div className="flex flex-col gap-2 text-gray-700 font-normal text-sm">
                <a
                  href="https://www.facebook.com/people/Bvicam-New-Delhi/100075344976453/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900 hover:font-medium"
                >
                  <FaFacebook className="text-lg" /> Facebook
                </a>

                <a
                  href="https://www.instagram.com/ibvicam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900 hover:font-medium"
                >
                  <FaInstagram className="text-lg" /> Instagram
                </a>

                <a
                  href="https://www.youtube.com/@bvicamnewdelhi6802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900 hover:font-medium"
                >
                  <FaYoutube className="text-lg" /> YouTube
                </a>

                <a
                  href="https://www.linkedin.com/in/bvicam-new-delhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900 hover:font-medium"
                >
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-end md:items-start text-right md:text-left">
              <h1 className="text-base md:text-lg">Important Links</h1>
              <div className="flex flex-col gap-2 text-gray-700 font-normal text-sm">
                <Link
                  to="/aboutus"
                  className="hover:text-gray-900 hover:font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contactus"
                  className="hover:text-gray-900 hover:font-medium"
                >
                  Contact
                </Link>
                <a
                  href="http://www.ipu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 hover:font-medium"
                >
                  GGSIPU
                </a>
                <a
                  href="https://www.ugc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 hover:font-medium"
                >
                  UGC
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="w-full md:w-1/2">
            <h1 className="text-base md:text-lg md:text-right !mb-3">
              Our Location
            </h1>
            <div className="flex md:justify-end">
              <iframe
                className="w-full md:w-3/4 lg:w-2/3 md:h-40 rounded-lg border border-gray-600"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4726849450467!2d77.1106680739007!3d28.67550368213097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038b9232e7cd%3A0x34ebc68df4428491!2sBharati%20Vidyapeeth&#39;s%20Institute%20of%20Computer%20Applications%20and%20Management%20(BVICAM)!5e0!3m2!1sen!2sin!4v1739957724470!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="../../footer.jpg"
          alt="footer-img"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>

      <div className="text-gray-900 bg-gray-300 text-center border-t !py-2">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Bharati Times. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
