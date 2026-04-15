interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
    )}
    <div className="w-16 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
  </div>
);

export default SectionHeading;
