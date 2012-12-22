function getJSON() {
      $.ajax({
          url: '/data.json',
          dataType: 'json',
          success: function(data) {
              cpu = data['cpu'];
              mem = data['mem'];
              netrx = data['net'][0];
              nettx = data['net'][1];
          }
      });
};
