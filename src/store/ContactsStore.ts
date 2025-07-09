import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
    loading: false,
    contacts: [] as ContactDto[],
    error: "",
    *getContacts(): Generator<Promise<any>, void, any> {
        try {
            this.loading = true;
            const response = yield fetch(
                "https://mocki.io/v1/a8772f55-89c4-4a24-8b89-976608ef2783"
            );
            const contacts = yield response.json();
            this.loading = false;
            this.contacts = contacts;
            this.error = "";
        } catch (e) {
            const error = e as Error;
            this.loading = false;
            this.error = error.message;
        }
    },
});
