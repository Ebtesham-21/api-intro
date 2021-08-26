// Json


const user = { id: 11, name: 'gorib amir', job: 'actor' };
const stringified = JSON.stringify(user);
console.log(user)
console.log(stringified);

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    products: ['laptop', 'mobile', 'pepsi'],
    owner {
        name: 'alia';
        profession: 'navel dancer';

    }
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
console.log(shopStringified);
// console.log(shop);