export const userProfile = {
  id: 1,
  name: "Sarah Tan",
  avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  bio: "Food enthusiast and hawker stall explorer. On a mission to try every chicken rice in Singapore!",
  reviews: [
    {
      id: 1,
      stallId: 1,
      stallName: "Tian Tian Hainanese Chicken Rice",
      stallImage: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg",
      rating: 5.0,
      content: "Best chicken rice in Singapore! The chicken is so tender and juicy, and the rice is fragrant with just the right amount of oiliness. The chili sauce is spicy but not overwhelming. I always come here when I'm in the area.",
      date: "2 days ago",
      images: [
        "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg",
        "https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg"
      ]
    },
    {
      id: 2,
      stallId: 4,
      stallName: "328 Katong Laksa",
      stallImage: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
      rating: 4.5,
      content: "One of the best laksas I've had in Singapore! The broth is rich and creamy with a nice spicy kick. I love that they cut the noodles so you can eat it with just a spoon. The prawns are fresh and the fishcake adds a nice texture. Definitely worth a visit!",
      date: "1 week ago",
      images: [
        "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
      ]
    },
    {
      id: 3,
      stallId: 7,
      stallName: "Kway Guan Huat Joo Chiat Popiah",
      stallImage: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
      rating: 5.0,
      content: "The best popiah in Singapore! The skin is thin yet sturdy, and the filling is a perfect mix of braised turnip, bamboo shoots, and other ingredients. What makes them special is that they make the popiah skin fresh daily. It's a bit more expensive than other popiah stalls, but definitely worth it!",
      date: "2 weeks ago",
      images: [
        "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg"
      ]
    }
  ],
  posts: [
    {
      id: 1,
      title: "What's your favorite chicken rice stall in Singapore?",
      content: "I've been on a mission to try all the famous chicken rice stalls in Singapore. So far, I've tried Tian Tian at Maxwell, Wee Nam Kee, and Boon Tong Kee. Tian Tian has been my favorite so far, but I'd love to hear about other hidden gems that I might have missed. What's your go-to chicken rice stall and what makes it special?",
      date: "2 days ago",
      likes: 24,
      comments: 15
    },
    {
      id: 2,
      title: "My top 5 hawker stalls in Maxwell Food Centre",
      content: "After multiple visits to Maxwell Food Centre, I've compiled a list of my top 5 favorite stalls: 1. Tian Tian Chicken Rice - The chicken is always tender and the rice is fragrant. 2. Maxwell Fuzhou Oyster Cake - Crispy exterior with a savory filling. 3. Jin Hua Sliced Fish Bee Hoon - The fish soup is so comforting. 4. Hum Jin Pang - Freshly fried dough fritters. 5. Zhen Zhen Porridge - Smooth congee with generous toppings.",
      date: "1 week ago",
      likes: 18,
      comments: 12
    }
  ],
  saved: [
    {
      id: 2,
      name: "Hill Street Tai Hwa Pork Noodle",
      location: "Crawford Lane",
      cuisine: "Teochew",
      rating: 4.8,
      imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
    },
    {
      id: 4,
      name: "328 Katong Laksa",
      location: "East Coast Road",
      cuisine: "Peranakan",
      rating: 4.6,
      imageUrl: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
    },
    {
      id: 7,
      name: "Kway Guan Huat Joo Chiat Popiah",
      location: "Joo Chiat Road",
      cuisine: "Hokkien",
      rating: 4.7,
      imageUrl: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg"
    }
  ]
};
