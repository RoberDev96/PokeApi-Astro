import type { FavoritePokemons } from "@/interface/favoritePokemons"
import { createSignal, Show, type Component } from "solid-js"


interface Props {
    pokemon: FavoritePokemons
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const [isVisible, SetisVisible] = createSignal(true)

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

    const deleteFavorite = () => {

        const favorites = JSON.parse(
            localStorage.getItem('favorites') ?? '[]'
        ) as FavoritePokemons[];

        const newFavorites = favorites.filter((poke) => poke.id != pokemon.id)
        localStorage.setItem('favirites', JSON.stringify(newFavorites));
        SetisVisible(false);
    };

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img src={imageSrc} 
                    alt={pokemon.name} 
                    width='96' height='96' 
                    style={`view-transition-name:${pokemon.name}-image`}
                    />
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button onclick={deleteFavorite} class="text-red-400">Borrar</button>
            </div>
        </Show>
    );
}