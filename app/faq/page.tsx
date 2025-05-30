
"use client";
import AnimatedSection from "../components/AnimatedSection"; 

export default function Communication() {
  return (
    <AnimatedSection>
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Top Banner Image (Full Width) */}
      <div className="w-full py-6">
        <img
          src="/Rabhas (1).png"
          alt="Team of doctors"
          className="w-full max-h-[1000px] mb-6"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="mb-6 text-sm sm:text-base">
        <p className="font-semibold mb-1">
          1. How does Cheap Medicine Shop communicate with customers?
        </p>
        <p className="mb-4">
          At Cheap Medicine Shop, we are committed to maintaining clear,
          transparent, and respectful communication with our customers. This
          policy outlines how we communicate with you and how you can manage
          those communications.
        </p>
        <p className="mb-4">
          We may contact you through various channels including email, SMS,
          phone calls, WhatsApp, push notifications, and postal mail for
          purposes such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Order confirmation and tracking</li>
          <li>Prescription verification and reminders</li>
          <li>Promotional offers and newsletters</li>
          <li>Health tips, service updates, and important notices</li>
          <li>Customer service follow-ups or surveys</li>
        </ul>
      </div>

      <div className="mb-6 text-sm sm:text-base">
        <p className="font-semibold mb-1">
          2. Do I need to give consent to receive messages?
        </p>
        <p className="mb-4">
          By providing your contact information on our website, you consent to
          receive communications from us for transactional and promotional
          purposes. Standard messaging and data rates may apply.
        </p>
      </div>

      <div className="mb-6 text-sm sm:text-base">
        <p className="font-semibold mb-1">
          3. How can I opt out of promotional messages?
        </p>
        <p className="mb-4">
          You may choose to opt out of non-essential communications such as
          marketing emails and promotional SMS messages by:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Clicking the “Unsubscribe” link in emails</li>
          <li>Replying “STOP” to promotional SMS messages</li>
          <li>
            Adjusting notification settings in your account (if applicable)
          </li>
        </ul>
        <p className="mb-4">
          Even if you opt out of promotional communications, we may still
          contact you regarding your orders, account status, or other
          service-related issues.
        </p>
      </div>

      <div className="mb-6 text-sm sm:text-base">
        <p className="font-semibold mb-1">
          4. What is Cheap Medicine Shop’s communication etiquette?
        </p>
        <p className="mb-4">
          All communication from our team will be conducted with
          professionalism and courtesy. We request the same from customers in
          return. Abusive or inappropriate behavior in communication may
          result in restricted access to our services.
        </p>
      </div>

      <div className="mb-6 text-sm sm:text-base">
        <p className="font-semibold mb-1">
          5. Do you share my contact information with third parties?
        </p>
        <p className="mb-4">
          We do not sell or rent your contact information to third parties for
          marketing purposes. Communication may be routed through authorized
          third-party service providers solely for operational needs (e.g.,
          delivery updates, payment confirmation).
        </p>
      </div>

      <div className="mb-6 text-sm sm:text-base">
        <p className="font-semibold mb-1">
          6. How can I contact Cheap Medicine Shop for questions?
        </p>
        <p className="mb-4">
          For any concerns regarding our communication practices, you can
          reach out to us at info@example.com.
        </p>
      </div>

      <div className="mb-6 text-sm sm:text-base">
        <p className="text-xl font-semibold mb-2">Contact Information</p>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at
          info@example.com.
        </p>
      </div>

      <div className="border-t border-gray-300 pt-12 text-center mt-12">
        <h3 className="text-lg font-semibold mb-2 text-black-700">
          Join Now For Exclusive Offers
        </h3>
        <p className="text-sm mb-4 text-gray-600">
          Unlock the world of wellness with exciting deals and informative
          content
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    </AnimatedSection>
  );
}
