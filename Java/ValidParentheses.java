/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
he function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters.
 Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).
 */

  public class Solution{
  
    public static boolean validParentheses(String parens)
    {
        //Put code below
        int count = 0;
        for(int i =0; i< parens.length();i++){
        switch(parens.charAt(i)){
            case '(': count++; break;
            case ')': 
                if(count == 0){
                    return false;
                }
                count--;
            break;
        }
        }
        return count ==0;
    }
}