import FormRight from "./FormRight";

function Form() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-md">
      {/* Header */}
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold text-gray-800">AI Sales Coach</h2>
      </div>

      {/* Chat Area  */}
      <div className="h-64 space-y-4 overflow-y-auto bg-gray-100 p-4">
        <div className="flex items-start space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <div className="max-w-md rounded-lg bg-white p-3 text-gray-800 shadow">
            Hello! I'm your AI sales coach. How can I help you improve your
            sales performance today?
          </div>
        </div>
      </div>

      {/* Suggested Buttons */}
      <div className="flex flex-wrap gap-2 border-t p-4">
        <button className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          How do I handle objections?
        </button>
        <button className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          Give me a cold email template
        </button>
        <button className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          Closing techniques
        </button>
        <button className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          Negotiation tips
        </button>
      </div>

      {/* Input Area  */}
      <div className="flex items-center border-t p-4">
        <input
          type="text"
          placeholder="Ask anything you need"
          className="flex-1 rounded border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="ml-2 flex items-center rounded-md bg-blue-800 px-4 py-2 text-sm text-white">
          Send
          <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.94 2.94a.75.75 0 011.06 0L17.06 16a.75.75 0 11-1.06 1.06L2.94 4a.75.75 0 010-1.06z" />
            <path d="M2.94 17.06a.75.75 0 001.06 0L17.06 4a.75.75 0 00-1.06-1.06L2.94 15.94a.75.75 0 000 1.06z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Form;
