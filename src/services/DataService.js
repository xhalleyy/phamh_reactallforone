const sayHelloApi = async (name) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/SayHello/AddName/${name}`);
    const data = await promise.text();
    return data;
}

const summationApi = async (firstNum, secondNum) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/AddNumbers/Summation/${firstNum}/${secondNum}`);
    const data = await promise.text();
    return data;
}

const questionsApi = async (name, wakeUpTime) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/AskingQuestions/NameAndTime/${name}/${wakeUpTime}`);
    const data = promise.text();
    return data;
}

const greaterApi = async (firstNum, secondNum) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/GreaterOrLess/CompareNumbers/${firstNum}/${secondNum}`);
    const data = promise.text();
    return data;
}

const madLibApi = async(name1, creature, name2, ingVerb, item, pastVerb, place, adverb) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/MadLib/Story/${name1}/${creature}/${name2}/${ingVerb}/${item}/${pastVerb}/${place}/${adverb}`);
    const data = await promise.text();
    return data;
}

const oddOrEvenApi = async (num) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/OddOrEven/DivisibleBy2/${num}`);
    const data = promise.text();
    return data;
}

const alphaReverseApi = async (sequence) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/ReverseIt1/Alphanumeric/${sequence}`);
    const data = await promise.text();
    return data;
}

const numberReverseApi = async (sequence) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/ReverseIt2/Numeric/${sequence}`);
    const data = await promise.text();
    return data;
}

const magicApi = async () => {
    const promise = await fetch('https://phamhallforone.azurewebsites.net/Magic8Ball/TheAnswer');
    const data = await promise.text();
    return data;
}

const restaurantApi = async (input) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/RestaurantPicker/FoodCategory/${input}`);
    const data = await promise.text();
    return data;
}

export {sayHelloApi, summationApi, questionsApi, greaterApi, madLibApi, oddOrEvenApi, alphaReverseApi, numberReverseApi, magicApi, restaurantApi}