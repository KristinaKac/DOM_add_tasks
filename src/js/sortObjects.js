import db from '/db.json';

export default class Table {
    constructor(table) {
        this.table = table;
        this.tbody = this.table.querySelector('tbody');

        this.getData();
        this.sortData();
    }

    getData() {

        db.forEach(object => {
            const tr = document.createElement('tr');

            for (const key in object) {

                tr.dataset[key] = object[key];

                const td = document.createElement('td');
                td.innerText = object[key]
                tr.appendChild(td);
            }

            this.tbody.appendChild(tr);
        });
    }

    sortData() {

        const arrTr = Array.from(this.tbody.querySelectorAll('tr'));
        const arr = [];
        let count = 0;



        // сортировка по ID по возрастанию
        const arr1 = arrTr.sort((a, b) => (a.dataset.id) - (b.dataset.id));

        // сортировка по ID по убыванию
        const arr2 = arrTr.sort((a, b) => (b.dataset.id) - (a.dataset.id));

        // сортировка по title по возрастанию
        const arr3 = arrTr.sort((a, b) => a.dataset.title > b.dataset.title ? 1 : -1);

        // сортировка по title по убыванию
        const arr4 = arrTr.sort((a, b) => a.dataset.title < b.dataset.title ? 1 : -1);

        // сортировка по year по возрастанию
        // const arr = arrTr.sort((a, b) => (a.dataset.year) - (b.dataset.year));

        // сортировка по year по убыванию
        // const arr = arrTr.sort((a, b) => (b.dataset.year) - (a.dataset.year));

        // сортировка по imdb по убыванию
        // const arr = arrTr.sort((a, b) => a.dataset.imdb > b.dataset.imdb ? 1 : -1);

        // сортировка по imdb по убыванию
        // const arr = arrTr.sort((a, b) => b.dataset.imdb > a.dataset.imdb ? 1 : -1);

        // const arr = arrTr.sort((a, b) => (Number(a.dataset.imdb)) - (Number(b.dataset.imdb)));

        // const arr = arrTr.sort((a, b) => (Number(b.dataset.imdb)) - (Number(a.dataset.imdb)));

        const array = ['id', 'title', 'year', 'imdb'];

        if(field === 'title'){


        }

        this.sortForNumbersIncrease()

        // this.sortForNumbers(arrTr, 'id');
        // this.sortForNumbers(arrTr, 'title');
        this.sortForNumbers(arrTr, 'year');
        // this.sortForNumbers(arrTr, 'imdb');



        setInterval(() => {
            
        }, 3000);
    }

    sortForNumbersIncrease(field) {
        const arrTr = Array.from(this.tbody.querySelectorAll('tr'));

        const arr1 = arrTr.sort((a, b) => (a.dataset[field]) - (b.dataset[field]));

        arr1.forEach(el => {
            this.tbody.appendChild(el);
        });
    }
    sortForNumbersDecrease(arr, field) {
        const arrTr = Array.from(this.tbody.querySelectorAll('tr'));

        const arr1 = arrTr.sort((a, b) => (b.dataset[field]) - (a.dataset[field]));

        arr1.forEach(el => {
            this.tbody.appendChild(el);
        });
    }
    sortForTextDecrease(arr, field) {
        const arrTr = Array.from(this.tbody.querySelectorAll('tr'));

        const arr1 = arrTr.sort((a, b) => (b.dataset[field]) - (a.dataset[field]));

        arr1.forEach(el => {
            this.tbody.appendChild(el);
        });
    }


}