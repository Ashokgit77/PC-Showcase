import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const CardsList = () => {
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      image: "gpu.jpg",
      title: "Graphics Card (GPU)",
      sTitle: "Graphics processing unit",
      description: "GPU for smooth gaming and rendering.",
    },
    {
      id: 2,
      image: "cpu.jpg",
      title: "Processor (CPU)",
      sTitle: "Central processing unit",
      description: "Fast CPU for high-speed performance.",
    },
    {
      id: 3,
      image: "ram.jpg",
      title: "Random Access Memory (RAM)",
      sTitle: "Random-access memory",
      description: "Upgrade your memory for better multitasking.",
    },
    {
      id: 4,
      image: "ssd.jpg",
      title: "Solid-State Drive (SSD)",
      sTitle: "SSD",
      description: "Stroage for Fastest Activities.",
    },
    {
      id: 5,
      image: "mb.jpg",
      title: "Mother Board",
      sTitle: "Motherboard",
      description: "The Main Board For Connecting All Components.",
    },
    {
      id: 6,
      image: "hdd.jpg",
      title: "Hard Disk Drive ( HDD )",
      sTitle: "Hard disk",
      description: "Hard Drive Disk is Store a Huge Data.",
    },
    {
      id: 7,
      image: "ps.jpg",
      title: "Power Supply",
      sTitle: "Power supply unit (computer)",
      description: "Supply The Power to the PC Components",
    },
    {
      id: 8,
      image: "case.jpg",
      title: "Cabinet",
      sTitle: "Computer case",
      description: "It is case That cover the Whole PC. ",
    },
    {
      id: 9,
      image: "keyboard.jpg",
      title: "Keyboard",
      sTitle: "Computer keyboard",
      description: "All Keys to be help Communicate to the PC.",
    },
    {
      id: 10,
      image: "mouse.webp",
      title: "Mouse",
      sTitle: "Computer mouse",
      description: "Mouse is a EventMaker to a PC.",
    },
    {
      id: 11,
      image: "spk.jpg",
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
