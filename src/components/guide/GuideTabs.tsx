
import { Calendar, Ship, ShieldAlert, Package, Wrench, Globe } from 'lucide-react';
import { TabsContent } from "@/components/ui/tabs";
import TabLayout from './TabLayout';
import SaisonsTab from './SaisonsTab';
import TraverseeTab from './TraverseeTab';
import SecuriteTab from './SecuriteTab';
import EquipementTab from './EquipementTab';
import MotoTab from './MotoTab';
import LexiqueTab from './LexiqueTab';

const GuideTabs = () => {
  const tabs = [
    { value: "saisons", label: "Saisons", icon: Calendar },
    { value: "traversee", label: "Traversée", icon: Ship },
    { value: "securite", label: "Sécurité", icon: ShieldAlert },
    { value: "equipement", label: "Équipement", icon: Package },
    { value: "moto", label: "Motos", icon: Wrench },
    { value: "lexique", label: "Lexique", icon: Globe },
  ];

  return (
    <TabLayout tabs={tabs} defaultValue="saisons">
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
    </TabLayout>
  );
};

export default GuideTabs;
