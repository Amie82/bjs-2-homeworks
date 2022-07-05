
function parseCount(text) {
    let number = Number.parseInt(text);
    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    } else {
        return number;
    }
}

function validateCount(text) {
    try {
        return parseCount(text);
    } catch (error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

    }
        getPerimeter() {
            return (this.a + this.b + this.c);
        }
        getArea() {
            let p = this.getPerimeter() / 2;
            return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        getPerimeter() {
            return "Ошибка! Треугольник не существует";
        }
        getArea() {
            return "Ошибка! Треугольник не существует";
        }
    }
}

