"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  avatar_url: string;
};

const USERNAME = "solomon-hackett";

export default function GitHubCard() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}`),
        fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=6`,
        ),
      ]);
      const userData = await userRes.json();
      const repoData = await repoRes.json();
      setUser(userData);
      setRepos(repoData.filter((r: Repo) => !r.fork));
      setLoading(false);
    }
    fetchData();
  }, []);

  // count languages across repos
  const languages = repos.reduce<Record<string, number>>((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] ?? 0) + 1;
    return acc;
  }, {});

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return (
    <div className="card github-card">
      {/* Header */}
      <div className="flex-row github-card__header">
        <span className="badge-mono">github</span>
        <Link
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          className="about-link"
          style={{ fontSize: 13 }}
        >
          @{USERNAME}
        </Link>
      </div>

      {loading ? (
        <p style={{ fontSize: 13, marginTop: 12 }}>Loading…</p>
      ) : (
        <>
          {/* Stats row */}
          <div className="flex-row github-card__stats">
            <div className="flex-col github-card__stat">
              <span className="github-card__stat-value">
                {user?.public_repos}
              </span>
              <small>repos</small>
            </div>
            <div className="github-card__divider" />
            <div className="flex-col github-card__stat">
              <span className="github-card__stat-value">{totalStars}</span>
              <small>stars</small>
            </div>
            <div className="github-card__divider" />
            <div className="flex-col github-card__stat">
              <span className="github-card__stat-value">{user?.followers}</span>
              <small>followers</small>
            </div>
          </div>

          <div className="accent-rule" style={{ margin: "12px 0" }} />

          {/* Top languages */}
          <div className="flex-row" style={{ flexWrap: "wrap", gap: 6 }}>
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([lang]) => (
                <span key={lang} className="tag">
                  {lang}
                </span>
              ))}
          </div>

          <div className="accent-rule" style={{ margin: "12px 0" }} />

          {/* Recent repos */}
          <div className="flex-col" style={{ gap: 8 }}>
            {repos.slice(0, 4).map((repo) => (
              <Link
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                className="github-card__repo"
              >
                <span className="github-card__repo-name">{repo.name}</span>
                {repo.description && (
                  <small className="github-card__repo-desc">
                    {repo.description}
                  </small>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
