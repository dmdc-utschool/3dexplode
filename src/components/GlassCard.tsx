interface GlassCardProps {
  image: string;
  title: string;
}

export default function GlassCard({ image, title }: GlassCardProps) {
  return (
    <div className="glass-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
