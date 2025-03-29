// my implementation
class Queue{
    constructor(){
        this.queue=[]
        this.count=0
    }

    // add the element to the queue
    enqueue(element){
        this.queue[this.count] = element
        console.log(`${element} is added in ${this.count}`);
        this.count++
    }

    // remove the oldest element from the queue
    dequeue(){
        let removedElement = this.queue[0]

        // // Shift all elements to the left by 1 (manual dequeue)
        // for (let i = 0; i < this.count - 1; i++) {
        //     this.queue[i] = this.queue[i + 1];
        // } // or u can use unshift()
 
        // this.queue.length--;
        // this.count--;
        this.queue.shift()
        console.log(`Removed element: ${removedElement}`);
    }

    // get the value of the element at the front of the queue without removing it
    peek(){
        console.log(this.queue[0]);
    }

    //print queue
    print(){
        console.log(this.queue);
    }

    // size of queue
    size(){
        console.log(this.queue.length);
    }

    // check the queue is Empty or not
    isEmpty(){
        console.log(this.queue.length == 0);
    }
}


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(9)
queue.print()
//FIFO
queue.dequeue()
queue.print()
queue.peek()