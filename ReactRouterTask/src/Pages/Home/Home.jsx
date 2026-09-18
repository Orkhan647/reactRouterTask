import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Rick and Morty
          <span className="text-red-500"> Characters</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Rick and Morty API istifadə edərək hazırlanmış character
          tətbiqinə xoş gəlmisiniz.
        </p>

        <Link
          to="/characters"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
        >
          Characters-a bax
        </Link>
      </div>
    </section>
  );
}

export default Home;