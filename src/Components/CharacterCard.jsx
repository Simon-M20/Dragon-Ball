import Goku from "../Assets/Characters/goku.png";

function CharacterCard() {
    return (
        <section className='flex flex-col justify-center cursor-pointer mx-3 CharacterCards'>
            <figure className='bg-orange-500'>
                <img src={Goku} alt='Characters' />
            </figure>
            <h4 className='text-xl pt-3 text-center text-gray-500 font-extrabold uppercase'>
                Vegeta
            </h4>
        </section>
    );
}

export default CharacterCard;
