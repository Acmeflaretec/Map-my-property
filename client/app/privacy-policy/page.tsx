import React from "react";

const page = () => {
  return (
    <div className="mt-20 md:mt-28 lg:mt-32 mb-12 w-full max-w-3xl min-h-screen shadow-xl">
      <div className="container mx-auto p-4 md:p-6 lg:p-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-4">
          Last Updated: 31st January 2025
        </p>

        <p>
          At <strong>Map My Property</strong>, we value your privacy. This
          Privacy Policy outlines how we collect, use, and protect your personal
          data.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Personal details (e.g., name, email, phone) provided by you.</li>
          <li>Browsing data collected via cookies.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          2. How We Use Your Information
        </h2>
        <p>
          We use your data to improve services, process payments, and
          communicate with you.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Data Sharing</h2>
        <p>
          We do not sell your data. We may share it with trusted partners for
          service fulfillment.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Security Measures</h2>
        <p>
          We take security seriously and use encryption and secure servers to
          protect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
        <p>
          You can request access to, update, or delete your data by contacting
          us.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Changes to Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest
          version will always be available on our website.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Contact Us</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:support@mapmyproperty.in"
            target="_blank"
            className="text-blue-600"
          >
            support@mapmyproperty.in
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+916363692124" className="text-blue-600">
            +91 6363692124
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
