var server = '18.168.242.164';
var port = 3306;
var dbName = 'bitnami_wordpress';
var username = 'gsheets';
var password = 'eyai4yohF4uX8eeP7phoob';
var url = 'jdbc:mysql://'+server+':'+port+'/'+dbName;



function readAllData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 

let cell = setupCell("Dashboard","B4")
let sheet = setupSheet("Event Attendance")


 var results = stmt.executeQuery('select `cc_attendance` "Attendance", `order_item_name` "Event Name", cc_volunteer "Volunteered", cc_volunteer_attendance "Attended",order_created "Order Created", order_id "Order ID" FROM wp_order_product_customer_lookup where user_id in ('+ cell +') AND status="wc-completed"');
appendToSheet(sheet, results);

results.close();
stmt.close();



} 

