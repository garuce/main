using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamWork
{
    internal class Task5
    {
        public static void SmallestPrime()
        {
            int n = 20;
            long result = 1;

            for (int i = 2; i <= n; i++)
            {
                if (IsPrime(i))
                {
                    int power = (int)Math.Floor(Math.Log(n) / Math.Log(i));
                    result *= (long)Math.Pow(i, power);
                }
            }

            Console.WriteLine(result);
        }

        private static bool IsPrime(int number)
        {
            if (number <= 1)
            {
                return false;
            }
            for (int i = 2; i <= Math.Sqrt(number); i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
