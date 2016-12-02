
window.onload = function(){


var rooms = [

   {

       roomId: 1,
       roomNo: '1212',

       roomType: 'meeting',

       availability: true


   },

   {

       roomNo: '1212',

       roomType: 'meeting',

       availability: true

   },

   {

       roomNo: '1212',

       roomType: 'meeting',

       availability: true

   },

   {

       roomNo: '1212',

       roomType: 'meeting',

       availability: true

   },

   {

       roomNo: '1212',

       roomType: 'meeting',

       availability: true

   },

   {

       roomNo: '1212',

       roomType: 'game',

       availability: true

   },

   {

       roomNo: '2323',

       roomType: 'sleeping',

       availability: false

   }

];



var url = window.location.href;

id = extractId(url);

var currentRooms = [];

for (var i=0; i<rooms.length; i++){

   if (rooms[i].roomId == 1) {

       currentRooms.push(rooms[i])

   }

}

//var currentTitle = "meeting Room";

//document.getElementById('room-category').innerHTML(currentTitle)

var roomhtml="";

for (var i=0; i<currentRooms.length; i++) {

   roomhtml += "<td>" + currentRooms[i].roomNo + "</td>";

   if(currentRooms[i].availability == true) {

       roomhtml += "<td>available</td>"

   } else {

       roomhtml += "<td>not available</td>"

   }

}

document.getElementById('list-rooms').innerHTML = roomhtml



function extractId(url){

   return url.substring(url.indexOf('=') + 1)

};

}