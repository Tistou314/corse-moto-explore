
import { Calendar, Ship, ShieldAlert, Package, Wrench, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SaisonsTab from './SaisonsTab';
import TraverseeTab from './TraverseeTab';
import SecuriteTab from './SecuriteTab';
import EquipementTab from './EquipementTab';
import MotoTab from './MotoTab';
import LexiqueTab from './LexiqueTab';
import { useState } from 'react';

const GuideTabs = () => {
  const [activeTab, setActiveTab] = useState("saisons");

  const tabs = [
    { value: "saisons", label: "Saisons", icon: Calendar },
    { value: "traversee", label: "Traversée", icon: Ship },
    { value: "securite", label: "Sécurité", icon: ShieldAlert },
    { value: "equipement", label: "Équipement", icon: Package },
    { value: "moto", label: "Motos", icon: Wrench },
    { value: "lexique", label: "Lexique", icon: Globe },
  ];

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full h-auto mb-8">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex flex-col py-3 items-center">
            <tab.icon className="h-5 w-5 mb-1" />
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value="saisons">
        <SaisonsTab />
      </TabsContent>
      
      <TabsContent value="traversee">
        <TraverseeTab />
      </TabsContent>
      
      <TabsContent value="securite">
        <SecuriteTab />
      </TabsContent>
      
      <TabsContent value="equipement">
        <EquipementTab />
      </TabsContent>
      
      <TabsContent value="moto">
        <MotoTab />
      </TabsContent>
      
      <TabsContent value="lexique">
        <LexiqueTab />
      </TabsContent>
    </Tabs>
  );
};

export default GuideTabs;
