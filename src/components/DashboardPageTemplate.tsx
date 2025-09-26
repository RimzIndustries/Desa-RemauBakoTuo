import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  description?: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, description, color }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-black">{title}</CardTitle>
      <Icon className={`h-4 w-4 ${color || 'text-muted-foreground'}`} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-black">{value}</div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </CardContent>
  </Card>
);

interface DashboardPageTemplateProps {
  title: string;
  description: string;
  stats?: StatCardProps[];
  children: React.ReactNode;
}

const DashboardPageTemplate: React.FC<DashboardPageTemplateProps> = ({
  title,
  description,
  stats,
  children
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {stats && stats.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      )}

      <div>
        {children}
      </div>
    </div>
  );
};

export default DashboardPageTemplate;
