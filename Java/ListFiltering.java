/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
Kata.filterList(List.of(1, 2, "a", "b")) => List.of(1,2)
Kata.filterList(List.of(1, 2, "a", "b", 0, 15)) => List.of(1,2,0,15)
Kata.filterList(List.of(1, 2, "a", "b", "aasf", "1", "123", 231)) => List.of(1, 2, 231)

*/

import java.util.List;
import java.util.ArrayList;
import java.lang.Object;
public class Kata {
  
  public static List<Object> filterList(final List<Object> list) {
    // Return the List with the Strings filtered out
    List<Object> filteredList = new ArrayList<>();
    for(int i=0;i<list.size();i++){
      if(list.get(i) instanceof Integer){
        filteredList.add(list.get(i));
      }
    }
    return filteredList;
  }
}