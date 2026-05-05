import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section">
      <div className="container hero">
        <div className="hero__content">
          <h1>Solomon Hackett</h1>

          <h2 className="tag">
            Cybersecurity Student | Aspiring Red Teamer | WorldSkills Finalist
          </h2>

          <h3>
            I build and solve CTF challenges, and study offensive + defensive
            security.
          </h3>
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
