using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Programming_Basics___Exam_Project
{
    internal class Task7
    {
        static bool IsPrime(int n)
        {
            if (n < 2)
            {
                return false;
            }
            for (int i = 2; i * i <= n; i++)
            {
                if (n % i == 0)
                {
                    return false;
                }
            }
            return true;
        }

        static void PrimeNumber10K()
        {
            int count = 0;
            int i = 2;
            while (count < 10001)
            {
                if (IsPrime(i))
                {
                    count++;
                }
                i++;
            }
            Console.WriteLine(i-1);
        }
    }
}
