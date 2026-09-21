import rawCertificates from "@/public/certificates.json";

export type Certificate = {
  title: string;
  imageUrl: string;
  certificateUrl: string;
};

export const allCertificates: Certificate[] =
  rawCertificates as Certificate[];

export function getCertificates(): Certificate[] {
  return allCertificates;
}
