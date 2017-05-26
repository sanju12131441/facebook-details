$(document).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAB68kMLBdsnIfzC5GCabtSpZCMXW2zkoXZC0DwRycsZBoNnXeAdYFuQ73RcTWSsRs9xQwHm1JpQtAGC6nyxZCQ6d7XmPNuWrgIVMjquzBuZBWnv4TRVeMUYSQUqU0Tq98dwpPHO8jUQlfo9cVw76f8yf7zOEXUYZBFGqQf1039SYoU69LYEWwbzdqHMXjrf7Jx8x684JZCXCvrGjJH5adAZD'
  function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?feilds=ID,name,email,gender,hometown,status,likes,dateofbirth,location,feed.include_hidden(true).limit(10)&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));

                      

                      $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                       $("#myName").text(response.name);
                        $("#myEmail").text(response.email);

                          $("#myGender").text(response.gender);


                       $("#myHometown").text(response.hometown.name);
                    $("#myStatus").text(response.relationship_status);
                   
                    $("#DOB").text(response.birthday);
                     
                    
          


                    }
                    

                
            } 



        ); 



    }

    $("#facebookBtn").on('click',getFacebookInfo)



  });





  

