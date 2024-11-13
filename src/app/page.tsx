import { Metadata } from 'next';
import MetricsGrid from '@/components/MetricsGrid';
import PerformanceChart from '@/components/PerformanceChart';
import CampaignTable from '@/components/CampaignTable';

export const metadata: Metadata = {
  title: 'Marketing Dashboard',
  description: 'Analytics and performance metrics for your marketing campaigns',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <MetricsGrid />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PerformanceChart />
        <CampaignTable />
      </div>
    </div>
  );
}
