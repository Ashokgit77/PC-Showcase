import React from "react";
import Card from "../components/Card"; // Import the Card component
import { useNavigate } from "react-router-dom";

const CardsList = () => {
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x200.png?text=GPU", // Replace with real image URL
      title: "Graphics Card (GPU)",
      sTitle: "Graphics processing unit",
      description: "GPU for smooth gaming and rendering.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x200.png?text=CPU", // Replace with real image URL
      title: "Processor (CPU)",
      sTitle: "Central processing unit",
      description: "Fast CPU for high-speed performance.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x200.png?text=RAM", // Replace with real image URL
      title: "Random Access Memory (RAM)",
      sTitle: "Random-access memory",
      description: "Upgrade your memory for better multitasking.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x200.png?text=SSD", // Replace with real image URL
      title: "Solid-State Drive (SSD)",
      sTitle: "SSD",
      description: "Stroage for Fastest Activities.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x200.png?text=Motherboard", // Replace with real image URL
      title: "Mother Board",
      sTitle: "Motherboard",
      description: "The Main Board For Connecting All Components.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x200.png?text=HDD", // Replace with real image URL
      title: "Hard Disk Drive ( HDD )",
      sTitle: "Hard disk",
      description: "Hard Drive Disk is Store a Huge Data.",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/400x200.png?text=Power Supply", // Replace with real image URL
      title: "Power Supply",
      sTitle: "Power supply unit (computer)",
      description: "Supply The Power to the PC Components",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/400x200.png?text=Cabinet", // Replace with real image URL
      title: "Cabinet",
      sTitle: "Computer case",
      description: "It is case That cover the Whole PC. ",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/400x200.png?text=Keyboard", // Replace with real image URL
      title: "Keyboard",
      sTitle: "Computer keyboard",
      description: "All Keys to be help Communicate to the PC.",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/400x200.png?text=Mouse", // Replace with real image URL
      title: "Mouse",
      sTitle: "Computer mouse",
      description: "Mouse is a EventMaker to a PC.",
    },
    {
      id: 11,
      image: "https://via.placeholder.com/400x200.png?text=Speakers", // Replace with real image URL
      title: "Speakers",
      sTitle: "Computer speakers",
      description: "Audio Speakers to Listen Music and a Clear Audio.",
    },
  ];

  const handleButtonClick = (title, sTitle) => {
    navigate(`/card-component/${title}`, { state: { title, sTitle } });
  };

  return (
    <>
      <h1 className="text-2xl text-center m-5 font-bold bg-blue-900 p-2 text-white rounded-lg">
        Components
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={(card.buttonText = "Show List")}
            onButtonClick={() => handleButtonClick(card.title, card.sTitle)}
          />
        ))}
      </div>
    </>
  );
};

export default CardsList;
