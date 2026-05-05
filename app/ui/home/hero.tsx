import Image from 'next/image';

import { spaceGrotesk } from '@/app/lib/fonts';
import Stats from '@/app/ui/home/stats';

export default function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div className="hero__content">
          <h1 className={`${spaceGrotesk.className}`}>Solomon Hackett</h1>

          <h2 className="tag">
            Cybersecurity Student | Aspiring Red Teamer | WorldSkillsUK Finalist
          </h2>

          <h3>
            I build and solve CTF challenges, and study offensive + defensive
            security.
          </h3>
          <Stats />
        </div>

        <div className="hero__image">
          <Image
            src="/images/home-hero.jpg"
            alt="Hero image of Solomon Hackett"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
