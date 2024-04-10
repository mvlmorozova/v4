const showInfo = (content) => {
    const keys = ['brand', 'model', 'year', 'type', 'distance', 'transmis', 'fluel', 'price', 'color']
     //  Марка,Модель,Год,Кузов,Пробег,Коробка,Топливо,Цена,Цвет
    const lines = content
        .split('\n')
        .slice(1)
        .filter((line) => line !== '')
        .map((line) => line.split(','));
      //  .filter((line)) 
    const numId = [2, 4, 7];
    const data = lines
        .map((line) => line
            .reduce ((acc, value, i) => {
                if (numId.includes(i)) acc[keys[i]] = Number(value);
                else acc[keys[i]] = value;
                return acc;
            }, {})
    )
    console.log(`Количество автомобилей: ${data.length}`)
    // Выведите средний пробег всех автомобилей. Полученное значение обязательно округлить.
   const avgDist = data
        .reduce((acc, obj) => {
            const accNew = acc + obj['distance'];
            return accNew;
        }, 0) / data.length;
    console.log(`Средний пробег: ${avgDist}`);
  //  Выведите стоимость самой дорогой машины.
   const expensiveCar = Math.max(...data.map((item) => item.price));
   console.log(`Стоимость самой дорогой машины: ${expensiveCar}`);
  // Выведите марку и модель автомобиля с самым ранним годом выпуска.
  const oldestCar = [...data]
  .sort(({ year: yearCar1 }, { year: yearCar2}) => yearCar1 - yearCar2)
  .at(0);
  //console.log('Новые данные')
  //console.log(data); 

  console.log(`Самый старый автомобиль: ${oldestCar['brand']} ${oldestCar['model']}`);
/*
Выведите все встречающиеся цвета автомобилей и количество их нахождений в файле. Например, если цвет "Blue" встречается 3 раза, то 
вывод будет "Blue":3.
Обратите внимание, что вы получаете объект, в котором ключи - это названия цветов, а значение - количество нахождений. В консоль вы 
должны вывести строку, соответственно, полученный объект представьте в виде строки.
*/
 const colorsCount = data
        .reduce ((acc, { color }) => {
           acc[color] = (acc[color] ?? 0) + 1;
           return acc;
 }, {}); 
     /*  const colorsCount = data.reduce((acc, { color }) => {
            if (!Object.hasOwn(acc, color)) {
              acc[color] = 1;
            } else {
              acc[color] += 1;
            }
            return acc;
          }, {}); */
 // console.log(colorsCount);
  const colorsLine = Object.entries(colorsCount).map((pair) => pair.join(': ')).join(', ');
 // console.log(colorsLine);
  console.log(`Все цвета: ${colorsLine}`); 
  
  //console.log(data);

};

export default showInfo;