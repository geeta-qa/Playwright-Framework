import { test } from '../Fixture/filterr.js';
import fs from 'fs';

const filterData = JSON.parse(
    fs.readFileSync('./TestData/filterdata.json', 'utf-8')
);

for (const data of filterData) {

    test(`Filter Products - ${data.filter}`, async ({ LoginPage, FilterPage }) => {

        await LoginPage.login(data.username, data.password);

        await FilterPage.selectFilter(data.filter);

    });

}