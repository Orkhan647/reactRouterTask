import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-5 text-white">
          <h2 className="text-xl font-bold mb-4">
            {character.name}
          </h2>

          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-red-400">
              Status:
            </span>{" "}
            {character.status}
          </p>

          <p className="text-gray-300">
            <span className="font-semibold text-red-400">
              Species:
            </span>{" "}
            {character.species}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;