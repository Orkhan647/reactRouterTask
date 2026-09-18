import CharacterList from "../../components/CharacterList/CharacterList";
import { useGetCharactersQuery } from "../../services/rickAndMortyApi";

function Characters() {
  const { data, isLoading, isError } = useGetCharactersQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-white font-semibold">
          Loading characters...
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-red-500 font-semibold">
          Məlumatları əldə etmək mümkün olmadı.
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          Characters
        </h1>

        <p className="text-gray-400">
          Rick and Morty universe-dən bütün character-lər.
        </p>
      </div>

      <CharacterList characters={data?.results} />
    </section>
  );
}

export default Characters;