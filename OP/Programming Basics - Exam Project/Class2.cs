using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamWork
{
    internal class Task2
    {
        public static void Fibonacci()
        {
            int limit = 4000000;
            int sum = 0;
            int a = 1;
            int b = 2;

            while (b <= limit)
            {
                if (b % 2 == 0)
                {
                    sum += b;
                }

                int c = a + b;
                a = b;
                b = c;
            }

            Console.WriteLine(sum);
        }
    }
}

