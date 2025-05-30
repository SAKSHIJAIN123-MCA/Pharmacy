export default function Cancel() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-6 sm:px-8 md:px-12 lg:px-20">
      {/* Top Banner Image (Full Width - ignore container padding) */}
      <div className="w-screen -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-20 py-6">
        <img
          src="/Rabhas (6).png"
          alt="Team of doctors"
          className="w-full object-cover max-h-[1000px] mb-6"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Cancellation and Refund Policy
      </h1>
      <p className="mb-3 text-sm sm:text-base">
        At Cheap Medicine Shop, we strive to ensure customer satisfaction with
        every purchase. If you are not entirely satisfied with your order,
        please review our cancellation and refund policy below:
      </p>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Order Cancellation</h3>
      <ul className="list-disc ml-6 mb-4 space-y-1 text-sm sm:text-base">
        <li>
          Orders can be cancelled within 2 hours of placing them or before they
          are dispatched, whichever is earlier.
        </li>
        <li>
          To cancel your order, please contact our customer support team via
          email or phone with your order details.
        </li>
        <li>Once the order is dispatched, it cannot be cancelled.</li>
      </ul>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Refund Policy</h3>
      <ul className="list-disc ml-6 mb-4 space-y-1 text-sm sm:text-base">
        <li>
          Refunds are only applicable for:
          <ul className="list-disc ml-6 space-y-1">
            <li>Incorrect or damaged products received</li>
            <li>Non-availability of ordered items</li>
            <li>Order cancellation within the allowed time frame</li>
          </ul>
        </li>
        <li>
          To initiate a refund, customers must report the issue within 24 hours
          of receiving the delivery.
        </li>
        <li>
          Refunds will be processed back to the original payment method within
          5–7 business days of approval.
        </li>
      </ul>

      <h3 className="font-semibold mb-1 text-base sm:text-lg">Non-Refundable Items</h3>
      <ul className="list-disc ml-6 mb-4 space-y-1 text-sm sm:text-base">
        <li>Opened, used, or tampered medical products</li>
        <li>Products without original packaging or invoice</li>
        <li>Items purchased on special discounts or promotional sales</li>
      </ul>

      <p className="mb-4 text-sm sm:text-base">
        For any questions related to refunds or cancellations, please contact
        our support team at{" "}
        <span className="font-medium">support@cheapmedicineshop.com</span> or
        call us at <span className="font-medium">+91-XXXXXXXXXX</span>.
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
