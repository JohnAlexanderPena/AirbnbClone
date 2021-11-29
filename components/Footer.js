import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Read about rentals</p>
        <p>How we donate</p>
        <p>Charity Stuff</p>
        <p>Random Stuff</p>
      </div>{" "}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>How to start Hosting</p>
        <p>Why to start hosting</p>
        <p>Host with the most</p>
        <p>Join Now</p>
        <p>Airbnb Luxe</p>
      </div>{" "}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Link</p>
        <p>Trust & Safety</p>
        <p>Lets add this too</p>
        <p>Airbnb Stuff</p>
        <p>Airbnb Clone Magic</p>
      </div>
    </div>
  );
};

export default Footer;
