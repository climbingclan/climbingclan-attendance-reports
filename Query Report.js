const scriptProperties = PropertiesService.getScriptProperties();

const server = scriptProperties.getProperty('cred_server');
const port = parseInt(scriptProperties.getProperty('cred_port'), 10);
const dbName = scriptProperties.getProperty('cred_dbName');
const username = scriptProperties.getProperty('cred_username');
const password = scriptProperties.getProperty('cred_password');
const url = `jdbc:mysql://${server}:${port}/${dbName}`;
const apidomain = scriptProperties.getProperty('cred_apidomain');
const apiusername = scriptProperties.getProperty('cred_apiusername');
const apipassword = scriptProperties.getProperty('cred_apipassword');


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

