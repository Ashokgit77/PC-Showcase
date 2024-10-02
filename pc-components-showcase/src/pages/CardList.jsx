import React from "react";
import Card from "../components/Card"; // Import the Card component
import { useNavigate } from "react-router-dom";

const CardsList = () => {
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Graphics Card",
      description: "GPU for smooth gaming and rendering.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Processor",
      description: "Fast CPU for high-speed performance.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "RAM",
      description: "Upgrade your memory for better multitasking.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "SSD",
      description: "Stroage for Fastest Activities.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "MotherBoard",
      description: "The Main Board For Connecting All Components.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "HDD",
      description: "Hard Drive Disk is Store a Huge Data.",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Power Supply",
      description: "Supply The Power to the PC Components",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Cabinet",
      description: "It is case That cover the Whole PC. ",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Keyboard",
      description: "All Keys to be help Communicate to the PC.",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Mouse",
      description: "Mouse is a EventMaker to a PC.",
    },
    {
      id: 11,
      image: "https://via.placeholder.com/400x200", // Replace with real image URL
      title: "Speakers",
      description: "Audio Speakers to Listen Music and a Clear Audio.",
    },
  ];

  const handleButtonClick = (id) => {
    navigate(`/card-component/${id}`);
    console.log(`The Card ID is ${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          id={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={(card.buttonText = "Show List")}
          onButtonClick={() => handleButtonClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardsList;
