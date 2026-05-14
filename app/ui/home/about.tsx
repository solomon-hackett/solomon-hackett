import { spaceGrotesk } from "@/app/lib/fonts";

export default function About() {
  return (
    <div>
      <h1 className={`${spaceGrotesk.className}`}>About Me</h1>
      <iframe
        src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1916860"
        style={{ border: "none", width: "100%" }}
      ></iframe>
    </div>
  );
}
