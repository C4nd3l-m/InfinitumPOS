"use client"

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

interface TopProduct {
  name: string;
  totalSold: number;
}

type PieChartData = ChartData<'pie', number[], string>;

const TopProductsChart = () => {
  const [chartData, setChartData] = useState<PieChartData>({
    labels: [],
    datasets: [
      {
        label: 'Productos más vendidos',
        data: [],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetch('https://infinitumpos.onrender.com/stats/top-products')
      .then(res => res.json())
      .then((data: TopProduct[]) => {
        console.log("Top Products:", data);

        let products = data;

        // Si no hay datos reales, usar datos simulados
        if (!data || data.length === 0) {
          products = [
            { name: 'Producto A', totalSold: 20 },
            { name: 'Producto B', totalSold: 15 },
            { name: 'Producto C', totalSold: 10 },
          ];
        }

        const labels = products.map(item => item.name);
        const values = products.map(item => Number(item.totalSold));

        const updatedDataset = {
          label: 'Productos más vendidos',
          data: values,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
          ],
          borderWidth: 1,
        };

        setChartData({
          labels,
          datasets: [updatedDataset],
        });
      })
      .catch(err => {
        console.error('Error fetching chart data:', err);

        // En caso de error, también mostrar datos simulados
        const fallbackProducts = [
          { name: 'Producto A', totalSold: 20 },
          { name: 'Producto B', totalSold: 15 },
          { name: 'Producto C', totalSold: 10 },
        ];

        setChartData({
          labels: fallbackProducts.map(p => p.name),
          datasets: [{
            label: 'Productos más vendidos',
            data: fallbackProducts.map(p => p.totalSold),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
            ],
            borderWidth: 1,
          }]
        });
      });
  }, []);

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Productos más vendidos</h2>
      <Pie data={chartData} />
    </>
  );
};

export default TopProductsChart;
