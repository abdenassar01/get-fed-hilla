import {
  HeaderTitle,
  RichTextParser,
  Services,
  TextToggle,
} from "Frontend/common/index.js";

export default function About() {
  return (
    <div>
      <div className="bg-[url('https://www.uber-assets.com/image/upload/v1588108634/assets/ca/e6987f-a0fb-49b4-9248-f093d5778cf3/original/How_Uber_Eats_Works_media-DESKTOP-TABLET-MOBILE-19x9.jpg')] bg-no-repeat bg-cover">
        <div className="container flex flex-col justify-center h-auto min-h-[40vw]">
          <HeaderTitle title="About us" className="w-fit" />
          <RichTextParser
            text="<h1><strong>Who we are</strong></h1>
<p>we are a small restorant in taounate. We give users the ability to order online and in place using our tablet devices. We also offer food delivery for small costs.&nbsp;</p>"
            className="w-[40%] prose-h1:text-xxl prose-p:text-xl"
          />
        </div>
      </div>
      <div className="container py-12 flex flex-col items-center gap-12">
        <h1 className="text-main text-xxl font-bold">What are we offering</h1>
        <Services />
        <h1 id="terms" className="text-main text-xxl font-bold">
          Terms of use
        </h1>
        <RichTextParser
          text={`
    <p>Welcome to our food ordering system! These Terms of Use ('Terms') outline the terms and conditions that govern your use of our platform and services. By accessing or using our system, you agree to comply with these Terms. Please read them carefully before proceeding.</p><h2>1. Acceptance of Terms</h2><p>By accessing or using our food ordering system, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any provision of these Terms, please do not use our system.</p><h2>2. Use of the Platform</h2><p><strong>a. Eligibility:</strong> To use our food ordering system, you must be at least 18 years old or have the legal capacity to enter into contracts in your jurisdiction.<br><strong>b. Account Registration:</strong> You may need to create an account to access certain features of our system. You agree to provide accurate and complete information during the registration process and to keep your account credentials confidential. You are responsible for all activities that occur under your account.</p><h2>3. Food Ordering Process</h2><p><strong>a. Availability and Accuracy:</strong> Our platform provides a selection of food items available for ordering from participating restaurants. However, we do not guarantee the availability of specific food items, as they are subject to the inventory of the respective restaurants. We strive to provide accurate information about menu items, prices, and descriptions, but errors may occur. We are not responsible for any inaccuracies or discrepancies in the information provided.<br><strong>b. Orders and Payments:</strong> Placing an order through our system constitutes an offer to purchase the selected food items. The acceptance of your order is subject to confirmation by the restaurant. You agree to provide valid and accurate payment information. We do not process payments directly and rely on third-party payment processors. Any payment-related issues should be addressed with the respective payment processor.</p><h2>4. Restaurant Partners</h2><p><strong>a. Independent Contractors:</strong> The restaurants listed on our platform are independent businesses and are not owned or operated by us. We are not responsible for their actions, products, or services. Any disputes or issues regarding food quality, preparation, or delivery should be addressed directly with the restaurant.<br><strong>b. Special Dietary Requirements:</strong> While we strive to accommodate special dietary requirements, it is your responsibility to inform the restaurant of any specific allergies or dietary restrictions. We cannot guarantee the absence of allergens or the accuracy of allergen information provided by the restaurants.</p>

    <h2>5. Intellectual Property</h2>
    <p>
        <strong>a. Ownership:</strong> All intellectual property rights in our food ordering system, including software, logos, trademarks, and content, are owned by us or our licensors. You are granted a limited, non-exclusive, non-transferable license to use the system for its intended purpose.<br>
        <strong>b. Restrictions:</strong> You may not modify, distribute, reproduce, or create derivative works based on our system without our prior written consent.
    </p>

    <h2>6. Limitation of Liability</h2>
    <p>
        <strong>a. Disclaimer of Warranties:</strong> Our food ordering system is provided on an "as is" and "as available" basis. We make no warranties or representations regarding the accuracy, reliability, or availability of our system.<br>
        <strong>b. Limitation of Liability:</strong> To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities arising from your use of our system.
    </p>

    <h2>7. Governing Law and Dispute Resolution</h2>
    <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with these Terms shall be resolved through negotiation or, if necessary, through binding arbitration in accordance with the rules of [Arbitration Institution].</p>

    <h2>8. Modifications</h2>
    <p>We reserve the right to modify or update these Terms at any time without prior notice. The most current version of the Terms will be posted on our platform.</p>`}
          className="prose-h2:text-tertiary prose-h2:text-center prose-h2:font-bold prose-h2:text-xbase prose-p:text-base"
        />
        <h1 id="faq" className="text-main text-xxl font-bold">
          F&Q
        </h1>
        <div className="flex flex-col w-full">
          <TextToggle
            className=""
            isOpen
            question="1. How do I place an order?"
            answer="<p>To place an order, follow these steps:
        <ol>
            <li>Log in to your account or create a new account if you don't have one.</li>
            <li>Browse through the available restaurants and select the desired items from their menus.</li>
            <li>Review your order and proceed to the checkout.</li>
            <li>Provide the necessary delivery information and choose your preferred payment method.</li>
            <li>Submit your order, and you will receive a confirmation email with the details.</li>
        </ol>
    </p>"
          />
          <TextToggle
            question="2. Can I modify or cancel my order?"
            answer="<p>Once you have submitted your order, it is sent directly to the restaurant for preparation. Therefore, modifications or cancellations may not be possible, especially if the restaurant has already started working on your order. We recommend contacting the restaurant directly to inquire about any changes or cancellations.</p>"
          />
          <TextToggle
            question="3. How long does the delivery take?"
            answer="The delivery time depends on various factors, including the distance between the restaurant and your location, traffic conditions, and the restaurant's workload. When placing an order, you will typically see an estimated delivery time provided by the restaurant. However, please note that these are estimates and may vary."
          />
          <TextToggle
            question="4. Are there any additional fees for using the food ordering system?"
            answer="We do not charge any additional fees for using our food ordering system. However, please note that some restaurants may apply their own delivery fees or minimum order requirements. These details will be displayed during the ordering process."
          />
        </div>
      </div>
    </div>
  );
}
