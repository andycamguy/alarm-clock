# Terminology 
# what is a clock? 
A clock is a device to tell the time. Time is a relativistic term to keep track of how long till the sun sets and rises. The earth spins at a semiconstant rate while it orbits around the sun, giving constant 

# three parts of a clock
## Hours
24 hours on a clock either in 2 forms
* 1. Military time (00:00 through 23:59)
* 2. Standard clock (12:00 am - 11:59 am/12:00pm  - 11:59 pm)
## Minutes
60 minutes in an hour (00- 59)

## Seconds
 60 seconds in a minute 
 3600 seconds in an hour
 
 # what is an alarm clock?
 
 A clock that can assign memory to send an output at a specific mapping of the time.
 For example, an alarm to be set at 7:50 am when your class is at 8:00 am.
 
## Procedural
BEGIN
INIT
RENDER
END
## Global Variables
Current Time
Alarm Time

## Functional
BEGIN
INIT // calls the start function
RENDER // grabs the variables and puts them together, runs every 1000ms 
END

## function
Init() { //declares the variables
//sets up future time based on current time

}
Render()
{
//display the clock based on the current time
}

## OOP
BEGIN
INIT // calls the start function
RENDER // grabs the variables and puts them together, runs every 1000ms 
END

### Objects 
Clock
{
Currenttime
hour: current hour
minute: current minute
second: current second
}

Alarm Clock
{
Currenttime
hour: current hour
minute: current minute
second: current second
}

