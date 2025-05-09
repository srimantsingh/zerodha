import React from "react";

const InfoSection = () => {
  return (
    <div className="flex items-start justify-between px-10 py-16 bg-white">
    {/* Left Side: Text */}
    <div className="w-1/2 space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Trust with confidence</h2>
        <p className="text-gray-700">
          <strong>Customer-first always</strong><br />
          That’s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
        </p>
      </div>
      <div>
        <p className="text-gray-700">
          <strong>No spam or gimmicks</strong><br />
          No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span className="text-blue-600 underline">Our philosophies</span>.
        </p>
      </div>
      <div>
        <p className="text-gray-700">
          <strong>The Zerodha universe</strong><br />
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
        </p>
      </div>
      <div>
        <p className="text-gray-700">
          <strong>Do better with money</strong><br />
          With initiatives like <span className="text-blue-600 underline">Nudge</span> and <span className="text-blue-600 underline">Kill Switch</span>, we don’t just facilitate transactions, but actively help you do better with your money.
        </p>
      </div>
    </div>
  
    {/* Right Side: Image */}
    {/* <div className="w-1/2 flex justify-end">
      <img src="/media/2ndPage.png" alt="Zerodha Apps" className="max-w-[500px] w-full h-auto" />
      <a
    href="https://zerodha.com/philosophy"
    className="text-blue-600 underline hover:text-blue-800"
  >
    Our philosophies
  </a>
    </div> */}
    {/* Right Side: Image + Link */}
<div className="w-1/2 flex justify-end">
  <div className="flex flex-col items-center">
    <img src="/media/2ndPage.png" alt="Zerodha Apps" className="max-w-[500px] w-full h-auto mb-4" />
    <a
      href="https://zerodha.com/philosophy"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Our philosophies<span class="material-symbols-outlined">
arrow_forward
</span>
    </a>
  </div>
</div>

  </div>
  
  );
};

export default InfoSection;

