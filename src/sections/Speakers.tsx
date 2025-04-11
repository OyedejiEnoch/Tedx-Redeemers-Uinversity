"use client";
 
import {Carousel} from "@/components/ui/Carousel";

const Speakers = () => {

    const slideData = [
        {
          title: "DAYO ADEDEJI",
          details: "Founder/CEO Dynasty Africa",
          src: "/assets/Dayo.jpg",
        },
        {
          title: "OLANREWAJU OLUMIDE",
          details: "Managing Director, Acuity",
          src: "/assets/LANRE.jpeg",
        },
        {
          title: "JESUNIMOFE",
          details: "Founder ARTXPRESSION",
          src: "/assets/jesunimofe.jpg",
        },
        {
          title: "VICTOR ODULATE",
          details: "Legal Expert",
          src: "/assets/Victor.jpg",
        },
        {
          title: "TOBE UGEH",
          details: "Influencer/Content Creator",
          src: "/assets/Tobeszn.jpg",
        },
        {
          title: "DEBI JOHNSON",
          details: "Writer/Performance Artist",
          src: "/assets/DEBI.JPEG",
        },
        {
          title: "PRECIOUS IBEH",
          details: "Brand Strategist",
          src: "/assets/PRECIOUS.jpg",
        },
        {
          title: "CHIMEZIE IMO",
          details: "Actor/Producer",
          src: "/assets/Chimezie.jpeg",
        },
      ];

  return (
    <section id="speakers" className="relative overflow-hidden w-full h-full py-24">
        <h2 className="text-center mb-16 text-3xl md:text-4xl lg:text-5xl font-bold">Meet Our Speakers</h2>
      <Carousel slides={slideData} />
    </section>
  )
}

export default Speakers
