
//Task#1
let hwGrade = 100; 

if (hwGrade >= 90 && hwGrade <= 100) {
    console.log("Результат: " + hwGrade + " Відмінно");
} else if (hwGrade >= 70 && hwGrade <= 89) {
    console.log("Результат: " + hwGrade + " Добре");
} else if (hwGrade >= 50 && hwGrade <= 69) {
    console.log("Результат: " + hwGrade + " Задовільно");
} else if (hwGrade >= 0 && hwGrade < 50) {
    console.log("Результат: " + hwGrade + " Незадовільно");
} else {
    console.log("Ваша оцінка чи дуже класна чи в ментора шок, думайте самі");
}

//Task#2
let procedure = "поділити" // "додати", "відняти", "помножити", "поділити"
let a = 10.66;
let b = 7;
let result;

switch (procedure) {
    case "додати":
        result = a + b
        console.log("Результат додавання: "  + result);
        break;
    case "відняти":
        result = a - b
        console.log("Результат віднімання: " + result);
        break;
    case "помножити":
        result = a * b
        console.log("Результат множення: " + result);
        break;
    case "поділити":
        result = a / b
        console.log("Результат ділення: " + result);
        break;
}


//Task#3
let value = 10;
let result1  = value % 2 === 0 ? "парне" : "не парне";
console.log("Результат: " + result1)



