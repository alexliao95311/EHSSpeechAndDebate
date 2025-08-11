// LocationsAndDates.tsx
import Image from "next/image";
import React from "react";

// Step 1: Define the props interface  
interface LocationsAndDatesProps {
  items: { location: string; date: string; time: string }[];
}

// Step 2: Accept props in the component  
const LocationsAndDates: React.FC<LocationsAndDatesProps> = ({ items }) => {
  return (
    <section className="my-8">
      <Image
        src="/landing/AADates25-26.png" // fixed: remove "public/" from path
        alt="Aero Advantage Dates and Info"
        width={1000}
        height={600}
        className="mx-auto"
      />

      {/* Example: render items list */}
      <ul className="mt-6">
        {items.map((item, index) => (
          <li key={index} className="py-2">
            <strong>{item.location}</strong> — {item.date} at {item.time}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationsAndDates;

