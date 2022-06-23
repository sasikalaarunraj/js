i=1
while(i<=100)
{	
count=0;
j=1
while(j<=100)
{
	if(i%j==0)
		count++
	j++
}
if(count<=2){
	console.log(i+ "prime number")
}
i++
}