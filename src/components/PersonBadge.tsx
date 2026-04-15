interface Props {
  name: string;
  variant: "free" | "busy";
}

export default function PersonBadge({ name, variant }: Props) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
        variant === "free"
          ? "bg-emerald-100 text-emerald-800"
          : "bg-rose-100 text-rose-800"
      }`}
    >
      {name}
    </span>
  );
}
