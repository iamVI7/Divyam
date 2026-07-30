export default function TitleDivider({
  align = "center",
  light = false,
}: {
  align?: "center" | "left";
  light?: boolean;
}) {
  const line = light ? "bg-gold/70" : "bg-gold/60";
  const diamond = light ? "border-gold bg-gold/40" : "border-gold bg-gold/30";

  return (
    <div
      className={`flex items-center gap-3 mt-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
      aria-hidden="true"
    >
      <span className={`h-px w-10 ${line}`} />
      <span className={`w-1.5 h-1.5 rotate-45 border ${diamond}`} />
      <span className={`h-px w-10 ${line}`} />
    </div>
  );
}