using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamWork
{
    internal class Task6
    {
        static void SumOfSquares()
        {
            int n = 100;
            int sum = 0, sumOfSquares = 0;
            for (int i = 1; i <= n; i++)
            {
                sum += i;
                sumOfSquares += i * i;
            }
            int squareOfSum = sum * sum;
            int difference = squareOfSum - sumOfSquares;
            Console.WriteLine(difference);
        }
    }
}
