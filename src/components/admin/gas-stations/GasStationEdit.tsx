
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { capCorseStations } from "@/data/gas-stations";
import { strategicGasStations } from "@/data/gas-stations/strategic";
import { allRegionalStations } from "@/data/gas-stations/regions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  address: z.string().min(5, {
    message: "L'adresse doit contenir au moins 5 caractères",
  }),
  region: z.string().min(2, {
    message: "La région doit être spécifiée",
  }),
  latitude: z.string().min(1, {
    message: "La latitude est requise",
  }),
  longitude: z.string().min(1, {
    message: "La longitude est requise",
  }),
  isStrategic: z.boolean().default(false),
});

const GasStationEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      region: "",
      latitude: "",
      longitude: "",
      isStrategic: false,
    },
  });

  // Find the gas station by ID
  useEffect(() => {
    if (!id) return;

    // Combine all gas stations collections
    const allStations = [
      ...capCorseStations,
      ...strategicGasStations,
      ...allRegionalStations,
    ];
    
    const station = allStations.find(station => station.id === id);
    
    if (station) {
      // Convert latitude and longitude to strings for the form
      form.reset({
        name: station.name,
        address: station.address || "",
        region: station.region || "",
        latitude: String(station.lat),
        longitude: String(station.lng),
        isStrategic: !!station.isStrategic,
      });
    } else {
      toast.error("Station introuvable");
      navigate("/admin/gas-stations");
    }
    
    setIsLoading(false);
  }, [id, form, navigate]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // In a real implementation, this would update the station
    console.log(`Updating station ${id} with:`, values);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Station mise à jour avec succès");
      navigate("/admin/gas-stations");
    }, 1000);
  }

  if (isLoading) {
    return <div className="p-4">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Modifier la station-service
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations de la station</CardTitle>
          <CardDescription>
            Modifiez les informations de la station-service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Total" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Région</FormLabel>
                      <FormControl>
                        <Input placeholder="Bastia" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Route de Bastia, 20200 Bastia"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input placeholder="42.701" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input placeholder="9.449" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="isStrategic"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Station stratégique</FormLabel>
                      <FormDescription>
                        Marquer comme station stratégique pour les motards
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/gas-stations")}
                >
                  Annuler
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Mise à jour..." : "Mettre à jour"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GasStationEdit;
