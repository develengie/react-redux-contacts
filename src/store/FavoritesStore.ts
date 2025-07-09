import { makeAutoObservable } from "mobx";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoritesStore = makeAutoObservable({
    loading: false,
    favorites: [] as FavoriteContactsDto,
    error: "",
    *getFavorites(): Generator<Promise<any>, void, any> {
        try {
            this.loading = true;
            const response = yield fetch(
                "https://mocki.io/v1/a8772f55-89c4-4a24-8b89-976608ef2783"
            );
            const data = yield response.json();
            const favorites = [data[0].id, data[1].id, data[2].id, data[3].id];
            this.loading = false;
            this.favorites = favorites;
            this.error = "";
        } catch (e) {
            const error = e as Error;
            this.loading = false;
            this.error = error.message;
        }
    },
});
