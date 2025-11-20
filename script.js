// 1
console.log('こんにちは');

// 2
let greeting = [
    'おはよう',
    'こんにちは',
    'こんばんは'
];
let pics = [
    'https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg',
    'https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg',
    'https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg'
];
console.log(greeting[2]);

// 3
greeting.forEach((i) => {
    console.log(i);
});

// 4
let time = 15;
let hiru = 8;
let yoru = 16;
function hi (jikan) {
    let msg, pic;
    if      (jikan >= yoru) {
        msg = `今は${jikan}時だよ！${greeting[2]}！`;
        pic = pics[2];
    } else if (jikan >= hiru) {
        msg = `今は${jikan}時だよ！${greeting[1]}！`;
        pic = pics[1];
    } else {
        msg = `今は${jikan}時だよ！${greeting[0]}！`;
        pic = pics[0];
    }
    console.log(msg);
    return {text: msg, img: pic};
};
hi(time);
hi(18);

// 5
let dt = new Date();
let hr = dt.getHours();
let hiObj = hi(hr);

// 6
let div = document.createElement('div');
let p = document.createElement('p');
let img = document.createElement('img');

div.style = 'text-align: center;'
p.textContent = hiObj.text;
img.src = hiObj.img;

div.appendChild(p);
div.appendChild(img);

document.body.appendChild(div);