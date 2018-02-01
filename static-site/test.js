$(document).ready(function() {
  
  count = 0;
  data = {};

  // localstorage things
  
  $('#save').on('click', function() {
    localStorage.setItem('save', JSON.stringify(data));
    localStorage.setItem('count', count);
    alert('saved')
  })

  $('#clear').on('click', function() { 
    localStorage.removeItem('save');
    localStorage.removeItem('count');
    $('#list').html('');
    data = {};
    count = 0;
    alert('cleared')
  })

  function loadFromlocalStorage() {
    try {
      var obj = JSON.parse(localStorage.getItem('save'));
      data = obj;
      renderFromData(data)
      count = localStorage.getItem('count');
    } catch(err) {
      count = 0;
      data = {};
    }
  }
  
  loadFromlocalStorage();

  // regular things

  $('button').on('click', function(e) {
    e.preventDefault();
    var txt = $('#text').val();
    insertIntoList(txt, false)
    $('#text').val('');
    renderFromData(data)
  })

  function renderFromData(obj) {
    console.log(obj);
    $('#list').html('');
    var keys = Object.keys(obj);
    keys.map(function(i) {
      var content = obj[i].content;
      var done = obj[i].done;
      $('#list').append('<li data-id="' + i + 
                        '" class="' + (done ? 'done' : '') + '">' +
                        content +
                        '</li>')
    })
  }

  function insertIntoList(text, done) {
    count++;
    data[count] = { content: text, done: done };
    renderFromData(data)
  }

  $('ul').on('click', 'li', function() {
    var id = $(this).data('id');
    var curr = data[id];
    if ($(this).hasClass('done')) {
      curr.done = false; 
    } else {
      curr.done = true; 
    }
    renderFromData(data)
  })
})
