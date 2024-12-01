import { defineStore } from 'pinia';
import type { Booking, Game } from '@/types';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookings: [] as Booking[],
    games: [
      {
        id: 1,
        name: 'Laser Tag: Cyber Arena',
        description: 'Enter the digital battlefield in our state-of-the-art laser tag arena. Perfect for team building and competitive fun!',
        pricePerPerson: 35,
        minPlayers: 2,
        maxPlayers: 5,
        duration: 45,
        imageUrl: 'https://picsum.photos/400/300?random=1',
        availableSlots: 15,
      },
      {
        id: 2,
        name: 'Press Start: Retro Gaming',
        description: 'Journey through gaming history with our curated collection of classic arcade games and consoles.',
        pricePerPerson: 30,
        minPlayers: 2,
        maxPlayers: 4,
        duration: 60,
        imageUrl: 'https://picsum.photos/400/300?random=2',
        availableSlots: 8,
      },
      {
        id: 3,
        name: 'Hoops Challenge',
        description: 'Test your basketball skills in our high-tech court with real-time scoring and performance tracking.',
        pricePerPerson: 25,
        minPlayers: 2,
        maxPlayers: 4,
        duration: 30,
        imageUrl: 'https://picsum.photos/400/300?random=3',
        availableSlots: 12,
      },
      {
        id: 4,
        name: 'Escape Room: Prison Break',
        description: 'Try to escape from a maximum-security prison before time runs out!',
        pricePerPerson: 25,
        minPlayers: 2,
        maxPlayers: 5,
        duration: 60,
        imageUrl: 'https://picsum.photos/400/300?random=4',
        availableSlots: 10,
      },
      {
        id: 5,
        name: 'Murder Mystery',
        description: 'Solve the murder mystery in this immersive experience!',
        pricePerPerson: 30,
        minPlayers: 2,
        maxPlayers: 5,
        duration: 90,
        imageUrl: 'https://picsum.photos/400/300?random=5',
        availableSlots: 6,
      },
    ] as Game[],
  }),

  actions: {
    createBooking(bookingData: Omit<Booking, 'id' | 'status'>) {
      const newBooking = {
        id: Date.now(),
        status: 'pending',
        ...bookingData,
      } as Booking;
      
      const game = this.games.find(g => g.id === bookingData.gameId);
      if (game) {
        game.availableSlots = Math.max(0, game.availableSlots - bookingData.numberOfPlayers);
      }
      
      this.bookings.push(newBooking);
      return newBooking;
    },

    getGameById(gameId: number) {
      return this.games.find(game => game.id === gameId);
    },
  },
}); 