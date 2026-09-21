interface CertificateCardProps {
  title: string;
  imageUrl: string;
  certificateUrl: string;
  altText?: string;
}

export function CertificateCard({
  title,
  imageUrl,
  certificateUrl,
  altText = "Certificate preview",
}: CertificateCardProps) {
  return (
    <a
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — ver certificado`}
      title={title}
      className="group/card relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/40"
    >
      <div className="relative aspect-square w-full flex-none overflow-hidden">
        <img
          src={imageUrl}
          alt={altText}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
      </div>

      <div className="flex flex-col p-3">
        <h3 className="truncate text-sm font-semibold text-white">{title}</h3>
      </div>
    </a>
  );
}
