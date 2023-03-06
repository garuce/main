using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamWork
{
    internal class Task3
    {
        public static void LargestPrimeFactor()
        {
            long number = 600851475143;
            long largestPrimeFactor = 0;

            for (long i = 2; i * i <= number; i++)
            {
                while (number % i == 0)
                {
                    largestPrimeFactor = i;
                    number /= i;
                }
            }

            if (number > 1)
            {
                largestPrimeFactor = number;
            }

            Console.WriteLine(largestPrimeFactor);
        }

    }
}
