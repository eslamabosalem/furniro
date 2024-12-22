"use client";
function Newsletter() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className=" border-b border-b-black pr-4 focus:outline-none caret-goldPrimary"
      />
      <button className="border-b border-b-black ml-4">SUBSCRIBE</button>
    </form>
  );
}
export default Newsletter;
