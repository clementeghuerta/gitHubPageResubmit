<script language="JavaScript">
var myDate = new Date();
/* hour is before noon */

if ( myDate.getHours() < 12 )
{
    document.getElementById('greeting').innerHTML = "I hope you have a great morning!";
    var img = document.getElementById('img1');
    img.style.visibility = 'visible';
        }
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{
    document.getElementById('greeting').innerHTML = "I hope youhave a great afternoon!";
    var img = document.getElementById('img2');
    img.style.visibility = 'visible';
}
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
{
   document.getElementById('greeting').innerHTML = "I hope youhave a great a Evening!";
    var img = document.getElementById('img3');
    img.style.visibility = 'visible';
}
else  /* the hour is not between 0 and 24, so something is wrong */
{
    document.getElementById('greeting').innerHTML = "I'm not sure what time it is!";
}
/* remove the following in your live script. It is for testing */
document.write(" The hour is: ")
document.write( myDate.getHours() );
</script>
