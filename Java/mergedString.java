/*At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

public class StringMerger {

    public static boolean isMerge(String s, String part1, String part2) {
      
      System.out.println(s);
      System.out.println(part1);
      System.out.println(part2);
      
      if((part1.length()+ part2.length()) != s.length()) { 
        return false;
      }
    
       int pIndex1 =0, pIndex2 =0;
       int pMatchIndex1 = -1, pMatchIndex2 = -1;
       boolean bothmatch = false;
      for(int i =0; i < s.length();i++){
        char c = s.charAt(i);
        if( pIndex1 < part1.length() && pIndex2 < part2.length() &&  c == part1.charAt(pIndex1) && c == part2.charAt(pIndex2) && bothmatch == false){
            bothmatch = true;
            pMatchIndex1 = pIndex1;
            pMatchIndex2 = pIndex2;
        }
       
         if( bothmatch ){
              if( pIndex1 == part1.length() && pIndex2 == part2.length()){
              return false;
              }
            if( pIndex1 < part1.length() && c != part1.charAt(pIndex1)){
              pIndex1 = pMatchIndex1;
              bothmatch = false;
            }
            if( pIndex2 < part2.length() && c != part2.charAt(pIndex2)){
              pIndex2= pMatchIndex2;
              bothmatch = false;
            }
         }
        if(pIndex1 < part1.length() && c == part1.charAt(pIndex1)){
          pIndex1++;
        }
        if(pIndex2 < part2.length() && c == part2.charAt(pIndex2)){
          pIndex2++;
        } 
        
      }
        
        if((pIndex1+pIndex2) != s.length()){
          return false;
        }
       return true;
    }

}