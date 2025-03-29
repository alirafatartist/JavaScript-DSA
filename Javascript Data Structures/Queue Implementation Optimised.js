// both enqueue & dequeue have constant time complexity

class OQueue{
    constructor(){
        this.items={}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        console.log(`${element} is added in ${this.rear}`);
        this.rear++
    }

    dequeue(){
        let removedElement = this.items[this.front]
        delete this.items[this.front]
        this.front++
        console.log(`Removed element: ${removedElement}`);
    }

    print(){
        console.log(this.items);
    }

    size(){
        console.log(this.rear - this.front);
    }

    isEmpty(){
        console.log(this.rear - this.front == 0);
    }

    peek(){
        console.log(this.items[`${this.front}`]);
    }
}

const queue = new OQueue()
queue.isEmpty()
queue.enqueue(1)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(9)
queue.print()
// //FIFO
queue.dequeue()
queue.dequeue()
queue.print()
queue.size()
queue.peek()