import { makeAutoObservable } from "mobx";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsStore = makeAutoObservable({
    loading: false,
    groups: [] as GroupContactsDto[],
    error: "",
    *getGroups(): Generator<Promise<any>, void, any> {
        try {
            this.loading = true;
            const response = yield fetch(
                "https://mocki.io/v1/1e0f07cb-08c9-4030-9389-bbff810df252"
            );
            const groups = yield response.json();
            this.loading = false;
            this.groups = groups;
            this.error = "";
        } catch (e) {
            const error = e as Error;
            this.loading = false;
            this.error = error.message;
        }
    },
});
