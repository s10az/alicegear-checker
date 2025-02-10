import ActressBlock from "@/components/ActressBlock";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl sm:text-2xl font-bold text-center my-4 sm:my-6">
        アリス・ギア・アイギス <br className="md:hidden"></br>
        スカウト率チェッカー
      </h1>

      <ActressBlock />
    </main>
  );
}
