### Submit a new design

Currently, the process to submit a design is not optimal. We would deeply appreciate help making a better system.

Here are some basic steps:
- The github repo is at https://github.com/bluehat/lifemaker
- Edit the yml files at https://github.com/bluehat/lifemaker/tree/master/src/yml
  - Put the device in devices.yml 
    - This is also the appropriate space to document non-manufactured parts
    - Also the place to document assembly
  - Put each manufactured part which you need to make it in parts.yml
    - This is the part which explains what equipment you need to make each part
    - All dimensions are in mm
  - Put each designation in destinations.yml
    - Include both the devices and the parts they accept
    - Ideally, please list a makerspace or a local coordination point rather than dropping stuff on the front porch of a hospital
    - Please include both a mail location and a no-contact drop location
- Submit a pull request

If you do not have time for this, the slower way is to wait for one of our volunteers to have time to do it. Please document as much of this as possible and [send it to](mailto:makers@lifemaker.org?subject=New%20Design).