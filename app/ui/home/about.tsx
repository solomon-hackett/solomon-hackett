import Link from "next/link";

import { spaceGrotesk } from "@/app/lib/fonts";

import GitHubCard from "./github-card";

export default function About() {
  return (
    <div className="container section">
      <div className="hero">
        <div className="hero__content">
          <h1 className={spaceGrotesk.className}>About Me</h1>
          <p>
            I am a hardworking, aspiring, and dedicated individual with a broad
            skill set in IT and a passion for music. I participated in the{" "}
            <Link
              className="about-link"
              href="https://www.worldskillsuk.org/competitions/cyber-security/"
              target="_blank"
            >
              WorldSkills UK Cyber Security
            </Link>{" "}
            Competition, placing 5th out of 250 competitors, and won a silver
            medal in the WorldSkills UK Hackathon. I have built multiple CTF
            challenges from scratch and presented lessons on basic hacking
            methods to students on my course and the year below. I have also
            developed multiple websites and applications from scratch, including
            this portfolio, using a range of frameworks and technologies. My
            experience includes building fully functional and secure websites
            using handwritten PHP and HTML, as well as modern technologies such
            as Node.js with Express and Next.js. This includes developing the
            information and inventory pages for{" "}
            <Link
              className="about-link"
              href="https://uniqrecycling.co.uk"
              target="_blank"
            >
              Uniq Recycling
            </Link>
            . I am recognised for my leadership abilities and teamwork skills.
            In addition to my technical experience, I have successfully
            completed the Duke of Edinburgh's Award Bronze and Silver Awards.
          </p>
          <div className="flex-row" style={{ flexWrap: "wrap", gap: "8px" }}>
            <span className="badge-mono">WorldSkills UK — 5th / 250</span>
            <span className="badge-mono">Silver Medal Hackathon</span>
            <span className="badge-mono">DofE Bronze & Silver</span>
          </div>
        </div>

        <div
          className="flex-col"
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1916860"
            style={{
              border: "none",
              display: "block",
              width: 330,
              height: 100,
            }}
          />
          <GitHubCard />
        </div>
      </div>
    </div>
  );
}
