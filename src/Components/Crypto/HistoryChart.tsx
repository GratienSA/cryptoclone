"use client";

import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { HistoricProps } from '@/Utils/types';
import { getCryptoHistoryById } from '@/Service/crypto';

interface HistoryChartProps {
  cryptoId: string;
  Cryptoname: string;
}

const HistoryChart: React.FC<HistoryChartProps> = ({ cryptoId, Cryptoname }) => {
  const [history, setHistory] = useState<HistoricProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const convertApiResponseToChartData = (response: HistoricProps[]) => {
    const xAxisData = response.map(item => new Date(item.created_at).getTime());
    const seriesData = response.map(item => item.value);

    return {
      xAxis: xAxisData,
      series: seriesData,
    };
  };

  const chartData = convertApiResponseToChartData(history);

  const fetchHistory = async () => {
    try {
      const res = await getCryptoHistoryById(cryptoId);
      setHistory(res);
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
    <div>
      <h2>{Cryptoname} History</h2>
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
    </div>
  );
};

export default HistoryChart;
