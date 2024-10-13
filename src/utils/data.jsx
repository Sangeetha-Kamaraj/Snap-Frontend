// utils/data.jsx

// Sample Pins Data
export const samplePins = [
    {
      id: 1,
      title: "Beautiful Sunset",
      imageUrl: "https://source.unsplash.com/1600x900/?sunset",
      category: "Nature",
      createdBy: "user1",
    },
    {
      id: 2,
      title: "Coding Workspace",
      imageUrl: "https://source.unsplash.com/1600x900/?coding,workspace",
      category: "Coding",
      createdBy: "user2",
    },
    {
      id: 3,
      title: "Delicious Food",
      imageUrl: "https://source.unsplash.com/1600x900/?food",
      category: "Food",
      createdBy: "user3",
    },
    {
      id: 4,
      title: "Adventurous Travels",
      imageUrl: "https://source.unsplash.com/1600x900/?travel",
      category: "Travel",
      createdBy: "user4",
    },
    {
      id: 5,
      title: "Cute Animals",
      imageUrl: "https://source.unsplash.com/1600x900/?animals",
      category: "Animals",
      createdBy: "user5",
    },
  ];
  
  // Utility Functions
  export const generateRandomId = () => {
    return Math.floor(Math.random() * 10000);
  };
  
  export const formatPinTitle = (title) => {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title;
  };
  
  // Predefined Categories
  export const categories = [
    "Animals",
    "Gaming",
    "Coding",
    "Vehicles",
    "Nature",
    "Photography",
    "Travel",
    "Food",
  ];
  
  // Function to get random pin from samplePins
  export const getRandomPin = () => {
    const randomIndex = Math.floor(Math.random() * samplePins.length);
    return samplePins[randomIndex];
  };
  