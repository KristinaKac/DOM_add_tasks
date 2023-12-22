import db from '/db.json';

export default class Table {
    constructor(table) {
        this.table = table;
        this.tbody = this.table.querySelector('tbody');
        this.getData();
        this.arrTr = Array.from(this.tbody.querySelectorAll('tr'));
        this.sortData();
    }

    getData() {

        db.forEach(object => {
            const tr = document.createElement('tr');

            for (const key in object) {
                const td = document.createElement('td');

                if (key === 'imdb') {
                    tr.dataset[key] = Number(object[key]).toFixed(2);
                    td.innerText = Number(object[key]).toFixed(2);
                } else {
                    tr.dataset[key] = object[key];
                    td.innerText = object[key];
                }
                tr.appendChild(td);
            }
            this.tbody.appendChild(tr);
        });
    }

    sortData() {
        let count = 0;

        setInterval(() => {

            switch (count) {
                case 0:
                    this.sortForNumbersIncrease('id');
                    break;
                case 1:
                    this.sortForNumbersDecrease('id');
                    break;
                case 2:
                    this.sortForTextIncrease('title');
                    break;
                case 3:
                    this.sortForTextDecrease('title');
                    break;
                case 4:
                    this.sortForNumbersIncrease('year');
                    break;
                case 5:
                    this.sortForNumbersDecrease('year');
                    break;
                case 6:
                    this.sortForNumbersIncrease('imdb');
                    break;
                case 7:
                    this.sortForNumbersDecrease('imdb');
                    break;
            }
            count++;

            if (count >= 8) count = 0;

        }, 2000);
    }


    sortForNumbersIncrease(field) {
        const arr = this.arrTr.sort((a, b) => (a.dataset[field]) - (b.dataset[field]));
        arr.forEach(el => { this.tbody.appendChild(el) });
    }
    sortForNumbersDecrease(field) {
        const arr = this.arrTr.sort((a, b) => (b.dataset[field]) - (a.dataset[field]));
        arr.forEach(el => { this.tbody.appendChild(el) });
    }
    sortForTextDecrease(field) {
        const arr = this.arrTr.sort((a, b) => a.dataset[field] < b.dataset[field] ? 1 : -1);
        arr.forEach(el => { this.tbody.appendChild(el) });
    }
    sortForTextIncrease(field) {
        const arr = this.arrTr.sort((a, b) => a.dataset[field] > b.dataset[field] ? 1 : -1);
        arr.forEach(el => { this.tbody.appendChild(el) });
    }


}