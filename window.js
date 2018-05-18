$(() => {

  $('#working-button').bind('click', function(){
    $('#image-div').attr('src', 'giphy.gif')
  })

  $('#danger-button').bind('click', function() {
    $('#image-div').attr('src', 'stat.png')
    setTimeout(alertSystems(), 10000);
  })

  function alertSystems() {
    var url = 'https://freshfields.freshpipe.co/work_orders'
    var body = {
      "external_id": Math.floor(Math.random()*1000),
      "status": 1,
      "priority": 4,
      "description": "IoT Device Malfunctioned.",
      "job": {
        "name": "Fix IoT device",
        "description": "Fix the malfunctioned IoT Device",
        "duration": 2,
        "type": 2
      },
      "contact": {
        "name": "IoT Asset - 8sa6G1",
        "contact_no": "9891523111",
        "email": "8sa6G1@devices.com",
        "addresses":[]
      },
      "source": {
      "url": "starkindustries.us/issues",
      "helpdesk": 3
      },
      "address": {
        "door_no": "Block B",
        "address_1": "Stark Industries",
        "city": "San Francisco",
        "state": "California",
        "zip_code": "67231",
        "primary": true,
        "contact_id": 6
      }
    }
    $.post(url, JSON.stringify(body), function(data, status){
        alert("OOPS!!! \nSeems like an issue with the System. But, don't worry, our SPEEDSTERS are on the way!\n (Issue ID: " + data.id + ')');
    }) 
  }
})

