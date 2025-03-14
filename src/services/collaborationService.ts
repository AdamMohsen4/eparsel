
import { supabase } from "@/integrations/supabase/client";
import { Collaboration } from "@/components/collaboration/types";
import { toast } from "@/components/ui/use-toast";

interface CollaborationFormData {
  businessName: string;
  destination: string;
  volume: string;
  frequency: string;
  nextShipmentDate: string;
  notes?: string;
  contactEmail: string;
  contactPhone: string;
}

export const fetchCollaborations = async (): Promise<Collaboration[]> => {
  try {
    const { data, error } = await supabase
      .from('collaborations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching collaborations:", error);
      return [];
    }
    
    return data.map(item => ({
      id: item.id,
      businessName: item.business_name,
      destination: item.destination,
      volume: item.volume,
      frequency: item.frequency,
      nextShipmentDate: item.next_shipment_date,
      notes: item.notes,
      contactEmail: item.contact_email,
      contactPhone: item.contact_phone
    })) || [];
  } catch (error) {
    console.error("Error in fetchCollaborations:", error);
    return [];
  }
};

export const createCollaboration = async (
  userId: string,
  formData: CollaborationFormData
): Promise<boolean> => {
  try {
    // Instead of trying to set a session with the user ID,
    // we'll directly insert the data with the user ID
    const { error } = await supabase
      .from('collaborations')
      .insert({
        user_id: userId,
        business_name: formData.businessName,
        destination: formData.destination,
        volume: formData.volume,
        frequency: formData.frequency,
        next_shipment_date: formData.nextShipmentDate,
        notes: formData.notes,
        contact_email: formData.contactEmail,
        contact_phone: formData.contactPhone
      });
    
    if (error) {
      console.error("Error creating collaboration:", error);
      toast({
        title: "Error",
        description: "Failed to create collaboration listing. Please try again.",
        variant: "destructive",
      });
      return false;
    }
    
    toast({
      title: "Success",
      description: "Collaboration listing created successfully!",
    });
    return true;
  } catch (error) {
    console.error("Error in createCollaboration:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred. Please try again.",
      variant: "destructive",
    });
    return false;
  }
};
