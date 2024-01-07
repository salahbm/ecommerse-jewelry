import React, { FC } from "react";
import styles from "./component.module.css";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: any;
  altText: string;

  heading: string;
}
const Category: FC = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: "/assets/images/ring/ring-1.png",
      altText: "ring",

      heading: "Rings",
    },
    {
      id: 2,
      imageSrc: "/assets/images/chain/chain.png",
      altText: "necklace",

      heading: "Necklace",
    },
    {
      id: 3,
      imageSrc: "/assets/images/bracelet/bracelet-3.png",
      altText: "handmade",

      heading: "Bracelet",
    },
    {
      id: 4,
      imageSrc: "/assets/images/ear-ring/ear-ring.png",
      altText: "earring",

      heading: "Ear-Rings",
    },
  ];

  const Card: FC<CardProps> = ({ imageSrc, altText, heading }) => {
    return (
      <Link className={styles.card} href="#">
        <Image
          src={imageSrc}
          alt={altText}
          width={300}
          height={300}
          priority
          className={styles.cardBackground}
        />
        <div className={styles.cardContent}>
          {/* <p className={styles.cardCategory}>{category}</p> */}
          <h3 className={` text-sm md:text-2xl ${styles.cardHeading}`}>
            {heading}
          </h3>
        </div>
      </Link>
    );
  };
  return (
    <div
      className="flex-wrap font-serif
    text-neutral-600 bg-gray-100 my-4 rounded-md"
    >
      <p className="lg:text-xl italic text-amber-800 text-sm text-center px-12 py-2">
        Select the category to see more items related to the desired category of
        your wish!
      </p>
      <div className={styles.heroSection}>
        <div className={styles.cardGrid}>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              altText={card.altText}
              heading={card.heading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
