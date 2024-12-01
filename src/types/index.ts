export interface Player {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  waiverSigned: boolean;
  points: number;
}

export interface Booking {
  id: number;
  gameId: number;
  date: string;
  time: string;
  numberOfPlayers: number;
  totalAmount: number;
  depositAmount: number;
  playerId: number;
  status: 'pending' | 'confirmed' | 'completed';
  paymentStatus: 'pending' | 'deposit_paid' | 'fully_paid';
}

export interface Game {
  id: number;
  name: string;
  description: string;
  pricePerPerson: number;
  minPlayers: number;
  maxPlayers: number;
  duration: number;
  imageUrl: string;
  availableSlots: number;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  status: 'pending' | 'succeeded' | 'failed';
} 