import CharacterCard from "../CharacterCard/CharacterCard";

function CharacterList({ characters }) {
  if (!characters || characters.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg">
        Character tapılmadı.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}

export default CharacterList;