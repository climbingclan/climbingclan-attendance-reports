function updateStatsScoreCache(user) {

// Note start time
var startTime = new Date();

  var sconn = Jdbc.getConnection(url, username, password);
  var sstmt = sconn.createStatement();

 //  var scores_results = sstmt.executeQuery("SELECT DISTINCT id FROM wp_member_db WHERE scores_and_stats_cache_last_updated IS NULL OR scores_and_stats_cache_last_updated = '' OR scores_and_stats_cache_last_updated / 1000 < UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 1 Month)) OR FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= FROM_UNIXTIME(cc_attendance_noted_date) OR FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(cc_compliance_last_date_of_climbing) OR FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= FROM_UNIXTIME(wc_last_active) OR scores_volunteer_score_cached > 100 OR stats_attendance_overnight_attended_cached IS NULL OR stats_attendance_indoor_wednesday_attended_cached IS NULL OR scores_attendance_reliability_score_cached IS NULL ORDER BY CAST(stats_volunteer_for_denominator_cached  as UNSIGNED INTEGER) desc ,CAST(scores_volunteer_score_cached as UNSIGNED INTEGER) desc, DATE(cc_attendance_noted_date) DESC, DATE(cc_compliance_last_date_of_climbing) DESC, CAST(stats_attendance_attended_cached AS UNSIGNED INTEGER) DESC, scores_and_stats_cache_last_updated DESC, id ASC LIMIT 500");

var scores_results = sstmt.executeQuery("SELECT DISTINCT id FROM wp_member_db WHERE scores_and_stats_cache_last_updated IS NULL OR FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= FROM_UNIXTIME(cc_attendance_noted_date) OR FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(cc_compliance_last_date_of_climbing) OR FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= FROM_UNIXTIME(wc_last_active) OR scores_and_stats_cache_last_updated / 1000 < UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 day))  ORDER BY  cc_attendance_noted_date desc, scores_and_stats_cache_last_updated Asc LIMIT 500");

// OR scores_volunteer_reliability_score_cached IS NOT NULL AND CAST(scores_volunteer_reliability_score_cached as UNSIGNED INTEGER) < 100 AND  scores_and_stats_cache_last_updated / 1000 < UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 1 hour))

//console.log(scores_results);
 //       var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(cc_compliance_last_date_of_climbing))  OR scores_and_stats_cache_last_updated="" OR scores_and_stats_cache_last_updated IS NULL order by id desc LIMIT 30');
  //var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(NOW() - INTERVAL 14 DAY)  OR scores_and_stats_cache_last_updated="" OR scores_and_stats_cache_last_updated IS NULL) order by id asc LIMIT 20');
 //var scores_results = sstmt.executeQuery('select id from wp_member_db b join wp_member_db_stats a on a.user_id = b.id where  (b.stats_attendance_duplicate_cached<>a.attendance_duplicate) order by scores_and_stats_cache_last_updated asc LIMIT 10');


// var scores_results = sstmt.executeQuery('select id from wp_member_db b join wp_member_db_stats a on a.user_id = b.id where  (b.stats_attendance_duplicate_cached<>a.attendance_duplicate) order by scores_and_stats_cache_last_updated asc LIMIT 10');

//FROM_UNIXTIME(b.wc_last_active,"%d-%m-%Y")


 //var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where stats_attendance_outdoor_thursday_attended_cached IS NULL order by id asc LIMIT 30');
  //select id,b.stats_attendance_signups_cached, a.attendance_signups from wp_member_db b join wp_member_db_stats a on a.user_id = b.id where b.stats_attendance_signups_cached<>a.attendance_signups;

//var scores_results = sstmt.executeQuery('select "124"');



while (scores_results.next()) {
  scores_arr = [];
  for (var col = 0; col < 1; col++) {
    scores_arr.push(scores_results.getString(col + 1));
  }
  console.log(scores_arr[0]);
  
  // Note current user
  var currentUser = Session.getActiveUser().getEmail();

  myPingScoresStats(scores_arr[0]);

  // Check start time and current user
  var elapsedTime = (new Date() - startTime) / (1000 * 60); // Elapsed time in minutes
  if (currentUser == "timmydobson@gmail.com" && elapsedTime > 3) {
    break; // Finish if more than 3 minutes have elapsed for email1
  } else if (currentUser == "email@tdobson.net" && elapsedTime > 28) {
    break; // Finish if more than 25 minutes have elapsed for email2
  }
}

}
