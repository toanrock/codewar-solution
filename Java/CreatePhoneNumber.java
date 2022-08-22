/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/


public class Kata {
  public static String createPhoneNumber(int[] numbers) {
    // Your code here!
    String phoneNo ="(";
    for(int i=0;i<numbers.length;i++){
      phoneNo+=numbers[i];
      if(i==2){
        phoneNo+=") ";
      }
      if(i==5){
        phoneNo+="-";
      }
    }
    return phoneNo;
  }
}