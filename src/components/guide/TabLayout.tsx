
import { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideIcon } from 'lucide-react';

interface TabItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface TabLayoutProps {
  tabs: TabItem[];
  defaultValue: string;
  children: ReactNode;
}

const TabLayout = ({ tabs, defaultValue, children }: TabLayoutProps) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full h-auto mb-8">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex flex-col py-3 items-center">
            <tab.icon className="h-5 w-5 mb-1" />
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export default TabLayout;
