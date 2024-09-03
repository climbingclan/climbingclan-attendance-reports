
function reportAttendanceData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


let cell = setupCell("Dashboard","B4")
let sheet = setupSheet("Attendance Report")


 var results = stmt.executeQuery('select b.nickname "FB Name", b.scores_attendance_score_cached "Attendance Score", b.`cc_member` "Member", FROM_UNIXTIME(b.wc_last_active,"%d-%m-%Y") "Last on website",b.`committee_current` "Committee", b.stats_attendance_signups_cached "Signups",  id "user ID" from wp_member_db b WHERE FROM_UNIXTIME(b.wc_last_active) >= DATE_SUB(CURDATE(), INTERVAL 90 day) order by CAST(scores_attendance_score_cached AS UNSIGNED INTEGER) DESC');

appendToSheet(sheet, results);

results.close();
stmt.close();

} 
