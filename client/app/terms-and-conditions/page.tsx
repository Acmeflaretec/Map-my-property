import React from "react";

const page = () => {
  return (
    <div className="mt-20 md:mt-28 lg:mt-32 mb-12 w-full max-w-3xl min-h-screen md:shadow-xl">
      <div className="container mx-auto p-4 md:p-6 lg:p-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-6">
          Last Updated: 31st January 2025
        </p>
        <p className="">
          Welcome to <span className="font-semibold">Map My Property</span>!
          These Terms and Conditions ("Terms") govern your access to and use of
          our website (
          <a href="http://www.mapmyproperty.in" className="text-blue-600">
            www.mapmyproperty.in
          </a>
          ) and any services provided by us. By accessing or using our website,
          you agree to be bound by these Terms. If you do not agree, please
          refrain from using our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Definitions</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>"We/Us/Our":</strong> Refers to Map My Property, its owners,
            affiliates, agents, and employees.
          </li>
          <li>
            <strong>"You/Your":</strong> Refers to any individual or entity
            accessing or using our website or services.
          </li>
          <li>
            <strong>"Services":</strong> Includes property listings,
            consultancy, documentation assistance, and any other services
            offered by us.
          </li>
          <li>
            <strong>"Website":</strong> Refers to{" "}
            <a href="http://www.mapmyproperty.in" className="text-blue-600">
              www.mapmyproperty.in
            </a>{" "}
            and any associated subdomains or mobile applications.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. Acceptance of Terms</h2>
        <p>By accessing or using our website or services, you confirm that:</p>
        <ul className="list-disc ml-6">
          <li>
            You are at least 18 years old or have the legal capacity to enter
            into a binding agreement.
          </li>
          <li>
            You have read, understood, and agree to comply with these Terms.
          </li>
          <li>
            If you are using our services on behalf of an organization, you
            represent that you have the authority to bind that organization to
            these Terms.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Use of Services</h2>
        <h3 className="text-xl font-semibold mt-4">
          3.1 Accuracy of Information
        </h3>
        <p>
          You agree to provide accurate, complete, and up-to-date information
          when using our services.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          3.2 Prohibited Activities
        </h3>
        <p>You agree not to:</p>
        <ul className="list-disc ml-6">
          <li>
            Use our website for any unlawful, fraudulent, or unauthorized
            purpose.
          </li>
          <li>
            Engage in activities that could harm, disrupt, or interfere with our
            website.
          </li>
          <li>Misrepresent your identity or affiliation.</li>
          <li>
            Use automated tools (bots, scrapers) to extract data without our
            consent.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Property Listings</h2>
        <h3 className="text-xl font-semibold mt-4">
          4.1 Informational Purpose Only
        </h3>
        <p>
          Property listings on our website are for informational purposes only
          and do not constitute an offer or contract.
        </p>

        <h3 className="text-xl font-semibold mt-4">4.2 No Warranty</h3>
        <p>
          We strive for accuracy but do not guarantee that listings are free
          from errors or omissions. Users must verify property details
          independently.
        </p>

        <h3 className="text-xl font-semibold mt-4">4.3 RERA Compliance</h3>
        <p>
          Until updated for RERA compliance, our listings should not be
          considered official advertisements under RERA. Verify details
          independently.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Payments</h2>
        <h3 className="text-xl font-semibold mt-4">5.1 Fees</h3>
        <p>
          Fees for consultancy and services are non-refundable unless explicitly
          stated otherwise.
        </p>

        <h3 className="text-xl font-semibold mt-4">5.2 Refunds</h3>
        <p>
          Refunds, if applicable, will be processed according to our refund
          policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Contact Us</h2>
        <p>If you have any questions, please contact us at:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Email:</strong>
            <a
              href="mailto:support@mapmyproperty.in"
              target="_blank"
              className="text-blue-600"
            >
              support@mapmyproperty.in
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+916363692124" className="text-blue-600">
              +91 6363692124
            </a>
          </li>
          <li>
            <strong>Address:</strong> 7th Cross Rd, 6th Phase, KR Layout, J. P.
            Nagar, Bengaluru, Karnataka 560078, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
