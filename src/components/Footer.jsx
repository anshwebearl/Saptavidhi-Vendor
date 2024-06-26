function Footer() {
  return (
    <div className="font-poppins px-8 py-8 flex flex-wrap lg:flex-row gap-5 lg:gap-0 lg:justify-around md:justify-around sm:justify-between">
      <div className="flex flex-col gap-2 md:gap-5">
        <img src="/logo.png" className="md:w-28 w-24" alt="" />
        <div className="font-[500] text-xs md:text-sm space-y-1 md:pace-y-2">
          <p>Career</p>
          <p>Community Guideline</p>
          <p>Contact Us</p>
          <p>Frequently asked question(FAQ)</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Partner Community</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-5">
        <p className="font-[600] text-base md:text-lg">Contact Us</p>
        <p className="font-[500] text-xs md:text-sm">
          feedback@saptavidhi.com
          <br />
          +91 987-987-9876
        </p>
        <img src="/playstore.png" className="w-32 lg:w-48 " alt="" />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <p className="font-[600] text-base md:text-lg">Connect us on</p>
        <div className="flex space-x-4">
          <img src="/facebook.png" className="w-8 h-8" alt="Facebook" />
          <img src="/insta.png" className="w-8 h-8" alt="Instagram" />
          <img src="/yt.png" className="w-8 h-8" alt="YouTube" />
          <img src="/linkedin.png" className="w-8 h-8" alt="LinkedIn" />
        </div>
        <img src="/appstore.png" className="w-36 lg:w-48 " alt="App Store" />
      </div>
    </div>
  );
}

export default Footer;
