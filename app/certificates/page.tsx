import Header from "@/components/header";
import Footer from "@/components/footer";
import { CertificateCard } from "@/components/certificate-card";
import { getCertificates } from "@/lib/certificates";

export const metadata = {
  title: "Certificates - Juan Jose Jimenez",
  description: "All my certificates",
};

export default function CertificatesPage() {
  const certificates = getCertificates();

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#30302e] font-sans dark:bg-[#30302e]">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-24">
        <div className="text-center text-white">
          <p className="font-bold text-3xl sm:text-4xl tracking-wide">
            All my Certificates
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Click on any certificate to verify it.
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-white">
            <p className="text-lg font-semibold">No certificates yet</p>
            <p className="max-w-sm text-sm text-gray-400">
              I haven&apos;t added any certificates yet. Please check back later for
            </p>
          </div>
        ) : (
          <section
            className="mt-8 flex flex-col space-y-6 text-white"
              
          >
            <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-3">
              {certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.title}
                  title={certificate.title}
                  imageUrl={certificate.imageUrl}
                  certificateUrl={certificate.certificateUrl}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
