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
