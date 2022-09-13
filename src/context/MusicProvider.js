import { createContext, useState } from "react";

const MusicContext = createContext({});

export const MusicProvider = ({ children }) => {
    const [playMusic, setPlayMusic] = useState(true);
    const [name, setName] = useState("");
    return (
        <MusicContext.Provider
            value={{
                playMusic,
                setPlayMusic,
                name,
                setName,
            }}
        >
            {children}
        </MusicContext.Provider>
    );
};

export default MusicContext;
