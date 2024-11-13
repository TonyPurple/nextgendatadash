import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  Target,
  TrendingUp,
} from 'lucide-react';

export default function MetricsGrid() {
  const metrics = [
    {
      name: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      name: 'Active Campaigns',
      value: '12',
      change: '+12.5%',
      trend: 'up',
      icon: Target,
    },
    {
      name: 'Conversion Rate',
      value: '3.2%',
      change: '-0.4%',
      trend: 'down',
      icon: TrendingUp,
    },
    {
      name: 'Total Leads',
      value: '1,429',
      change: '+5.4%',
      trend: 'up',
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.name} className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-md bg-gray-100 p-2">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              {metric.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">
                {metric.name}
              </h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {metric.value}
              </p>
              <p
                className={`mt-2 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
