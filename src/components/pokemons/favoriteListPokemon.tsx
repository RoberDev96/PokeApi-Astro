import type { FavoritePokemons } from "@/interface/favoritePokemons";
import { For, createSignal } from 'solid-js'
import { FavoritePokemonCard } from "./FavoritePokemonCard";



const getLocalStorege = (): FavoritePokemons[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    );
    return favoritePokemons;
}

export const FavoritePokemon = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStorege());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 ">
            <For each={pokemons()}>
                {(pokemon) => (<FavoritePokemonCard pokemon={pokemon} />)}
            </For>

        </div>
    )
}