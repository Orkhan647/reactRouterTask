import { Link, useParams } from "react-router-dom";

import { useGetCharacterByIdQuery } from "../../services/rickAndMortyApi";

function CharacterDetail() {
  const { id } = useParams();

  const {
    data: character,
    isLoading,
    isError,
  } = useGetCharacterByIdQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-white font-semibold">
          Loading character...
        </h2>
      </div>
    );
  }

  if (isError || !character) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl text-red-500 font-semibold">
          Character tapılmadı.
        </h2>

        <Link
          to="/characters"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Characters səhifəsinə qayıt
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <Link
        to="/characters"
        className="inline-block mb-8 text-red-400 hover:text-red-300 transition duration-300"
      >
        ← Characters-a qayıt
      </Link>

      <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full min-h-[400px] object-cover"
        />

        <div className="p-8 text-white">
          <h1 className="text-4xl font-bold mb-8">
            {character.name}
          </h1>

          <div className="space-y-4 text-lg">
            <p>
              <span className="text-red-400 font-semibold">
                Status:
              </span>{" "}
              {character.status}
            </p>

            <p>
              <span className="text-red-400 font-semibold">
                Species:
              </span>{" "}
              {character.species}
            </p>

            <p>
              <span className="text-red-400 font-semibold">
                Gender:
              </span>{" "}
              {character.gender}
            </p>

            <p>
              <span className="text-red-400 font-semibold">
                Origin:
              </span>{" "}
              {character.origin.name}
            </p>

            <p>
              <span className="text-red-400 font-semibold">
                Location:
              </span>{" "}
              {character.location.name}
            </p>

            <p>
              <span className="text-red-400 font-semibold">
                Episodes:
              </span>{" "}
              {character.episode.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;