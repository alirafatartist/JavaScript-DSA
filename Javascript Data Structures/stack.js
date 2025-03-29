// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(element) {
//         this.items.push(element)
//     }

//     pop() {
//         if (this.items.length === 0) {
//             return 'Underflow - The stack is empty.'
//         }
//         return this.items.pop()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     print() {
//         console.log(this.items)
//     }
// }

// // Create a new stack
// const myStack = new Stack();

// // Push elements onto the stack
// myStack.push(5);
// myStack.push(10);
// myStack.push(15);

// // Display the stack's content
// console.log("Stack after push operations:");
// myStack.print();

// // Pop an element
// const poppedElement = myStack.pop();
// console.log("Popped element:", poppedElement);

// // Check if the stack is empty
// console.log("Is the stack empty?", myStack.isEmpty());

// // Display the stack's content after pop
// console.log("Stack after pop operation:");
// myStack.print();


// // another stack implementaion
// class Stack2 {
//     constructor() {
//         this.items = [];
//         this.count = 0;
//     }

//     push(element) {
//         this.items[this.count] = element;
//         console.log(`${element} added to ${this.count}`);
//         this.count += 1;
//         return this.count - 1;
//     }

//     pop() {
//         if (this.count === 0) return undefined;
//         let deleteItem = this.items[this.count - 1];
//         console.log(`${deleteItem} removed`);
//         this.count -= 1;
//         return deleteItem;
//     }

//     peek() {
//         console.log(`Top element is ${this.items[this.count - 1]}`);
//         return this.items[this.count - 1];
//     }

//     isEmpty() {
//         console.log(this.count == 0 ? 'Stack is empty' : 'Stack is not empty');
//         return this.count == 0;
//     }

//     size() {
//         console.log(`${this.count} elements in stack`);
//         return this.count;
//     }

//     print() {
//         let str = '';
//         for (let i = 0; i < this.count; i++) {
//             str += this.items[i] = ' ';
//         }
//         return str
//     }

//     clear() {
//         this.items = [];
//         thihs.count = 0;
//         return this.items
//     }
// }


// my implementation
class Stack{
    constructor(){
        this.items = []
        this.count =0;
    }

    // push to stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} pushed to ${this.count}`);
        this.count++
        
    }

    // remove form stack
    pop(){
        let removedElement = this.items[this.count - 1]
        this.items.length--
        this.count--
        console.log(`${removedElement} removed from ${this.count}`);
        return removedElement
    }

    // print stack size
    size(){
        console.log(this.items.length);
    }

    // print stack
    print(){
        console.log(this.items);
    }

    //  clear stack
    clear(){
        this.items.length = 0;
    }

    // check stack is empty or no
    isEmpty(){
     console.log(this.items.length == 0 ? true : false);   
    }
}



const stack = new Stack();
stack.push(2)
stack.push(4)
stack.push(5)
stack.push(6)
stack.print()
// LILO
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.print()
stack.size()
stack.isEmpty()