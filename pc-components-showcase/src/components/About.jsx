import React from "react";

const About = () => {
  return (
    <div className="about-section bg-blend-darken py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          About PC Components
        </h1>
        <p className="text-white text-lg mb-8">
          The heart of every computer lies in its components, each designed to
          fulfill a specific function that ensures smooth operation and
          performance. From processing power to storage solutions, these
          elements work in harmony to create the system that powers your
          everyday tasks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Choose Our Components?
            </h2>
            <ul className="list-disc list-inside text-white w-full">
              <li className="mb-2 bg-blue-900 rounded-md p-3 text-white">
                Graphics Cards - GPU: A graphics card is essential for rendering
                images, videos, and games. It's a must-have for gamers, video
                editors, and anyone working with high-resolution visuals.
              </li>
              <li className="mb-2  bg-blue-900 rounded-md p-3 text-white">
                Processors - CPU: The central processing unit is the brain of
                your computer. It handles all instructions from your software,
                making your PC run faster and more efficiently.
              </li>
              <li className="mb-2 bg-blue-900 rounded-md p-3 text-white">
                RAM - Memory: Random-access memory stores temporary data that
                your computer needs to access quickly. More RAM means smoother
                multitasking and faster performance, especially when running
                multiple applications at once.
              </li>

              <li className="mb-2  bg-blue-900 rounded-md p-3 text-white">
                Storage - SSD & HDD: Solid-state drives SSD and hard disk drives
                HDD are crucial for storing your data. SSDs offer faster access
                to files and programs, while HDDs provide larger storage at a
                lower cost.
              </li>

              <li className="mb-2  bg-blue-900 rounded-md p-3 text-white">
                Motherboard: The motherboard is the backbone of your PC,
                connecting all your components, including the CPU, memory,
                storage, and peripherals.
              </li>

              <li className="mb-2  bg-blue-900 rounded-md p-3 text-white">
                Power Supply - PSU: A reliable power supply unit delivers the
                necessary electricity to all your components, ensuring they
                function optimally and without failure.
              </li>

              <li className="mb-2 bg-blue-900  rounded-md p-3 text-white">
                Peripherals: Devices like keyboards, mice, and monitors might
                seem secondary, but they are essential for interaction with your
                system, whether for work or play.
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="pcc.png"
              alt="PC Components Illustration"
              className="w-full max-w-sm rounded-lg shadow-lg border-2"
            />
          </div>
        </div>

        <p className="text-white text-lg mt-8">
          Each component plays a vital role in creating a balanced and efficient
          system. Whether you're building a custom PC or upgrading an existing
          one, understanding these parts is key to optimizing performance for
          your specific needs.
        </p>
      </div>
    </div>
  );
};

export default About;
