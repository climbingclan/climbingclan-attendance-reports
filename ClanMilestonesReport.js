
function reportMilestonesReport() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  ///var cell = sheet.getRange('B4').getValues();

// Volunteer Report
//

 var results = stmt.executeQuery('select b.nickname as "FB Name", \
b.stats_volunteer_for_numerator_cached as "Number of Times Volunteered", \
b.stats_volunteer_for_denominator_cached as "Attended", \
b.cc_member as "Member", \
cc_compliance_last_date_of_climbing as "Last Attended Climbing", \
b.committee_current as "Committee",  \
b.scores_volunteer_score_cached as "Receptiveness Score", \
b.scores_volunteer_reliability_score_cached as "Volunteering Reliability", \
b.scores_attendance_reliability_score_cached as "Attendance Reliability", \
b.id as "User ID" \
from wp_member_db b \
where cc_compliance_last_date_of_climbing is not null and cc_compliance_last_date_of_climbing >= DATE_SUB(CURDATE(), INTERVAL 4 MONTH) \
order by CAST(b.stats_volunteer_for_numerator_cached AS UNSIGNED INTEGER) DESC, CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC \
limit 200');
// WHERE FROM_UNIXTIME(b.wc_last_active) >= DATE_SUB(CURDATE(), INTERVAL 90 day)
 //FROM_UNIXTIME(b.wc_last_active) >= DATE_SUB(CURDATE(), INTERVAL 90 day)
  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Milestone Report');
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


//ScriptApp.newTrigger('readData')
//.timeBased()
//.everyMinutes(30)
//.create();
