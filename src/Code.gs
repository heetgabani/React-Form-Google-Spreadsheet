function doPost(e) {
  Logger.log(e);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var newRow = sheet.getLastRow() + 1;
  var rowData = [];
  rowData.push(new Date());
  rowData.push(e.parameter.name);
  rowData.push(e.parameter.email);
  rowData.push(e.parameter.phone);
  rowData.push(e.parameter.message);
  sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  return ContentService.createTextOutput("Success").setMimeType(
    ContentService.MimeType.TEXT
  );
}
