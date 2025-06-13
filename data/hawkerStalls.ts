export const hawkerStalls = [
  {
    id: 1,
    name: "Tian Tian Hainanese Chicken Rice",
    location: "Maxwell Food Centre",
    cuisine: "Hainanese",
    rating: 4.7,
    imageUrl: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg",
    description: "Tian Tian Hainanese Chicken Rice is a famous stall known for its succulent chicken and fragrant rice. The chicken is poached to perfection, resulting in tender meat and smooth skin. The rice is cooked with chicken stock, ginger, and garlic, giving it a rich flavor that complements the chicken perfectly.",
    fullAddress: "1 Kadayanallur St, #01-10/11 Maxwell Food Centre, Singapore 069184",
    isOpen: true,
    recommendationPercentage: 92,
    openingHours: [
      { day: "Monday", hours: "10:00 AM - 8:00 PM" },
      { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
      { day: "Friday", hours: "10:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 8:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    popularDishes: [
      { name: "Chicken Rice Set", price: 5.50, imageUrl: "https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg" },
      { name: "Roasted Chicken Rice", price: 5.00, imageUrl: "https://images.pexels.com/photos/5409008/pexels-photo-5409008.jpeg" },
      { name: "Steamed Chicken Rice", price: 5.00, imageUrl: "https://images.pexels.com/photos/5409007/pexels-photo-5409007.jpeg" }
    ],
    featured: true
  },
  {
    id: 2,
    name: "Hill Street Tai Hwa Pork Noodle",
    location: "Crawford Lane",
    cuisine: "Teochew",
    rating: 4.8,
    imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    description: "Hill Street Tai Hwa Pork Noodle is a Michelin-starred hawker stall specializing in bak chor mee (minced pork noodles). The dish features springy noodles tossed in a savory-tangy sauce, topped with minced pork, pork liver, sliced pork, dumplings, and crispy fried fish. The perfect balance of flavors has earned this stall its well-deserved reputation.",
    fullAddress: "466 Crawford Lane, #01-12, Singapore 190466",
    isOpen: false,
    recommendationPercentage: 95,
    openingHours: [
      { day: "Monday", hours: "9:30 AM - 9:00 PM" },
      { day: "Tuesday", hours: "9:30 AM - 9:00 PM" },
      { day: "Wednesday", hours: "Closed" },
      { day: "Thursday", hours: "9:30 AM - 9:00 PM" },
      { day: "Friday", hours: "9:30 AM - 9:00 PM" },
      { day: "Saturday", hours: "9:30 AM - 9:00 PM" },
      { day: "Sunday", hours: "9:30 AM - 9:00 PM" }
    ],
    popularDishes: [
      { name: "Bak Chor Mee (Dry)", price: 8.00, imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
      { name: "Bak Chor Mee (Soup)", price: 8.00, imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
      { name: "Mee Pok", price: 7.00, imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" }
    ],
    featured: true
  },
  {
    id: 3,
    name: "Liao Fan Hong Kong Soya Sauce Chicken",
    location: "Chinatown Complex",
    cuisine: "Cantonese",
    rating: 4.5,
    imageUrl: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    description: "Liao Fan Hong Kong Soya Sauce Chicken is the first Michelin-starred hawker stall in the world. Their signature soya sauce chicken is marinated and braised in a secret blend of spices and sauces, resulting in a flavorful, tender chicken with a beautiful caramelized exterior. The stall also offers char siu (barbecued pork) and roast pork.",
    fullAddress: "335 Smith Street, #02-126 Chinatown Complex, Singapore 050335",
    isOpen: true,
    recommendationPercentage: 88,
    openingHours: [
      { day: "Monday", hours: "10:30 AM - 7:00 PM" },
      { day: "Tuesday", hours: "10:30 AM - 7:00 PM" },
      { day: "Wednesday", hours: "10:30 AM - 7:00 PM" },
      { day: "Thursday", hours: "10:30 AM - 7:00 PM" },
      { day: "Friday", hours: "10:30 AM - 7:00 PM" },
      { day: "Saturday", hours: "10:30 AM - 7:00 PM" },
      { day: "Sunday", hours: "10:30 AM - 7:00 PM" }
    ],
    popularDishes: [
      { name: "Soya Sauce Chicken Rice", price: 7.00, imageUrl: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg" },
      { name: "Char Siu Rice", price: 7.00, imageUrl: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg" },
      { name: "Roast Pork Rice", price: 7.00, imageUrl: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg" }
    ],
    featured: false
  },
  {
    id: 4,
    name: "328 Katong Laksa",
    location: "East Coast Road",
    cuisine: "Peranakan",
    rating: 4.6,
    imageUrl: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    description: "328 Katong Laksa is famous for its rich, spicy coconut-based laksa broth filled with rice noodles, prawns, fishcake, and cockles. What sets this laksa apart is that the noodles are cut into shorter pieces, allowing you to eat the dish with just a spoon. The stall gained international recognition when it beat celebrity chef Gordon Ramsay in a cooking showdown.",
    fullAddress: "51 East Coast Road, Singapore 428770",
    isOpen: true,
    recommendationPercentage: 90,
    openingHours: [
      { day: "Monday", hours: "10:00 AM - 9:00 PM" },
      { day: "Tuesday", hours: "10:00 AM - 9:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 9:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 9:00 PM" },
      { day: "Friday", hours: "10:00 AM - 9:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 9:00 PM" }
    ],
    popularDishes: [
      { name: "Katong Laksa", price: 6.50, imageUrl: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" },
      { name: "Laksa with Extra Prawns", price: 8.50, imageUrl: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" },
      { name: "Otah", price: 2.00, imageUrl: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" }
    ],
    featured: true
  },
  {
    id: 5,
    name: "Ah Hock Fried Hokkien Mee",
    location: "Chomp Chomp Food Centre",
    cuisine: "Hokkien",
    rating: 4.4,
    imageUrl: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
    description: "Ah Hock Fried Hokkien Mee serves one of the best Hokkien mee in Singapore. The dish consists of yellow and white noodles stir-fried with prawns, squid, pork belly, and egg in a rich seafood stock. What makes this stall special is their perfectly balanced sauce and the smoky 'wok hei' flavor that comes from cooking over high heat.",
    fullAddress: "20 Kensington Park Road, Chomp Chomp Food Centre, Singapore 557269",
    isOpen: false,
    recommendationPercentage: 85,
    openingHours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "5:00 PM - 12:00 AM" },
      { day: "Wednesday", hours: "5:00 PM - 12:00 AM" },
      { day: "Thursday", hours: "5:00 PM - 12:00 AM" },
      { day: "Friday", hours: "5:00 PM - 12:00 AM" },
      { day: "Saturday", hours: "5:00 PM - 12:00 AM" },
      { day: "Sunday", hours: "5:00 PM - 12:00 AM" }
    ],
    popularDishes: [
      { name: "Hokkien Mee", price: 5.00, imageUrl: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg" },
      { name: "Large Hokkien Mee", price: 8.00, imageUrl: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg" },
      { name: "Special Hokkien Mee", price: 10.00, imageUrl: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg" }
    ],
    featured: false
  },
  {
    id: 6,
    name: "Zhen Zhen Porridge",
    location: "Maxwell Food Centre",
    cuisine: "Cantonese",
    rating: 4.3,
    imageUrl: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg",
    description: "Zhen Zhen Porridge is known for its smooth and flavorful Cantonese-style congee. Their century egg and pork porridge is particularly popular, featuring tender slices of pork, century egg, and fresh ingredients. The consistency is perfect - not too thick or thin, allowing the flavors to shine through.",
    fullAddress: "1 Kadayanallur St, #01-54 Maxwell Food Centre, Singapore 069184",
    isOpen: true,
    recommendationPercentage: 82,
    openingHours: [
      { day: "Monday", hours: "5:30 AM - 2:30 PM" },
      { day: "Tuesday", hours: "5:30 AM - 2:30 PM" },
      { day: "Wednesday", hours: "5:30 AM - 2:30 PM" },
      { day: "Thursday", hours: "Closed" },
      { day: "Friday", hours: "5:30 AM - 2:30 PM" },
      { day: "Saturday", hours: "5:30 AM - 2:30 PM" },
      { day: "Sunday", hours: "5:30 AM - 2:30 PM" }
    ],
    popularDishes: [
      { name: "Century Egg & Pork Porridge", price: 4.00, imageUrl: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg" },
      { name: "Sliced Fish Porridge", price: 4.50, imageUrl: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg" },
      { name: "Mixed Porridge", price: 5.00, imageUrl: "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg" }
    ],
    featured: false
  },
  {
    id: 7,
    name: "Kway Guan Huat Joo Chiat Popiah",
    location: "Joo Chiat Road",
    cuisine: "Hokkien",
    rating: 4.7,
    imageUrl: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
    description: "Kway Guan Huat has been making traditional popiah (fresh spring rolls) since 1938. What sets them apart is their handmade popiah skin, which is thin yet sturdy enough to hold all the fillings. The popiah is filled with a delicious mix of braised turnip, bamboo shoots, bean sprouts, egg, and more, creating a perfect balance of textures and flavors.",
    fullAddress: "95 Joo Chiat Road, Singapore 427389",
    isOpen: true,
    recommendationPercentage: 93,
    openingHours: [
      { day: "Monday", hours: "9:00 AM - 9:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 9:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 9:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 9:00 PM" },
      { day: "Friday", hours: "9:00 AM - 9:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "9:00 AM - 9:00 PM" }
    ],
    popularDishes: [
      { name: "Traditional Popiah", price: 2.20, imageUrl: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg" },
      { name: "Prawn Popiah", price: 3.00, imageUrl: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg" },
      { name: "Popiah Skin (10 pcs)", price: 8.00, imageUrl: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg" }
    ],
    featured: true
  },
  {
    id: 8,
    name: "Tiong Bahru Hainanese Boneless Chicken Rice",
    location: "Tiong Bahru Market",
    cuisine: "Hainanese",
    rating: 4.5,
    imageUrl: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg",
    description: "Tiong Bahru Hainanese Boneless Chicken Rice is a local favorite known for its tender, silky chicken and aromatic rice. The chicken is poached at just the right temperature to ensure it remains juicy, while the rice is cooked with chicken fat and stock for maximum flavor. Their chili sauce, with a perfect balance of spiciness and tanginess, complements the dish wonderfully.",
    fullAddress: "30 Seng Poh Road, #02-82 Tiong Bahru Market, Singapore 168898",
    isOpen: true,
    recommendationPercentage: 87,
    openingHours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
      { day: "Friday", hours: "10:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 8:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 8:00 PM" }
    ],
    popularDishes: [
      { name: "Chicken Rice Set", price: 4.50, imageUrl: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg" },
      { name: "Roasted Chicken Rice", price: 4.50, imageUrl: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg" },
      { name: "Chicken Drumstick Rice", price: 5.50, imageUrl: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg" }
    ],
    featured: false
  }
];
