import Chart from "react-apexcharts";

export default function DealsChart() {
  const chartOptions = {
    chart: { id: "deals-chart" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May","jun"] },
    // plotOptions:{
    //   bar:{ horizontal: true},
    // },
  };

  const chartSeries = [
    {
      name: "Deals",
      data: [30, 40, 35, 50, 49,45],
    },
  ];

  return (
    <div className="p-4 ">
      {/* <h2 className="text-lg font-bold mb-2">Deals Overview</h2> */}
      <Chart options={chartOptions} series={chartSeries} type="bar" height={300}/>
    </div>
  );
}