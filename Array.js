class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return item;
    }

    pop() {
        const lastItem = this.data[this.length];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {

        for (let i = index; i < this.length - 1; i++) {
            this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];
        // If length is equal to 1 dont minus it
        if (this.length) {
            this.length--;
        }
    }
}


// Testing
let myArray = new Array;

// push
myArray.push('first');
myArray.push('second');

// get
console.log(myArray.get(1));

// pop
myArray.pop();

// delete
myArray.delete(1);


console.log(myArray);