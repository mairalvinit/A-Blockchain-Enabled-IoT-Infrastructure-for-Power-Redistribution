// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_TEMPLATE_NAME "YOUR_TEMPLATE_NAME"
#define BLYNK_AUTH_TOKEN "YOUR_AUTH_TOKEN"

// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial

#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>

char auth[] = BLYNK_AUTH_TOKEN;

int bat_percentage;
int analogInPin  = 34;    // Analog input pin
int sensorValue;
float calibration = 0.40; // Check Battery voltage using multimeter & add/subtract the value

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "YOUR_WIFI_NAME";
char pass[] = "YOUR_WIFI_PASSWORD";
float voltage;



BlynkTimer timer;

BLYNK_WRITE(V0)
{
  int pinValue=param.asInt();
  digitalWrite(25,pinValue);
  }
BLYNK_WRITE(V1)
{
  int pinValue=param.asInt();
  digitalWrite(13,pinValue);
  }
  BLYNK_WRITE(V2)
{
  int pinValue=param.asInt();
  digitalWrite(26,pinValue);
  }
  BLYNK_WRITE(V3)
{
  int pinValue=param.asInt();
  digitalWrite(27,pinValue);
}
void setup()
{
  
  
  pinMode(25,OUTPUT);
   pinMode(13,OUTPUT);
    pinMode(26,OUTPUT);
     pinMode(27,OUTPUT);
  
  // Debug console
  Serial.begin(115200);

  Blynk.begin(auth, ssid, pass);

}

void loop()
{
  Blynk.run();
  sensorValue = analogRead(analogInPin);
  voltage = (((sensorValue * 3.3) / 1024) * 2 + calibration); //multiply by two as voltage divider network is 100K & 100K Resistor
  bat_percentage = mapfloat(voltage, 2.8, 4.2, 0, 100); //2.8V as Battery Cut off Voltage & 4.2V as Maximum Voltage
  if (bat_percentage >= 100)
  {
    bat_percentage = 100;
  }
  if (bat_percentage <= 0)
  {
    bat_percentage = 1;
  }
      //send data to blynk
    Blynk.virtualWrite(V4, bat_percentage);  // for battery percentage
    Blynk.virtualWrite(V5, voltage); // for battery Voltage


//    Serial.print("Battery Percentage = ");
//  Serial.println(bat_percentage);
}
float mapfloat(float x, float in_min, float in_max, float out_min, float out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
