class CircularQueue{
    constructor(capacity){
        this.queueSize = capacity
        this.items=[]
        this.count=0
    }

    
    // add the element to the queue
    enqueue(element){
        if (this.queueSize !== this.items.length) {
            this.items.push(element)
            this.count++
            console.log(`${element} is added in ${this.count - 1}`);
        }else{
            console.log(`can't add ${element} cause queue is full`);

        }
    }

    // remove the oldest element from the queue
    dequeue(){
        let removedElement = this.items[0]
        this.items.shift()
        this.count--
        console.log(`Removed element: ${removedElement}`);
    }

    // get the value of the element at the front of the queue without removing it
    peek(){
        console.log(this.items[0]);
    }

    //print queue
    print(){
        console.log(this.items);
    }

    // size of queue
    size(){
        console.log(this.items.length);
    }

    // check the queue is Empty or not
    isEmpty(){
        console.log(this.items.length == 0);
    }

    isFull(){
        console.log(this.queueSize == this.items.length);
    }
}


const queue = new CircularQueue(5)
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
