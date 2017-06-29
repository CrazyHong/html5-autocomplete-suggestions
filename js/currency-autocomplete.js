$(function(){
  var currencies = [
    { value: '人民币', data: '￥' },
    { value: '美元', data: '$' },
    { value: 'dollar', data: '$' },
    { value: '英镑', data: '￡' },
    { value: 'asd', data: '$' },
    { value: 'ppt', data: '$' },
    { value: 'dadb', data: '$' },
    { value: 'ab', data: '$' },
    { value: 'basdfd', data: '$' },
    { value: 'aaasdf', data: '$' },
    { value: 'eee', data: '$' },
  ];
  
  // 设置autocomplete从数组currencies拉取数据
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>货币名称:</strong> ' + suggestion.value + ' <br> <strong>符号:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});