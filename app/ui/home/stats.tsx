import { fetchStatCards } from '@/app/lib/data';

export default async function Stats() {
  const stats = await fetchStatCards();
  return (
    <div className="stats__container">
      {stats.map((stat) => (
        <div key={stat.id} className="card">
          {stat.id === 2 ? (
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}
            >
              <h2>{stat.name}</h2>
              <p className="tag">Top 4%</p>
            </div>
          ) : (
            <h2>{stat.name}</h2>
          )}
          <h3>{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}
