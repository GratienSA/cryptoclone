"use client"

import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { HistoricProps } from '@/Utils/types';
import { getCryptoHistoryById } from '@/Service/crypto';

interface HistoryChartProps {
  cryptoId: string;
  Cryptoname: string;
}

const HistoryChart: React.FC<HistoryChartProps> = ({ cryptoId }) => {
  const [history, setHistory] = useState<HistoricProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  function convertApiResponseToChartData(response) {
    
    const xAxisData = response.map(item => new Date(item.created_at).getTime());
    const seriesData = response.map(item => item.value);

    return {
        xAxis: xAxisData,
        series: seriesData
    };
}
const chartData = convertApiResponseToChartData(history);

  const fetchHistory = async () => {
    try {
      getCryptoHistoryById(cryptoId).then((res)=> setHistory(res))
     
    } catch (error) {
      setError('Error fetching history');
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  

    fetchHistory();
  }, [cryptoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }



  return (
    
    <LineChart
    xAxis={[{ data: chartData.xAxis }]}
    series={[
      {
        data: chartData.series,
      },
    ]}
    width={1000}
    height={600}
  />
  );
};

export default HistoryChart;