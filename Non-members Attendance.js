
function reportNonMemberAttendanceData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  var cell = sheet.getRange('B4').getValues();

// Attendance Report
//

 var results = stmt.executeQuery('SELECT b.nickname "FB Name", stats_attendance_attended_cached "Attended", stats_volunteer_for_numerator_cached "Volunteer", scores_volunteer_score_cached "Receptiveness", cc_compliance_last_date_of_climbing "Last climbed", `skills-belaying` "Belay?", b.cc_member "Member?", CASE WHEN (DATEDIFF(cc_compliance_last_date_of_climbing, cc_compliance_first_date_of_climbing) <= 90 AND DATEDIFF(cc_compliance_last_date_of_climbing, cc_compliance_first_date_of_climbing) >= -90) THEN "yes" ELSE "no" END AS "compliant?",a.User_id "user ID" FROM wp_member_db_stats c JOIN wp_member_db b ON c.user_id=b.id JOIN wp_member_db_scores a on a.user_id=b.id WHERE DATE(cc_compliance_last_date_of_climbing) >= DATE_SUB(CURDATE(), INTERVAL 90 day) AND (cc_member="" OR cc_member IS NULL OR cc_member="expired") ORDER BY CAST(`scores_attendance_score_cached` AS UNSIGNED INTEGER) DESC LIMIT 50');
  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Non-member Attendance Report');
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
