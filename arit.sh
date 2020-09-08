#!/usr/bin/bash/

echo Hola Mundo

echo Escribe algo
read -p "escribe el primer numero   " num1 
read -p "y ahora el segundo numero   " num2 
# echo "$( ( $num1 + $num2 ) )"

# echo $num1 $num2
echo $(($num1*$num2))

echo $RANDOM