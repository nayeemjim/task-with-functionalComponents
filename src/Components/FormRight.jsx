function FormRight() {
  return (
    <div className="max-w-md space-y-4 rounded-lg bg-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Real-time Analysis
      </h2>

      <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow">
        <div className="text-xl text-green-600">✔️</div>
        <div className="w-full">
          <div className="mb-1 text-sm font-medium text-gray-700">
            Confidence Level
          </div>
          <div className="relative h-2 rounded bg-gray-200">
            <div className="absolute h-2 rounded bg-green-500"></div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-600">60%</div>
      </div>

      <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow">
        <div className="text-xl text-blue-600">📈</div>
        <div>
          <div className="text-sm font-medium text-gray-700">
            Confidence Level
          </div>
          <div className="text-sm text-gray-500">
            85% improvement in objection handling
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormRight;
