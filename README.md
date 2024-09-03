# Project Name

This project appears to be a set of Google Apps Script functions for managing and reporting on attendance, volunteering, and member data, likely for a club or organization.

## File Descriptions

### Attendance and Volunteer Reports

- **Attendance Breakdown.js**: Likely provides a detailed breakdown of attendance data.
- **Attendance Report.js**: Generates a report on overall attendance.
- **ClanMilestonesReport.js**: Possibly creates a report on milestones achieved by clans or groups within the organization.
- **Member Volunteers.js**: Likely reports on members who volunteer.
- **Members Attendance.js**: Probably generates attendance reports for members.
- **Non Member Volunteers.js**: Likely reports on volunteers who are not members.
- **Non-members Attendance.js**: Probably tracks attendance for non-members.
- **Non-members who Volunteer Attendance.js**: Likely combines data on non-member volunteers and their attendance.
- **Overnight Volunteers.js**: Possibly reports on volunteers for overnight events or shifts.
- **Thursday Volunteers.js** and **Wednesday Volunteers.js**: Likely report on volunteers for specific days of the week.
- **Volunteer Breakdown.js**: Probably provides a detailed analysis of volunteer data.
- **Volunteer Report.js**: Generates an overall report on volunteering activities.

### Utility Files

- **Query Report.js**: Likely a utility for running and reporting on database queries.
- **appsscript.json**: Configuration file for the Google Apps Script project.

### Core Functionality

- **helper functions.js**: Contains utility functions used across the project:
  - `appendToSheet(sheet, results)`: Appends data to a specified sheet.
  - `setNumberFormat(sheet, cellrange, format)`: Sets the number format for a specified range in a sheet.
  - `setupSheet(name)`: Creates or retrieves a sheet with the given name and clears its formatting.
  - `setupCell(name, range)`: Retrieves the values from a specified range in a named sheet.

- **myPingScoresStats.js**: Handles user statistics and scores:
  - `myPingScoresStats(user)`: Main function for processing user stats.
  - `updateStatsOrScores(user, isStats)`: Updates either stats or scores for a user in a MySQL database.

- **pokeToWordPress.js**: Interacts with WordPress:
  - `pokeToWordpress(data, user_id)`: Sends data to a WordPress site, likely updating user information.

- **updateStatsScoreCache.js**: Probably updates a cache of user stats and scores for quicker access.

## Project Overview

This project appears to be a comprehensive system for managing member and volunteer data for an organization. It likely integrates with Google Sheets for data storage and reporting, and with WordPress for web presence. The system can track attendance, volunteering activities, and possibly game or activity scores (based on the 'ping scores' functionality).

Key features seem to include:
1. Detailed attendance tracking for both members and non-members
2. Volunteer management, including specific day volunteers and overnight volunteers
3. Reporting capabilities for various aspects of membership and volunteering
4. Integration with a MySQL database for storing user stats and scores
5. WordPress integration for possibly displaying or updating member information on a website

The project uses Google Apps Script, suggesting it's deeply integrated with Google Workspace (formerly G Suite) tools, particularly Google Sheets for data management and reporting.
