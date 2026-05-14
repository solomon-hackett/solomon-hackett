import Link from "next/link";

import { spaceGrotesk } from "@/app/lib/fonts";

export default function About() {
  return (
    <div>
      <h1 className={`${spaceGrotesk.className}`}>About Me</h1>
      <iframe
        src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1916860"
        style={{ border: "none", width: "100%" }}
      ></iframe>
      <p>
        I am a hardworking, aspiring, and dedicated individual with a broad
        skill set in IT and a passion for music. I participated in the{" "}
        <Link href="https://www.worldskillsuk.org/competitions/cyber-security/">
          WorldSkills UK Cyber Security
        </Link>{" "}
        Competition, placing 5th out of 250 competitors, and won a silver medal
        in the WorldSkills UK Hackathon. I have built multiple CTF challenges
        from scratch and presented lessons on basic hacking methods to students
        on my course and the year below. I have also developed multiple websites
        and applications from scratch, including this portfolio, using a range
        of frameworks and technologies. My experience includes building fully
        functional and secure websites using handwritten PHP and HTML, as well
        as modern technologies such as Node.js with Express and Next.js. This
        includes developing the information and inventory pages for
        <Link href="https://uniqrecycling.co.uk">Uniq Recycling</Link>. I am
        recognised for my leadership abilities and teamwork skills. In addition
        to my technical experience, I have successfully completed the Duke of
        Edinburgh's Award Bronze and Silver Awards.
      </p>
    </div>
  );
}
