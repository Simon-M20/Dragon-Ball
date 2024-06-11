// import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import CharacterCard from "./CharacterCard";
import DBContext from "../Context/GlobalContext";
// import { useEffect } from "react";
// import { fetchData } from "../Utils/FetchApi";
// Import Swiper styles
// import "swiper/css";

function CharacterSlider() {
    const { gallery, characters } = useContext(DBContext);

    // const [items, setItems] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchItems = async () => {
    //         try {
    //             const data = await fetchData("/public/Data/characters.json");
    //             console.log(data);

    //             setItems(data.items);
    //         } catch (error) {
    //             setError(error.message);
    //         }
    //     };

    //     fetchItems();
    // }, []);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    // console.log(items);

    return (
        <section className={`CharacterSlider ${gallery ? "gallery" : ""}`}>
            {characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    name={character.name}
                    id={character.id}
                    desc={character.desc}
                    raze={character.raze}
                    universe={character.universe}
                />
            ))}
        </section>
        // <Swiper
        //     spaceBetween={80}
        //     slidesPerView={3}
        //     onSlideChange={() => console.log("slide change")}
        //     onSwiper={(swiper) => console.log(swiper)}>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <CharacterCard />
        //     </SwiperSlide>
        // </Swiper>
    );
}

export default CharacterSlider;
