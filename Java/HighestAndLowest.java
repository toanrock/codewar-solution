/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5")  // return "5 1"
highAndLow("1 2 -3 4 5") // return "5 -3"
highAndLow("1 9 3 4 -5") // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/



public class Kata {
  public static String highAndLow(String numbers) {
    // Code here or
    
    String[] arrNumber = numbers.split(" ",0);
    int smallest = Integer.parseInt(arrNumber[0]);
    int biggest = smallest;
    for(int i=1;i<arrNumber.length;i++){
      int num = Integer.parseInt(arrNumber[i]);
      if(num < smallest) { smallest = num;}
      if(num > biggest) {biggest = num;}
    }
    return ""+biggest+" "+smallest;
  }
}