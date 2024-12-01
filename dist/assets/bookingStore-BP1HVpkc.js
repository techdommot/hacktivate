import{z as s}from"./index-CoUEsawU.js";const o=s("booking",{state:()=>({bookings:[],games:[{id:1,name:"Laser Tag: Cyber Arena",description:"Enter the digital battlefield in our state-of-the-art laser tag arena. Perfect for team building and competitive fun!",pricePerPerson:35,minPlayers:2,maxPlayers:5,duration:45,imageUrl:"https://picsum.photos/400/300?random=1",availableSlots:15},{id:2,name:"Press Start: Retro Gaming",description:"Journey through gaming history with our curated collection of classic arcade games and consoles.",pricePerPerson:30,minPlayers:2,maxPlayers:4,duration:60,imageUrl:"https://picsum.photos/400/300?random=2",availableSlots:8},{id:3,name:"Hoops Challenge",description:"Test your basketball skills in our high-tech court with real-time scoring and performance tracking.",pricePerPerson:25,minPlayers:2,maxPlayers:4,duration:30,imageUrl:"https://picsum.photos/400/300?random=3",availableSlots:12},{id:4,name:"Escape Room: Prison Break",description:"Try to escape from a maximum-security prison before time runs out!",pricePerPerson:25,minPlayers:2,maxPlayers:5,duration:60,imageUrl:"https://picsum.photos/400/300?random=4",availableSlots:10},{id:5,name:"Murder Mystery",description:"Solve the murder mystery in this immersive experience!",pricePerPerson:30,minPlayers:2,maxPlayers:5,duration:90,imageUrl:"https://picsum.photos/400/300?random=5",availableSlots:6}]}),actions:{createBooking(e){const a={id:Date.now(),status:"pending",...e},r=this.games.find(i=>i.id===e.gameId);return r&&(r.availableSlots=Math.max(0,r.availableSlots-e.numberOfPlayers)),this.bookings.push(a),a},getGameById(e){return this.games.find(a=>a.id===e)}}});export{o as u};