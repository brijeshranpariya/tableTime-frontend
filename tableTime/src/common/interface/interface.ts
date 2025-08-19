export interface RestaurantDetail {
  address: string;
  closing_time: string;
  created_at: string;
  cuisine_type: string;
  email: string;
  id: string;
  is_active: boolean;
  opening_time: string;
  phone_number: string;
  rating_avg: string;
  restaurant_name: string;
  updated_at: string;
  website_url: string;
  price_min: number;
  price_max: number;
}

export interface menuItemDetail {
  menu_item_id: string;
  restaurant_id: string;
  name: string;
  description: string;
  price: number;
  is_available: boolean;
}

export interface AvailableTableDetails {
  total_capacity: number;
  location: string;
  restaurant_id: string;
  status: string;
  table_id: string;
}
export interface CapacityWiseTableDetails {
  total_capacity: number;
  tableCount: number;
}
export interface tableBookingFormData {
  countryCode: string;
  phoneNumber: string;
  tableCapacity: number;
  expectedArrivalTime: string;
  numberOfGuest: number;
  additionalNote?: string;
}
export interface tableBookingFormDataError {
  phoneNumber: string;
  tableCapacity: string;
  expectedArrivalTime: string;
  numberOfGuest: string;
  additionalNotes?: string;
}
