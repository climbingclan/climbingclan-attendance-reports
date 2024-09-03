function reportBreakdown() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();

 let cell = setupCell("Dashboard","B4")
 let sheet = setupSheet("Attendance Breakdown")

 var results = stmt.executeQuery('select b.nickname "FB Name",  b.id "user ID", b.stats_attendance_signups_cached "Signups", b.stats_attendance_attended_cached "Attended", b.stats_attendance_cancelled_cached "Cancelled", b.stats_attendance_latebail_cached "Late Bail", b.stats_attendance_noregistershow_cached "No register Show", b.stats_attendance_noshow_cached "NoShow" ,b.stats_attendance_duplicate_cached "Duplicate", b.stats_attendance_inprogress_cached "In Progress"  from wp_member_db b WHERE FROM_UNIXTIME(b.wc_last_active) >= DATE_SUB(CURDATE(), INTERVAL 90 day) AND cc_member="yes" order by CAST(b.stats_attendance_attended_cached AS UNSIGNED INTEGER) DESC');

 appendToSheet(sheet, results);
 results.close();
 stmt.close();
} 
