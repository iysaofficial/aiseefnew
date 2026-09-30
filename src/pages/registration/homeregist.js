import { useEffect, useState } from "react";
import Script from "next/script";
import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ambilIdentitas } from "@/lib/dashboardApi";
import { keadaanPendaftaran } from "@/lib/registrasi";

/**
 * Pintu masuk pendaftaran.
 *
 * ── Apa yang berubah dan kenapa ───────────────────────────────────────────
 *
 * Halaman ini memaku dua tombol "CLOSE" ber-`href=""` — menekannya tidak
 * membawa ke mana pun — dan judulnya menyebut "AISEEF 2026", satu edisi
 * tertinggal. Keadaan yang harus diubah tangan di dalam kode akan selalu
 * tertinggal, karena yang mengingatnya harus orang dan yang mengubahnya harus
 * programmer.
 *
 * Rentang tanggal pendaftaran SENGAJA tidak ditampilkan di halaman ini.
 * Keputusan panitia, disampaikan dua kali — saat GYIIF dan lagi saat AISEEF
 * 2027 — dan yang mengembalikannya akan mengulang hal yang sama. Judulnya
 * sudah menyatakan pendaftaran dibuka atau belum; tanggalnya ada di guidebook.
 *
 * Sekarang tahun dan keadaan buka-tutupnya datang dari togel di dasbor.
 *
 * ── Kenapa formulirnya DI SINI, bukan di dasbor ───────────────────────────
 *
 * Yang mengurus pendaftarannya tetap dasbor — peserta, tim, tagihan, dan surel
 * undangan semuanya lahir di sana. Yang dirender di halaman ini cuma
 * formulirnya, lewat berkas sisipan dari API dasbor, supaya pendaftar tidak
 * berpindah ke tampilan yang bukan milik ajang ini tepat pada langkah paling
 * menentukan.
 *
 * Wadahnya menyebut AKRONIM, bukan id edisi, jadi tidak perlu disunting saat
 * 2027 berganti 2028.
 */
function HomeRegist({ identitas, keadaanAwal }) {
  const [keadaan, setKeadaan] = useState(keadaanAwal);

  useEffect(() => {
    setKeadaan(keadaanPendaftaran(identitas));
  }, [identitas]);

  /*
   * Wadah formulirnya baru ada di DOM setelah keadaannya "buka". Kalau
   * skripnya sudah termuat lebih dulu — dan pada perpindahan halaman memang
   * begitu — ia sudah selesai memindai dan tidak akan memindai lagi sendiri.
   */
  useEffect(() => {
    if (keadaan === "buka" && typeof window !== "undefined") {
      window.IysaDaftar?.pasang();
    }
  }, [keadaan]);

  const tahun = identitas?.tahun ?? "";
  const judul = `${identitas?.akronim ?? "AISEEF"} ${tahun}`.trim();

  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <div className="divider"></div>
        <h1>Registration</h1>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                {keadaan === "buka"
                  ? `Registration for ${judul} is now open`
                  : keadaan === "belum"
                  ? `Registration for ${judul} opens soon`
                  : keadaan === "tutup"
                  ? `Registration for ${judul} has closed`
                  : `Registration for ${judul}`}
              </h3>

            </div>
          </div>

          <div className="link-web mx-auto text-center">
            {keadaan === "buka" ? (
              <div
                data-iysa-daftar="aiseef"
                style={{ maxWidth: "44rem", margin: "0 auto", textAlign: "left" }}
              />
            ) : (
              /*
               * Bukan tombol yang dimatikan, melainkan keterangan.
               *
               * Halaman ini sebelumnya memakai dua tombol "CLOSE" ber-`href=""`
               * yang tetap terlihat seperti tombol — dan tombol mati yang
               * terlihat hidup akan diklik berulang oleh orang yang mengira
               * halamannya rusak. Yang dibutuhkan kalimat, bukan kendali.
               */
              <p className="mx-auto text-center m-2">
                {keadaan === "belum"
                  ? "Registration has not opened yet. Please come back on the date above."
                  : keadaan === "tutup"
                  ? "Registration for this edition is closed."
                  : "Registration information is not available right now. Please try again shortly."}
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />

      <Script
        src="https://api-dashboard.iysa.or.id/embed/daftar.js"
        strategy="afterInteractive"
        onLoad={() => window.IysaDaftar?.pasang()}
      />
    </>
  );
}

export default HomeRegist;

/** Dibangun ulang tiap lima menit — sama dengan umur cache API-nya. */
export async function getStaticProps() {
  const identitas = await ambilIdentitas();
  return {
    props: { identitas, keadaanAwal: keadaanPendaftaran(identitas) },
    revalidate: 300,
  };
}
