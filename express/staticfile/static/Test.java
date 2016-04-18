import java.io.*;
import java.util.*;
public class Test
{
	public static void main(String args[])
	{
		String line,comment;
		Scanner scan = new Scanner(System.in);
		while(scan.hasNextLine())
		{
			line = scan.nextLine();
			comment = line.substring(line.indexOf("//"),line.length());
			line = line.replaceAll(comment,"");
			line = line.replaceAll("->",".");
			System.out.println(line+comment);
		}
	}
}