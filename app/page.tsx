import ActressBlock from "@/components/ActressBlock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl sm:text-2xl font-bold text-center mt-12">
        アリス・ギア・アイギス <br className="md:hidden"></br>
        スカウト率チェッカー
      </h1>

      <ActressBlock />

      <Footer />
    </main>
  );
}
