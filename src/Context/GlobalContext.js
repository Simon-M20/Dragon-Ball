import { createContext, useState } from "react";

const DBContext = createContext();

const DBProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [gallery, setGallery] = useState(false);
    //     const [allPokemons, setAllPokemons] = useState([]);
    //     const [singlePokemon, setSinglePokemon] = useState([]);
    //     const [pokemonAbout, setPokemonAbout] = useState([]);
    //     const [pokeLocation, setPokeLocation] = useState([]);
    //     const [pokeTypeDefense, setPokeTypeDefense] = useState([]);
    //     const [evolChain, setEvolChain] = useState([]);
    //     const [evolFrom, setEvolFrom] = useState([]);
    // const [page, setPage] = useState(0);
    // const [total, setTotal] = useState(0);

    const data = {
        loading,
        setLoading,
        error,
        setError,
        gallery,
        setGallery,
    };

    return <DBContext.Provider value={data}>{children}</DBContext.Provider>;
};

export { DBProvider };
export default DBContext;
