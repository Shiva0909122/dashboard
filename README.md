# **Social Media DashBoard**

## **Overview**
This project introduces enhanced analytics and account management features, providing users with detailed insights and an intuitive interface to manage their accounts.  
The Social Media Dashboard is a more complex project that involves building a web application for monitoring social media activity. It allows users to view and analyze data from multiple social media platforms. 
This project will teach you how to work with charts and graphs, manage large datasets, and implement real-time updates.

Key improvements include:  
- A new **AnalyticsModal** component for detailed analytics.
- A new **AccountsModal** component for managing connected accounts.
- Updates to the **QuickActions** component to support modal functionality seamlessly.

---

## **Features**

### **1. AnalyticsModal**
Provides users with in-depth analytics, including:  
- **Total Engagement Metrics**: Overview of user interactions.  
- **Average Engagement Rate**: Calculated performance average.  
- **Platform-Specific Performance**: Detailed insights by platform (e.g., web, mobile).  
- **Visual Engagement Indicators**: Graphical representation of data.  
- **Growth Trends**: Trends over time for engagement metrics.

### **2. AccountsModal**
Allows users to manage their connected accounts effectively:  
- **List of Connected Accounts**: View all linked accounts.  
- **Current Active Account Indicator**: Displays the active account.  
- **User Profile Information**: Quick access to profile details.  
- **Option to Add New Accounts**: Easily add more accounts to the system.

### **3. QuickActions Updates**
Enhanced for better modal handling:  
- **View Analytics**: Opens the **AnalyticsModal** with all metrics.  
- **Manage Accounts**: Opens the **AccountsModal** for account management.  
- **Authentication State Checks**: Ensures secure and authenticated access to features.

---

## **Installation**

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Development Server**  
   ```bash
   npm start
   ```

4. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000`.

---

## **Usage**

1. **Sign Up / Log In**  
   - Create an account or log in with your credentials.

2. **View Analytics**  
   - Click on the **"View Analytics"** button in the **QuickActions** section to open the analytics dashboard.

3. **Manage Accounts**  
   - Click on the **"Manage Accounts"** button in the **QuickActions** section to view and manage accounts.

---

## **Testing the Features**

### **Steps to Test**
1. **Sign up for a New Account**  
   - Use the registration form to create a new account.

2. **Log in**  
   - Log in with your new account credentials.

3. **View Analytics**  
   - Click **"View Analytics"** to see a detailed dashboard with metrics and visualizations.

4. **Manage Accounts**  
   - Click **"Manage Accounts"** to access the account management modal.

---

### Dashboard View
  - ![image](https://github.com/user-attachments/assets/e8ddf849-47f8-4c75-b80d-c61a2d9ce946)
### Live project
( https://socail-media-dashboard.netlify.app/ )
---

## **Future Improvements**
- Add filters to analytics for custom date ranges.
- Enable exporting analytics data as CSV.
- Introduce account-specific analytics views.
- Add support for integrating third-party account authentication.
