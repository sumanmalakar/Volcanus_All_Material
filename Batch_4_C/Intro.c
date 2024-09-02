// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int pincode;
    float salary;
    char name;
    
    printf("Enter your area pincode \n");
    scanf("%d", &pincode);
    printf("Enter your salary \n");
    scanf("%f", &salary);
    printf("Enter the first character of your name \n");
    scanf(" %c",&name);
    
    
    
    printf("This is my area pincode .. %d \n",pincode);
    printf("This is superman daily salary .. %.2f",salary);
    printf("\nThis is my name %c", name);

    return 0;
}