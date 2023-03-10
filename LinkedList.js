class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    let temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                }
            }
        
        addElement1(value, index){
                let node=new Node(value)
                let counter = 0;
                let temp = this.rootNode;
                let prev;
                let(counter<index){
                    prev=temp;
                    temp=temp.nextNode;
                    counter++;
                }
                node.nextNode=temp;
                prev.nextNode=node;
                this.count++;
        }

        removeElement1(index){
            let temp =this.rootNode;
            let prev;
            let counter =0;
            while(counter<index){
                prev=temp;
                temp=temp.nextNode;
                counter++;
            }
            prev.nextNode=temp.nextNode;
            this.count--;
        }
        
        printElements(){
            let temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                // console.log(temp.nextNode)
                temp = temp.nextNode;
            }
        }
    }
}


var list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(4);
list.printElements();
console.log("Elements after added in index value");
list.addElement1(5,2);
list.printElements();
console.log("After removed in index value");
list.removeElement1(1);
list.printElements();
