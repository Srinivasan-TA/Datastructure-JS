class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}
class Stack{
    constructor(head){
        this.head=null;
        }
    insertlast(values)
    {
        let node=new Node(values)
        if(!this.head){
            this.head=node;
        }
        else{
        var current;
        current=this.head;
        while(current.next !=null){
            current=current.next;
        }
        current.next=node;
    }
    }
    removeLast(){
        let temp=this.head;
        let pre;
        while(temp.next){
           pre=temp;
           temp=temp.next;
        }
        pre.next=null;
     }
     peek(){
        let temp=this.head;
        while(temp.next){
            temp=temp.next;
         }
        console.log("--->"+temp.data);
     }
    printdisplay(){
        let cur=this.head;
        while(cur){
            console.log(cur.data);
            cur=cur.next;
        }
        
    }
}

let l=new Stack();
l.insertlast("Nitin")
l.insertlast("Bargavi")
l.insertlast("MAARI")
l.insertlast("SRINI")
l.removeLast();
l.peek();
l.printdisplay()
