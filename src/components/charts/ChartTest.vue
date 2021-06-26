<template>
  <div>
    <h1>Charts Demo</h1>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>
<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "chart-test",
  data() {
    return {
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    };
  },

  mounted() {
    const context = document.getElementById("myChart").getContext("2d");
    // eslint-disable-next-line no-debugger
    new Chart(context, { type: "pie", data: this.data });
  },
};
</script>
