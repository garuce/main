using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExamWork
{
    internal class Task4
    {
        public static void Palindrome()
        {
            int largestPalindrome = 0;

            for (int i = 100; i <= 999; i++)
            {
                for (int j = i; j <= 999; j++)
                {
                    int product = i * j;
                    if (IsPalindrome(product) && product > largestPalindrome)
                    {
                        largestPalindrome = product;
                    }
                }
            }

            Console.WriteLine(largestPalindrome);

        }
        private static bool IsPalindrome(int number)
        {
            string numberString = number.ToString();
            int left = 0;
            int right = numberString.Length - 1;

            while (left < right)
            {
                if (numberString[left] != numberString[right])
                {
                    return false;
                }
                left++;
                right--;
            }

            return true;
        }
    }
}   

