import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        int number = sc.nextInt() - 1;

        System.out.println(str.charAt(number));
    }
}