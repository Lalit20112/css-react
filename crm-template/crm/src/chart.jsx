import Chart from "react-apexcharts";

export default function DealsChart() {
  const chartOptions = {
    chart: { id: "deals-chart" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
  };

  const chartSeries = [
    {
      name: "Deals",
      data: [30, 40, 35, 50, 49],
    },
  ];

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-2">Deals Overview</h2>
      <Chart options={chartOptions} series={chartSeries} type="line" height={800} />
    </div>
  );
}