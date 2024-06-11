import { createContext, useState } from "react";
import characters from "../Data/db.json";

const DBContext = createContext();

const DBProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [mainCharacter, setMainCharacter] = useState([]);

    const data = {
        loading,
        setLoading,
        error,
        setError,
        gallery,
        setGallery,
        characters,
        mainCharacter,
        setMainCharacter,
    };

    return <DBContext.Provider value={data}>{children}</DBContext.Provider>;
};

export { DBProvider };
export default DBContext;
