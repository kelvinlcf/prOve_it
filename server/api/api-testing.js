APItesting = {
  handleRequest: function (context, method) {
    var params = context.request.query;
    APItesting.methods[method](context, params);
  },

  methods: {
    GET: function (context, params) {


      var token = params['token'];
<<<<<<< HEAD
      var company_name = "AAC.AX";
      var topic = "Cash Rate";
      var lower_range = -6;
      var upper_range = 5;


    var stocks = StockPrices.find({company_name: company_name, token:token}, {fields: {'date':1, 'cum_return':1, 'flat_value':1}}).fetch();
    var chartData = [];
    var guides = [];

    // events
    // var events = StockEvents.find({token: token, company_name: company_name, topic: topic, value: {$gt : 0}}, {fields: {'date':1},sort:{date:-1}}).fetch(); 
    // console.log(events);


    // events.forEach(function(c) {
    //   var dateLower = new Date(c.date);
    //   dateLower.setDate(dateLower.getDate() + lower_range);
    //   var dateUpper = new Date(c.date);
    //   dateUpper.setDate(dateUpper.getDate() + upper_range);

    //   // console.log(c.date);
    //   // console.log(dateLower);
    //   // console.log(dateUpper);
    //   var significantDays = StockPrices.find({company_name: company_name, token:token, date: {$gte : dateLower, $lte : dateUpper}}, {fields: {'cum_return':1}, sort: {cum_return:1}}).fetch();
    //   // console.log(significantDays);
    //   if (significantDays !== undefined) {
    //     var hi = significantDays[Object.keys(significantDays)[Object.keys(significantDays).length - 1]].cum_return;
    //     var lo = significantDays[Object.keys(significantDays)[0]].cum_return;
    //     // console.log(hi);
    //     // console.log(lo);
    //     //fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]] 
    //     var p = (hi - lo);
    //     // console.log(p);

    //     var significance = "Non-significant event";
    //     if (p > 0.02) {
    //       significance = "Significant event";
    //       guides.push({
    //         "fillAlpha": 0.30,
    //         "fillColor": "#ff6600",
    //         "lineColor": "#ff6600",
    //         "lineAlpha": 0.9,
    //         "label": topic,
    //         "balloonText": significance,
    //         "labelRotation": 90,
    //         "above": true,
    //         "date": dateLower,
    //         "toDate": dateUpper,
    //       });
    //     } else {
    //       guides.push({
    //         "fillAlpha": 0.30,
    //         "fillColor": "#ff0000",
    //         "lineColor": "#ff0000",
    //         "lineAlpha": 0.9,
    //         "label": topic,
    //         "balloonText": significance,
    //         "labelRotation": 90,
    //         "above": true,
    //         "date": dateLower,
    //         "toDate": dateUpper,
    //       });
    //     }
    //   }
    // });

    // drawGraph(stocks, guides);

      API.utility.response(context, 200, stocks);
=======
      // var company = "AAC.AX";
      // var topic = "Cash Rate";
      // var lower_range = -5;
      // var upper_range = 5;

      var string2num = {
        'JAN' : 1,
        'FEB' : 2,
        'MAR' : 3,
        'APR' : 4,
        'MAY' : 5,
        'JUN' : 6,
        'JUL' : 7,
        'AUG' : 8,
        'SEP' : 9,
        'OCT' : 10,
        'NOV' : 11,
        'DEC' : 12
      }


      var checkedDate = "01-JAN-2015";

      var regex = /^([0-9]{2})-([a-zA-Z]{3})-([0-9]{4})/;
      var matches = regex.exec(checkedDate);
      var date = matches[1];

      var month = string2num[matches[2]] - 1;
      var year = matches[3];
      var wantedDate = new Date(Date.UTC(year, month, date, 1));


      API.utility.response(context, 200, wantedDate);
>>>>>>> 56f04ec531c13ba9e43036dcd764b68c2face46f
    }
  },
};





