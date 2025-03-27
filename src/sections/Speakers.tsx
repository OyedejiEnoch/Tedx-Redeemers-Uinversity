"use client";
 
import {Carousel} from "@/components/ui/Carousel";

const Speakers = () => {

    const slideData = [
        {
          title: "DAYO ADEDEJI",
          details: "Dayo Adedeji is the founder and Chief Executive officer of Dynasty Africa. A leading marketing agency in Africa that specializes in Influencer Marketing. Dayo Adedeji and his team at Dynasty Africa are on the path to redefine the creative industry and build the largest influencer network in Africa.",
          src: "/assets/Dayo.jpg",
        },
        {
          title: "OLANREWAJU OLUMIDE",
          details: "Olanrewaju Olumide is the Managing Partner at Acuity Partners, a Private Client Advisory firm. He is a legal and financial advisor who works with individuals and families to structure their wealth, plan succession and grow their businesses across multiple generations",
          src: "/assets/LANRE.jpeg",
        },
        {
          title: "JESUNIMOFE",
          details: "",
          src: "/assets/jesunimofe.jpg",
        },
        {
          title: "VICTOR ODULATE",
          details: "Victor Odulate (popularly called Prof legal expert, project manager, and multidisciplinary thinker with a passion for reimagining systems and optimizing processes. With a background in law, and particularly a penchant for intellectual property, he combines legal expertise with a deep interest in technology, sports, and global affairs.",
          src: "/assets/Victor.jpg",
        },
        {
          title: "TOBE UGEH",
          details: "Tobe Ugeh, known as Tobeszn, is a vibrant influencer from Delta State who has captured the hearts of many with his dynamic content. As a Meta ambassador, he shares lifestyle, fashion, and fresh takes on the Nigerian experience, highlighting the country’s beauty and diversity",
          src: "/assets/Tobeszn.jpg",
        },
        {
          title: "DEBI JOHNSON",
          details: "Deborah Johnson is a writer and performance artist, She is an alumni of UNICEF poetry mediathon, a winner of British council's new narratives challenge, a winner of the Doing things with Stories Global play off Contest by the university of Art, Netherlands and Oxfam. ",
          src: "/assets/DEBI.JPEG",
        },
        {
          title: "PRECIOUS IBEH",
          details: "Precious Ibeh is a multifaceted professional dedicated to inspiring and empowering brands and individuals to reach their full potential. As a Brand Strategist, Public Speaker, Event Host, Content Creator, and Travel Connoisseur, he brings a wealth of expertise and a unique perspective to every project he undertakes.",
          src: "/assets/PRECIOUS.jpg",
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
