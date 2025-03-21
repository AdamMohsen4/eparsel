
import React, { useState } from 'react';
import { Package, Navigation, Scale, Ruler, ArrowRightLeft, Truck } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import { ParcelDimensions, Location, DeliveryUrgency } from '@/types';
import { API } from '@/services/api';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getCountryFlag, getCountryName } from '@/lib/utils';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

interface BookingFormProps {
  onRatesCalculated: (rates: any[]) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ 
  onRatesCalculated, 
  isLoading, 
  setIsLoading 
}) => {
  // Form state
  const [dimensions, setDimensions] = useState<ParcelDimensions>({
    weight: 1,
    length: 20,
    width: 15,
    height: 10
  });
  
  const [pickupLocation, setPickupLocation] = useState<Location>({
    address: '',
    city: 'Stockholm',
    country: 'SE',
    postalCode: '112 23'
  });
  
  const [deliveryLocation, setDeliveryLocation] = useState<Location>({
    address: '',
    city: 'Helsinki',
    country: 'FI',
    postalCode: '00341'
  });
  
  const [urgency, setUrgency] = useState<DeliveryUrgency>(3);
  const [packageType, setPackageType] = useState<string>("package");
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      // Validate form
      if (dimensions.weight <= 0 || dimensions.length <= 0 || 
          dimensions.width <= 0 || dimensions.height <= 0) {
        toast.error('Please enter valid parcel dimensions');
        return;
      }
      
      if (!pickupLocation.city || !deliveryLocation.city) {
        toast.error('Please enter valid pickup and delivery locations');
        return;
      }
      
      // Call API to calculate rates
      const rates = await API.getRates(
        dimensions,
        pickupLocation,
        deliveryLocation,
        urgency
      );
      
      onRatesCalculated(rates);
      toast.success('Shipping rates calculated successfully');
    } catch (error) {
      console.error('Error calculating rates:', error);
      toast.error('Failed to calculate shipping rates. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwapLocations = () => {
    const temp = { ...pickupLocation };
    setPickupLocation({ ...deliveryLocation });
    setDeliveryLocation(temp);
  };
  
  return (
    <Card className="w-full max-w-5xl mx-auto overflow-hidden animate-fade-in">
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
            1
          </div>
          <h2 className="text-xl font-medium">Shipping Details</h2>
        </div>
        
        <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="p-4">
              <div className="bg-slate-700 text-white p-3 font-semibold">
                Från
              </div>
              
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label>Land</Label>
                  <Select 
                    value={pickupLocation.country} 
                    onValueChange={(value) => setPickupLocation({...pickupLocation, country: value})}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <span>{getCountryFlag(pickupLocation.country)}</span>
                          <span>{getCountryName(pickupLocation.country)}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SE">
                        <div className="flex items-center gap-2">
                          <span>🇸🇪</span>
                          <span>Sverige</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="FI">
                        <div className="flex items-center gap-2">
                          <span>🇫🇮</span>
                          <span>Finland</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="NO">
                        <div className="flex items-center gap-2">
                          <span>🇳🇴</span>
                          <span>Norge</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="DK">
                        <div className="flex items-center gap-2">
                          <span>🇩🇰</span>
                          <span>Danmark</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Postnummer</Label>
                  <Input 
                    placeholder="Postal code" 
                    value={pickupLocation.postalCode}
                    onChange={(e) => setPickupLocation({...pickupLocation, postalCode: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground">
                    {pickupLocation.postalCode}, {pickupLocation.city}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <RadioGroup className="flex gap-4" value="privatperson" onValueChange={() => {}}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="from-company" />
                      <Label htmlFor="from-company">Företag</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="privatperson" id="from-private" />
                      <Label htmlFor="from-private">Privatperson</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer z-10" onClick={handleSwapLocations}>
              <ArrowRightLeft className="h-4 w-4" />
            </div>
          </ResizableHandle>
          
          <ResizablePanel defaultSize={50}>
            <div className="p-4">
              <div className="bg-slate-700 text-white p-3 font-semibold">
                Till
              </div>
              
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label>Land</Label>
                  <Select 
                    value={deliveryLocation.country} 
                    onValueChange={(value) => setDeliveryLocation({...deliveryLocation, country: value})}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <span>{getCountryFlag(deliveryLocation.country)}</span>
                          <span>{getCountryName(deliveryLocation.country)}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SE">
                        <div className="flex items-center gap-2">
                          <span>🇸🇪</span>
                          <span>Sverige</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="FI">
                        <div className="flex items-center gap-2">
                          <span>🇫🇮</span>
                          <span>Finland</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="NO">
                        <div className="flex items-center gap-2">
                          <span>🇳🇴</span>
                          <span>Norge</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="DK">
                        <div className="flex items-center gap-2">
                          <span>🇩🇰</span>
                          <span>Danmark</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Postnummer</Label>
                  <Input 
                    placeholder="Postal code" 
                    value={deliveryLocation.postalCode}
                    onChange={(e) => setDeliveryLocation({...deliveryLocation, postalCode: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground">
                    {deliveryLocation.postalCode}, {deliveryLocation.city}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <RadioGroup className="flex gap-4" value="privatperson" onValueChange={() => {}}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="to-company" />
                      <Label htmlFor="to-company">Företag</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="privatperson" id="to-private" />
                      <Label htmlFor="to-private">Privatperson</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
            2
          </div>
          <h2 className="text-xl font-medium">Parcel Information</h2>
        </div>
        
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Ange sändningsdetaljer</h3>
          
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="space-y-2">
              <Label>Antal</Label>
              <Input
                type="number"
                min="1"
                value="1"
                className="text-center"
                onChange={() => {}}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Vad skickar du</Label>
              <Select value={packageType} onValueChange={setPackageType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select package type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="package">Paket</SelectItem>
                  <SelectItem value="document">Dokument</SelectItem>
                  <SelectItem value="pallet">Pall</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Längd</Label>
              <Input
                type="number"
                min="1"
                value={dimensions.length.toString()}
                onChange={(e) => setDimensions({ ...dimensions, length: parseInt(e.target.value) || 0 })}
                postfix="cm"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Bredd</Label>
              <Input
                type="number"
                min="1"
                value={dimensions.width.toString()}
                onChange={(e) => setDimensions({ ...dimensions, width: parseInt(e.target.value) || 0 })}
                postfix="cm"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Höjd</Label>
              <Input
                type="number"
                min="1"
                value={dimensions.height.toString()}
                onChange={(e) => setDimensions({ ...dimensions, height: parseInt(e.target.value) || 0 })}
                postfix="cm"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Vikt</Label>
              <Input
                type="number"
                min="0.1"
                step="0.1"
                value={dimensions.weight.toString()}
                onChange={(e) => setDimensions({ ...dimensions, weight: parseFloat(e.target.value) || 0 })}
                postfix="kg"
              />
            </div>
          </div>
          
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              Lägg till kolli
            </Button>
            
            <Button
              type="submit"
              onClick={handleSubmit}
              isLoading={isLoading}
              className="bg-green-600 hover:bg-green-700 text-white"
              icon={<Truck className="h-5 w-5" />}
            >
              Kontrollera priser!
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 p-6 rounded-lg border">
        <h3 className="text-lg font-medium mb-4">Sammanfattning</h3>
        
        <div className="flex items-start gap-4">
          <div className="bg-slate-200 p-3 rounded-md">
            <Navigation className="h-6 w-6 text-slate-700" />
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 flex-1">
            <div>
              <p className="font-medium">Från</p>
              <p>{pickupLocation.postalCode}</p>
              <p>{pickupLocation.city}</p>
              <p>{getCountryName(pickupLocation.country)}</p>
            </div>
            
            <div>
              <p className="font-medium">Till</p>
              <p>{deliveryLocation.postalCode}</p>
              <p>{deliveryLocation.city}</p>
              <p>{getCountryName(deliveryLocation.country)}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingForm;
