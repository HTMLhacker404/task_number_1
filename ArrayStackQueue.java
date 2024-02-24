public class ArrayStackQueue {
    private int[] arr;
    private int capacity;
    private int top;
    private int front;
    private int rear;
    private int size;

    public ArrayStackQueue(int capacity) {
        this.capacity = capacity;
        this.arr = new int[capacity];
        this.top = -1; // для стека
        this.front = 0; // для очереди
        this.rear = -1; // для очереди
        this.size = 0;
    }

    // Операции стека
    public void push(int item) {
        if (top < capacity - 1) {
            arr[++top] = item;
            size++;
        } else {
            System.out.println("Стек переполнен!");
        }
    }

    public int pop() {
        if (top >= 0) {
            size--;
            return arr[top--];
        } else {
            System.out.println("Стек пуст!");
            return -1;
        }
    }

    // Операции очереди
    public void enqueue(int item) {
        if (size < capacity) {
            arr[++rear] = item;
            size++;
        } else {
            System.out.println("Очередь переполнена!");
        }
    }

    public int dequeue() {
        if (size > 0) {
            int item = arr[front++];
            size--;
            return item;
        } else {
            System.out.println("Очередь пуста!");
            return -1;
        }
    }

    public static void main(String[] args) {
        ArrayStackQueue stackQueue = new ArrayStackQueue(5);
        stackQueue.push(1);
        stackQueue.push(2);
        stackQueue.push(3);
        System.out.println("pop: " + stackQueue.pop());
        System.out.println("pop: " + stackQueue.pop());

        stackQueue.enqueue(4);
        stackQueue.enqueue(5);
        System.out.println("dequeue: " + stackQueue.dequeue());
        System.out.println("dequeue: " + stackQueue.dequeue());
    }
}
