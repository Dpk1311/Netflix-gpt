import React, { useRef } from "react";
import openai from "../utils/OpenAI"


const GptSearchBar = () => {
  const movieText = useRef("");

  const GptSearchHandle = async () => {

    const query = "Act a movie recommendation system and suggest me some movies for the query :" + movieText.current.value + "only give me 5 movies names like the example give. example:The Dark Knight,12 Angry Men,Pulp Fiction,The Shawshank Redemption,The Godfather"
    const gptOutput = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptOutput.choices);
  };

  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center ">
      <form
        className="m-4 p-4 md:w-1/2 w-full bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={movieText}
          type="text"
          className="m-3 p-3 col-span-8"
          placeholder="Search your favourite movies here..."
        />
        <button
          className="bg-red-700 text-white rounded-lg p-2 m-2 col-span-4 "
          onClick={GptSearchHandle}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
