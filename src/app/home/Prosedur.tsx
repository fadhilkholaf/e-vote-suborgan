import React from "react";
import Image from "next/image";
import ProsedurSect from "@/../public/images/prosedursection.png";
import SectionsGap from "../components/general/SectionsGap";
import { H2, Large_Text } from "../components/general/Text";
import ProsedurNumber from "./home-component/ProsedurNumber";


export default function Prosedur() {
  return (
    <>
      <main className="bg-red-light-6 w-full h-full py-24 flex" id="prosedur">
        <SectionsGap>
          <div className="flex mx-auto gap-[50px] flex-col 2xl:flex-row">
            <Image src={ProsedurSect} alt="ProsedurSection" />
            <div className="gap-7 flex-col flex text-center lg:text-start">
              <H2>Prosedur</H2>
              <Large_Text
                variant="REGULAR"
                className="text-secondary-text-color"
              >
                Pastikan hak suara kamu terhitung dengan mengikuti tata cara
                yang disediakan.
              </Large_Text>
              <div className="flex flex-col gap-4">
                <ProsedurNumber
                  variants="Outline"
                  index="01"
                  title="Login menggunakan Akun Google Sekolah"
                />
                <ProsedurNumber
                  variants="Block"
                  index="02"
                  title="Klik “Vote” pada Navbar"
                  body="Klik pada menu “Vote” untuk mulai melakukan proses Voting."
                />
                <ProsedurNumber
                  variants="Outline"
                  index="03"
                  title="Baca dan Pahami Visi & Misi Kandidat"
                />
                <ProsedurNumber
                  variants="Outline"
                  index="04"
                  title="Gunakan Hak Suara untuk Memilih Kandidat"
                />
                <ProsedurNumber
                  variants="Outline"
                  index="05"
                  title="Konfirmasi Pilihan"
                />
                <ProsedurNumber
                  variants="Outline"
                  index="06"
                  title="Selamat! Hak Suara Telah Sukses Digunakan"
                />
              </div>
            </div>
          </div>
        </SectionsGap>
      </main>
    </>
  );
}