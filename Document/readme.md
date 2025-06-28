Calculating Family Expenses Using ServiceNow
Project Objective
To develop a ServiceNow-based system that helps track and manage family expenses efficiently with categorized data, budgeting, and reports.
Project Steps and Code
1. Setting Up ServiceNow Instance
Go to https://developer.servicenow.com, sign up, create a Personal Developer Instance, and choose the latest version.
2. Creation of New Update Set
Navigate to: System Update Sets → Local Update Sets → New
Example:
•	Name: FamilyExpensesUpdate
•	Description: Update set for managing family expenses system
3. Creation of Tables
A. Family Members Table
•	Table Name: u_family_member
•	Fields:
Name (String)
Relation (String)
Age (Integer)
Income (Currency)
B. Daily Expenses Table
•	Table Name: u_daily_expenses
•	Fields:
Date (Date)
Category (Choice: Food, Rent, etc.)
Amount (Currency)
Notes (String)
Family Member (Reference to u_family_member)
4. Creating Relationships
Create a reference field in u_daily_expenses table pointing to u_family_member to establish a one-to-many relationship.
5. Configuring Related List on Family Expenses
Go to: Family Member → Form Design → Related Lists tab → Add: Daily Expenses.
6. Creation of Business Rules
Navigation: System Definition → Business Rules → New
Example: Auto-Set Date
Script:

(function executeRule(current, gsn) {
    if (!current.date)
        current.date = new GlideDate();
})(current, gsn);

7. Configure the Relationship (Advanced)
You can add a calculated field or create a report to summarize total expenses per member.
Summary
Tables: u_family_member, u_daily_expenses
Fields: Name, Age, Income, Date, Category, Amount, etc.
Business Rule: Auto-date on insert
Reports: Optional summary per member

