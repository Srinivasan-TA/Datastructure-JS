class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}
class Queue{
    constructor(head){
        this.head=null;
        }
        InsertLast(data){
            let node=new Node(data);
            let current;
            if(this.head==null){
               this.head=node;
            }
            else{
               current=this.head;
               while(current.next !=null){
                  current=current.next;
               }
               current.next=node;
               this.size++;
            }
         }
         RemoveFirst(){
            let temp=this.head; 
             this.head=temp.next;
          }
          PrintDisplay(){
            let cur=this.head;
            while(cur){
                console.log(cur.data);
                cur=cur.next;
            }
            
        }
    
    }
    let ll=new Queue();
    ll.InsertLast("yashwanth");
    ll.InsertLast("Bargavi");
    ll.InsertLast("srini");
    ll.InsertLast("rohit");
    ll.InsertLast("ruchi");
    ll.RemoveFirst();
    ll.PrintDisplay()
