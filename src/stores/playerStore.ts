import { defineStore } from 'pinia';
import type { Player } from '@/types';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    currentPlayer: null as Player | null,
    players: [] as Player[],
  }),
  
  actions: {
    createPlayer(playerData: Omit<Player, 'id' | 'points'>) {
      const existingPlayer = this.findPlayerByEmail(playerData.email);
      if (existingPlayer) {
        throw new Error('A player with this email already exists');
      }

      const newPlayer = {
        id: Date.now(),
        points: 0,
        ...playerData,
      };
      this.players.push(newPlayer);
      this.currentPlayer = newPlayer;
      localStorage.setItem('currentPlayer', JSON.stringify(newPlayer));
      localStorage.setItem('players', JSON.stringify(this.players));
    },

    findPlayerByEmail(email: string) {
      return this.players.find(player => player.email === email);
    },

    loginPlayer(player: Player) {
      this.currentPlayer = player;
      localStorage.setItem('currentPlayer', JSON.stringify(player));
    },

    loadCurrentPlayer() {
      const stored = localStorage.getItem('currentPlayer');
      const players = localStorage.getItem('players');
      if (stored) {
        this.currentPlayer = JSON.parse(stored);
      }
      if (players) {
        this.players = JSON.parse(players);
      }
    },

    signWaiver() {
      if (this.currentPlayer) {
        this.currentPlayer.waiverSigned = true;
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
        const playerIndex = this.players.findIndex(p => p.id === this.currentPlayer?.id);
        if (playerIndex !== -1) {
          this.players[playerIndex] = this.currentPlayer;
          localStorage.setItem('players', JSON.stringify(this.players));
        }
      }
    },

    addPoints(points: number) {
      if (this.currentPlayer) {
        this.currentPlayer.points += points;
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
        const playerIndex = this.players.findIndex(p => p.id === this.currentPlayer?.id);
        if (playerIndex !== -1) {
          this.players[playerIndex] = this.currentPlayer;
          localStorage.setItem('players', JSON.stringify(this.players));
        }
      }
    },

    logout() {
      this.currentPlayer = null;
      localStorage.removeItem('currentPlayer');
    }
  },
}); 