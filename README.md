<h1 align=center>Shoppers' Buddy</h1>

**Shoppers' Buddy** is a ***beacon-enabled app*** for malls to enhance the user experience of the customers as well as increase the brand awareness of the stores present at the mall. We aim to do this by installing beacons throughout the mall, and then by tracking the users' activity when they go around the mall. The app also has features for **parking assistance** and **personalised offers** for each customer. 

## Features
The mall owner releases the app in the app store for users to install. Beacons are installed throughout the mall (inside the stores and in the corridors). The app users can **view the stores' information** in the app whenever they want. This information includes the description of the store, various discounts and offers they have and also the coarse location of the store. 

The **offers are recommended** using the users' recent activity as well as by considering users similar to them and also their inner circle. The recommendation system is built using **collaborative filtering** and **cosine similarity**. The users will also receive priority notifications for their preferred stores. 

A **parking assistance** facility is also built in the app. The users can view the number of spots left in the parking lots even before they arrive. Also, the users can receive notifications with the same information when they arrive at the entrance of the parking lot. This information is pushed to their notification when the app detects that the user is about to enter the parking lot. 

**Loyalty programs** are also possible with the app. Whenever a user goes into a store, the app will detect the beacon and log the visit by a person. Thus when the user visits a store multiple times, he is eligible for a discount. This incentivizes the customers to come more often. 

## Folder structure
- **WebPortal**: The web portal allows the store owners to edit their store's information and also update their offers. 
- **ClientApp**: This folder contains the client app (Android) that will be used by the users at the mall.
- **Recommendation**: Contains the recommendation algorithms and data. 

## Technologies used
- **Java (Android Studio)**
- **Firebase**
- **HTML, CSS, JS**
- **Python** 

