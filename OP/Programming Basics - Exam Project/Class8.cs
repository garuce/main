using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Programming_Basics___Exam_Project
{
    internal class Task8
    {
        static void Pythagorean()
        {
            for (int a = 1; a <= 1000; a++)
            {
                for (int b = a + 1; b <= 1000 - a; b++)
                {
                    int c = 1000 - a - b;
                    if (a * a + b * b == c * c)
                    {
                        Console.WriteLine("a = {0}, b = {1}, c = {2}", a, b, c);
                        Console.WriteLine("abc = {0}", a * b * c);
                        return;
                    }
                }
            }
        }
    }
}
