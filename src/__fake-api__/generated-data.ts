import {writeFile} from 'fs'
import {navBarList, productsList} from './data.ts'

(() => {

    const db = {
        nav: navBarList,
        products: productsList,
    };
    //write db obj to db.json
    writeFile('./db.json', JSON.stringify(db), () => {
        console.log('Write successfully')
    });
})()

