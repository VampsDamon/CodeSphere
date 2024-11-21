import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  plugins
} from "chart.js";

import { Line,Doughnut } from "react-chartjs-2";
import { position } from "@chakra-ui/react";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels=["abc",'abc2','abc3','abc4','abc5'];
  const options={
    responsive:true,
    plugins:{
      legend:{
        position:"bottom"
      },
      title:{
        display:true,
        text:"Yearly Views"
      }
    }
  }
  const data={
    labels,
    datasets:[
      {
        label:"Views",
        data:[1,2,3,4,5],
        borderColor:"rgba(107,70,193,0.5)",
        backgroundColor:"#6b46c1"
      }
    ]
  };
  return <Line options={options} data={data}  />
};


export const DoughnutChart=()=>{
  const data = {
    labels: ["Subscribed", "Not Subscribed"],
    datasets: [
      {
        label: "Views",
        data: [3, 20],
        borderColor: ["rgb(62,12,171)", "rgba(214,43,129"],
        backgroundColor: ["rgba(62,12,171,0.3)", "rgba(214,43,129,0.3)"],
        borderWidth:1
      },
    ],
  };


  return <Doughnut  data={data}/>
}

