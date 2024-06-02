import { Swiper, SwiperSlide } from "swiper/react";
import CharacterCard from "./CharacterCard";

// Import Swiper styles
import "swiper/css";

function CharacterSlider() {
    return (
        <Swiper
            spaceBetween={80}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
            <SwiperSlide>
                <CharacterCard />
            </SwiperSlide>
        </Swiper>
    );
}

export default CharacterSlider;
