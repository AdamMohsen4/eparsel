
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import NavBar from "@/components/layout/NavBar";
import { useUser } from "@clerk/clerk-react";
import { bookShipment } from "@/services/bookingService";
import GooglePlacesAutocomplete from "@/components/inputs/GooglePlacesAutocomplete";

const ShipmentBookingPage = () => {
  const { isSignedIn, user } = useUser();
  const [weight, setWeight] = useState("5");
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("15");
  const [height, setHeight] = useState("10");
  const [pickup, setPickup] = useState("Stockholm, SE");
  const [delivery, setDelivery] = useState("Helsinki, FI");
  const [deliverySpeed, setDeliverySpeed] = useState("standard");
  const [compliance, setCompliance] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);
  
  // Fixed price carrier
  const carrier = { id: 1, name: "E-Parsel Nordic", price: 10, eta: "3 days", icon: "📦" };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingConfirmation(true);
    toast({
      title: "Booking Submitted",
      description: "Your shipment has been booked successfully!",
    });
  };

  const handleBookNow = async () => {
    if (!isSignedIn || !user) {
      // Trigger Clerk sign-in dialog
      document.querySelector<HTMLButtonElement>("button.cl-userButtonTrigger")?.click();
      return;
    }

    setIsBooking(true);
    
    try {
      console.log("Creating booking with user ID:", user.id);
      
      const result = await bookShipment({
        weight,
        dimensions: { length, width, height },
        pickup,
        delivery,
        carrier: { name: carrier.name, price: carrier.price },
        deliverySpeed,
        includeCompliance: compliance,
        userId: user.id
      });
      
      if (result.success) {
        setBookingResult(result);
        toast({
          title: "Shipment Booked",
          description: `Your shipment has been booked with tracking code: ${result.trackingCode}`,
        });
      } else {
        toast({
          title: "Booking Failed",
          description: result.message || "There was a problem with your booking.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error in booking flow:", error);
      toast({
        title: "Booking Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
    }
  };

  const createTestBooking = () => {
    if (!isSignedIn || !user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to create a test booking.",
        variant: "destructive",
      });
      return;
    }

    setWeight("5");
    setLength("20");
    setWidth("15");
    setHeight("10");
    setPickup("Stockholm, SE");
    setDelivery("Helsinki, FI");
    setShowBookingConfirmation(true);
    handleBookNow();
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5">
            <Card>
              <CardHeader>
                <CardTitle>Book a Shipment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Package Details</h3>
                    
                    <div>
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input 
                        id="weight" 
                        type="number" 
                        placeholder="Enter weight" 
                        min="0.1" 
                        max="50"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="length">Length (cm)</Label>
                        <Input 
                          id="length" 
                          type="number" 
                          placeholder="L" 
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="width">Width (cm)</Label>
                        <Input 
                          id="width" 
                          type="number" 
                          placeholder="W" 
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input 
                          id="height" 
                          type="number" 
                          placeholder="H" 
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Locations</h3>
                    
                    <div>
                      <Label htmlFor="pickup">Pickup Address</Label>
                      <GooglePlacesAutocomplete
                        id="pickup"
                        placeholder="Enter pickup address"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        onPlaceSelect={(address) => setPickup(address)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="delivery">Delivery Address</Label>
                      <GooglePlacesAutocomplete
                        id="delivery"
                        placeholder="Enter delivery address"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        onPlaceSelect={(address) => setDelivery(address)}
                        required
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Delivery Options</h3>
                    
                    <RadioGroup 
                      value={deliverySpeed} 
                      onValueChange={setDeliverySpeed}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">Standard (3 days)</Label>
                      </div>
                    </RadioGroup>
                    
                    <div className="flex items-center space-x-2 pt-2">
                      <input 
                        type="checkbox" 
                        id="compliance" 
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={compliance}
                        onChange={(e) => setCompliance(e.target.checked)}
                      />
                      <Label htmlFor="compliance">
                        Add Compliance Package (+€2)
                        <Link to="/compliance" className="ml-1 text-primary text-sm underline">
                          Learn more
                        </Link>
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button type="submit" className="w-full">Calculate Rate</Button>
                    {process.env.NODE_ENV === 'development' && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full" 
                        onClick={createTestBooking}
                      >
                        Create Test Booking
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-3/5">
            <Card>
              <CardHeader>
                <CardTitle>Fixed Rate Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="border border-primary rounded-lg p-4 flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{carrier.icon}</div>
                      <div>
                        <h4 className="font-medium">{carrier.name}</h4>
                        <p className="text-sm text-muted-foreground">Estimated delivery: {carrier.eta}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">€{carrier.price}{compliance ? " + €2" : ""}</p>
                      <Button size="sm" onClick={handleBookNow} disabled={isBooking}>
                        {isBooking ? "Processing..." : "Book Now"}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">About our rates</h4>
                    <p className="text-sm text-muted-foreground">
                      All shipments include tracking and insurance up to €500. Additional insurance 
                      can be purchased during checkout. Rates shown include all taxes and fees.
                    </p>
                  </div>
                  
                  {/* Booking confirmation */}
                  {showBookingConfirmation && (
                    <div className="mt-8 bg-primary/10 p-4 rounded-lg border border-primary">
                      <h4 className="font-medium mb-2 text-primary">Shipment Ready to Book</h4>
                      <p className="text-sm mb-4">
                        Your shipment from {pickup} to {delivery} is ready to be booked with E-Parsel Nordic.
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">Total: €{compliance ? "12" : "10"}</p>
                        <Button onClick={handleBookNow} disabled={isBooking}>
                          {isBooking ? "Processing..." : isSignedIn ? "Confirm Booking" : "Sign In to Book"}
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Booking result */}
                  {bookingResult && (
                    <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-500">
                      <h4 className="font-medium mb-2 text-green-700">Booking Confirmed!</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Tracking Code:</strong> {bookingResult.trackingCode}</p>
                        <p><strong>Pickup Time:</strong> {bookingResult.pickupTime}</p>
                        <p><strong>Total Price:</strong> €{bookingResult.totalPrice}</p>
                        <div className="pt-3">
                          <Button size="sm" variant="outline" asChild>
                            <a href={bookingResult.labelUrl} target="_blank" rel="noopener noreferrer">
                              Download Label
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentBookingPage;
