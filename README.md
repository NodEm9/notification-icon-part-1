# Notification-icon-part-1

## An example of Vanilla JS Toast 

- This code create a notification icon.

### Set Attribute
This function iconAttrProperty() sets the **tooltip Atrribute**, a default notification message which will only display when icon attribute is/sets to null or undefined in the getNot() function. It is then use in getNot() function to replace the undefined notification message.   

![Screenshot-2](https://user-images.githubusercontent.com/42060362/160286844-16c7cc5a-009c-4807-88be-86c5475dcee0.jpg)


### getNot()

This function calls both the iconAtrrProperty() and msgArrays. Both objects takes the function's parameter as its argument, substitutes incoming notification message created by the **Notication** class as well as the iconAtrrProperty() function.


![Screenshot-1](https://user-images.githubusercontent.com/42060362/160286042-c0754438-991d-4187-89a5-c3cd499f8df8.jpg)

### myMethod

The myMethod() function holds the hard coded notification messgae that is being pushed to msgArrays and makes it available in getNot() function that fires as notifiction icon is click. With this we can demonstrate a test of how the notification icon will work in the end. Its setting getNot() as a parameter value which has also a parameter value of its own the hard coded message array **msgArrays.createNot**


![Screenshot-3](https://user-images.githubusercontent.com/42060362/160288177-72c5f595-0032-4752-93a5-a450bda2249f.jpg)



