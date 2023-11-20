/* eslint-disable */

const dictionary = [
    { time: new Date(Date.UTC(2019, 9, 31, 2, 55, 0)), price: 549 },
    { time: new Date(Date.UTC(2019, 11, 1, 7, 0, 0)), price: 599},
    { time: new Date(Date.UTC(2019, 12, 1, 7, 0, 0)), price: 599},
    // diff 1mouth and 8hour
    { time: new Date(Date.UTC(2020, 11, 1, 7, 0, 0)), price: 599},
    { time: new Date(Date.UTC(2020, 12, 1, 7, 0, 0)), price: 599},
    // { time: new Date(Date.UTC(2020, 11, 3, 7, 0, 0)), price: 599},
    // { time: new Date(Date.UTC(2020, 12, 1, 15, 0, 0)), price: 599},
    // { time: Date.UTC(2017, 1, 22, 16, 0, 0), price: 549 },
    // // { time: Date.UTC(2017, 10, 7, 7, 11, 0), price: 599},
    // { time: Date.UTC(2017, 10, 22, 16, 0, 0), price: 599},
    // { time: Date.UTC(2017, 11, 6, 16, 0, 0), price: 649},
    // { time: Date.UTC(2017, 11, 20, 16, 0, 0), price: 699},
    // { time: Date.UTC(2018, 0, 3, 16, 0, 0), price: 749},
    // { time: Date.UTC(2018, 0, 17, 16, 0, 0), price: 799},
    // { time: Date.UTC(2018, 0, 30, 16, 0, 0), price: 799},
]

const dictionaryBanner = [
    { time: new Date(Date.UTC(2019, 9, 31, 2, 55, 0)), price: 549 },
    { time: new Date(Date.UTC(2019, 11, 1, 7, 0, 0)), price: 599},
    { time: new Date(Date.UTC(2019, 12, 1, 7, 0, 0)), price: 599},
    // diff 1mouth and 8hour
    // { time: new Date(Date.UTC(2020, 11, 1, 7, 0, 0)), price: 599},
    { time: new Date(Date.UTC(2020, 12, 1, 7, 0, 0)), price: 599},
    { time: new Date(Date.UTC(2021, 5, 1, 7, 0, 0)), price: 200},
    { time: new Date(Date.UTC(2021, 7, 2, 7, 0, 0)), price: 0 },
    { time: new Date(Date.UTC(2021, 8, 27, 7, 0, 0)), price: 199}
]

export const getPrice = function() {
    // set time inside
    // let t = Date.UTC(2017, 11, 23, 4, 30, 0);
    let t = new Date().getTime();

    let entry = {}
    for (let i = 0; i < dictionary.length - 1; i++) { 
        if (t > dictionary[i].time) {
            entry.price = dictionary[i].price;
            entry.countDownDate = dictionary[i + 1].time;
            entry.time = dictionary[i].time;
        } else {
            break;
        }
    }
    return entry;
}

export const getPriceBanner = function() {
    // set time inside
    // let t = Date.UTC(2017, 11, 23, 4, 30, 0);
    let t = new Date().getTime();

    let entry = {}
    for (let i = 0; i < dictionaryBanner.length - 1; i++) {
        if (t > dictionaryBanner[i].time) {
            entry.price = dictionaryBanner[i].price;
            entry.countDownDate = dictionaryBanner[i + 1].time;
            entry.time = dictionaryBanner[i].time;
        } else {
            break;
        }
    }
    console.log('entry', entry);
    return entry;
}

// export default getPrice;
// module.exports = getPrice;
