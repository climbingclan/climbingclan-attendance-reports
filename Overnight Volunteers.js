
function reportOvernightVolunteerReport() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  var cell = sheet.getRange('B4').getValues();

// Volunteer Report
//,

 var results = stmt.executeQuery('select b.nickname "FB Name", stats_volunteer_for_numerator_cached "number of times volunteered", b.scores_volunteer_score_cached "Receptiveness Score",b.stats_attendance_overnight_attended_cached "Overnights attended", b.`cc_member` "Member", FROM_UNIXTIME(b.wc_last_active,"%d-%m-%Y") "Last on website",b.`committee_current` "Committee",   b.id "user ID" from  wp_member_db b WHERE FROM_UNIXTIME(b.wc_last_active) >= DATE_SUB(CURDATE(), INTERVAL 30 day) AND b.stats_attendance_overnight_attended_cached<>0 order by CAST(b.stats_attendance_overnight_attended_cached AS UNSIGNED INTEGER) desc, CAST(b.`scores_volunteer_value_cached` AS UNSIGNED INTEGER) DESC LIMIT 50');
  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Overnight Volunteer Report');
 sheet.clearContents();
 var arr=[];
  for (var col = 0; col < numCols; col++) {
   arr.push(metaData.getColumnLabel(col + 1));
 }
 // https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js 
  sheet.appendRow(arr);
 while (results.next()) {
 arr=[];
 for (var col = 0; col < numCols; col++) {
   arr.push(results.getString(col + 1));
 }
 sheet.appendRow(arr);
 }
sheet.autoResizeColumns(1, numCols+1);





//close SQL
results.close();
stmt.close();



//end read data function
} 


