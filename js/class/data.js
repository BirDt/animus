const ANIMUS_DATA = "animusData";

class Data {
    constructor() {
        this.theme = "melanosis";
    }

    load() {
        const data = window.localStorage.getItem(ANIMUS_DATA);
        if(!data) return;
        const obj = JSON.parse(data);

        this.theme = obj.theme ?? "melanosis";
    }

    save() {
        const data = JSON.stringify(this);
        window.localStorage.setItem(ANIMUS_DATA, data);
    }
}

const themeData = new Data();
themeData.load();
themeData.save();