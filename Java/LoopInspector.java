/*You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.

For example in the following picture the tail's size is 3 and the loop size is 12:


// Use the `getNext()` method to get the following node.
node.getNext()
Note: do NOT mutate the nodes!*/

public class LoopInspector {

  public int loopSize(Node node) {
    int count =0;
    Node fastRun = node;
    
    boolean flag = true;
    
    while(flag){
      node = node.getNext();
      fastRun = fastRun.getNext().getNext();
      if(node == fastRun){
        flag = false;
      }
    }
    count++;
    node = node.getNext();
    while(node!= fastRun){
      count++;
      node = node.getNext();
    }
    return count;
  }
  
  

}