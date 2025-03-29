class OCircularQueue{
    constructor(capacity){
        this.queueSize = capacity
        this.items = {}
        this.rear = 0
        this.front = 0
        this.count = 0
    }

    // add the element to the queue
    enqueue(element){
        if (this.queueSize !== this.count) {
            this.items[this.rear] = element
            console.log(`${element} is added in ${this.rear}`);
            this.rear++
            this.count++
        }else{
            console.log(`can't add ${element} cause queue is full`);
        }
    }

    // remove the oldest element from the queue
    dequeue(){
        let removedElement = this.items[this.front]
        delete this.items[this.front]
        this.front++
        this.count--
        console.log(`Removed element: ${removedElement}`);
    }

    // get the value of the element at the front of the queue without removing it
    peek(){
        console.log(this.items[`${this.front}`]);
    }

    //print queue
    print(){
        console.log(this.items);
    }

    // size of queue
    size(){
        console.log(this.rear - this.front);
    }

    // check the queue is Empty or not
    isEmpty(){
        console.log(this.rear - this.front == 0);
    }

    isFull(){
        console.log(this.queueSize == this.count);
    }
}


const queue = new OCircularQueue(5)
queue.enqueue(1)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(9)
queue.print()
//FIFO
queue.dequeue()
queue.enqueue(15)
queue.print()
queue.peek()
queue.isFull()
queue.enqueue(20)
queue.enqueue(70)
queue.print()
queue.isFull()
