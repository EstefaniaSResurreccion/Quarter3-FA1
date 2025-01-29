let text = "Do you agree to share your information with the site? ";
if (confirm(text)==true)
{
    console.log("Name: "+ nickname +  "\n Height: " + feet + "\'" +  inches + "\"" + "\n Weight: " + wLbs + "lbs" );
}
else 
{
    console.log("User does not wish to share his/her information.")
}
