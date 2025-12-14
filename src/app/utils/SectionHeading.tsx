export const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="section-heading">
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);
