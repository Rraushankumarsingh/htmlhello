function addsquare(a,b)
{
    let ab=square(a);
    let ad=square(b);
     
    function square(num)
    {  
        
       return num*num;
    }
    return ab+ad;
}

document.write(addsquare(3,4));