import React from "react";

import location from "Frontend/assets/icons/location-outline.svg";
import letter from "Frontend/assets/icons/letter.svg";
import phone from "Frontend/assets/icons/phone.svg";
import { Form } from "./form/index.js";
import { HeaderTitle } from "Frontend/common/index.js";

export default function Contact() {
  return (
    <div className="w-[100%] bg-[url('/forms-background.svg')] bg-contain bg-no-repeat sm:bg-[url('/auth-background.svg')]">
      <div className="container flex flex-col items-center gap-[4.444vw] py-[6.667vw]">
        <HeaderTitle title="Contact Support" />
        <div className="flex gap-[3.333vw] sm:flex-col-reverse">
          <div className="flex w-[21.250vw] flex-col items-center gap-[0.972vw] sm:w-[74.272vw]">
            <img src={location} alt="location icon" />
            <div className="text-center text-cardText">Taounate, Morocco</div>
          </div>
          <div className="flex w-[21.250vw] flex-col items-center gap-[0.972vw] sm:w-[74.272vw]">
            <img src={letter} alt="letter icon" />
            <div className="text-center text-cardText">contact@getfed.com</div>
          </div>
          <div className="flex w-[21.250vw] flex-col items-center gap-[0.972vw] sm:w-[74.272vw]">
            <img src={phone} alt="phone icon" />
            <div className="text-center text-cardText">(+212)696788244</div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
