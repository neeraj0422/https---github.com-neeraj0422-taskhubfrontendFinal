// PieChart.jsx

import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ data }) => {
  return <Doughnut data={data} />;
};

export default PieChart;
