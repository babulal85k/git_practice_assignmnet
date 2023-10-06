let num = 12;

let count = 0;
for (let i=0;i<num;i++)
{
    if (num%i==0)
    {
        count += 1;
    }
}

if (count==2)
{
    console.log("Yes");
}
else
{
    console.log("No");
}