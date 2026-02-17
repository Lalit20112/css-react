import Chart from "react-apexcharts"

export default function Wonchart({type}){
    const chartOptions ={
        chart:{id:"won-chart"},
        xaxis:{ categories:["conversaton","follwup","inpipline"] },
        plotOptions:{
            bar:{horizontal: true},
        },
        colors:["red"]
    };
    const chartSeries = [{
        name:"deals",
        data:[30,40,35,45]
    }]
    return(
        <div className=" shadow bg-white">
            {/* <h2 className="text-lg font-bold mb--2">Won Deals Stage chart</h2> */}
            <Chart options={chartOptions} series={chartSeries} type={type} height={300}/>
        </div>

    )
}