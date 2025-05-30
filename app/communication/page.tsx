export default function Communication() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Top Banner Image (Full Width - edge to edge on mobile) */}
      <div className="w-screen -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-20 py-6">
        <img
          src="/Rabhas (8).png"
          alt="Team of doctors"
          className="w-full object-cover max-h-[1000px] mb-6"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Communication Policy
      </h1>
      <p className="mb-3 text-sm sm:text-base">
        At Cheap Medicine Shop, we are committed to maintaining clear,
        transparent, and respectful communication with our customers. This
        policy outlines how we communicate with you and how you can manage those
        communications.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Modes of Communication</h3>
      <p className="mb-4 text-sm sm:text-base">
        We may contact you through various channels including email, SMS, phone
        calls, WhatsApp, push notifications, and postal mail for purposes such
        as:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1 text-sm sm:text-base">
        <li>Order confirmation and tracking</li>
        <li>Prescription verification and reminders</li>
        <li>Promotional offers and newsletters</li>
        <li>Health tips, service updates, and important notices</li>
        <li>Customer service follow-ups or surveys</li>
      </ul>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Opt-In Consent</h3>
      <p className="mb-4 text-sm sm:text-base">
        By providing your contact information on our website, you consent to
        receive communications from us for transactional and promotional
        purposes. Standard messaging and data rates may apply.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Opt-Out Option</h3>
      <p className="mb-4 text-sm sm:text-base">
        You may choose to opt out of non-essential communications such as
        marketing emails and promotional SMS messages by:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1 text-sm sm:text-base">
        <li>Clicking the “Unsubscribe” link in emails</li>
        <li>Replying “STOP” to promotional SMS messages</li>
        <li>Adjusting notification settings in your account (if applicable)</li>
      </ul>
      <p className="mb-4 text-sm sm:text-base">
        Even if you opt out of promotional communications, we may still contact
        you regarding your orders, account status, or other service-related
        issues.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Respect and Professionalism</h3>
      <p className="mb-4 text-sm sm:text-base">
        All communication from our team will be conducted with professionalism
        and courtesy. We request the same from customers in return. Abusive or
        inappropriate behavior in communication may result in restricted access
        to our services.
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Third-Party Communication</h3>
      <p className="mb-4 text-sm sm:text-base">
        We do not sell or rent your contact information to third parties for
        marketing purposes. Communication may be routed through authorized
        third-party service providers solely for operational needs (e.g.,
        delivery updates, payment confirmation).
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Contact Us</h3>
      <p className="mb-4 text-sm sm:text-base">
        For any concerns regarding our communication practices, you can reach
        out to us at info@example.com.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-4 text-sm sm:text-base">
        If you have any questions about these Terms, please contact us at
        info@example.com.
      </p>

      <div className="border-t border-gray-300 pt-12 text-center mt-12">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-black-700">
          Join Now For Exclusive Offers
        </h3>
        <p className="text-xs sm:text-sm mb-4 text-gray-600">
          Unlock the world of wellness with exciting deals and informative content
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
