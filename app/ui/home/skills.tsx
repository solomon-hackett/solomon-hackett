import { spaceGrotesk } from "@/app/lib/fonts";

const secSkills = [
  "Web exploitation",
  "Linux privilege escalation",
  "Enumeration",
  "Vulnerability analysis",
  "Threat management",
  "Incident response",
];
const devSkills = [
  "CTF challenge development",
  "Python",
  "C#",
  "C++",
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "Node.js",
  "Express",
  "React",
  "Next.js",
];
const infSkills = [
  "Linux administration",
  "Windows administration",
  "Proxmox",
  "Docker",
  "Cisco ASA firewall configuration",
  "Cisco switch and router configuration",
  "PXE deployment",
  "Active Directory",
];

const categories = [
  { label: "Security", skills: secSkills },
  { label: "Development", skills: devSkills },
  { label: "Infrastructure", skills: infSkills },
];

export default function Skills() {
  return (
    <div className="container section">
      <h1 className={spaceGrotesk.className}>My Skills</h1>
      <div className="accent-rule" style={{ margin: "16px 0 32px" }} />
      <div className="skills__grid">
        {categories.map(({ label, skills }) => (
          <div key={label} className="flex-col card skills__card">
            <h2 className="skills__heading">{label}</h2>
            <div className="flex-row" style={{ flexWrap: "wrap", gap: 8 }}>
              {skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
