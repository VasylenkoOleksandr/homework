let number = prompt('Enter your range between 0-100');

if (number < 60) {
    alert('F');
}
else if (number >= 60 && number < 70)
    alert('D');

else if (number >=70 && number <80)
    alert('C')

else if (number >=80 && number <90)
    alert('B')
else if (number >=90 && number <=100)
    alert('A')
else {
    alert('incorrect range')
    
}