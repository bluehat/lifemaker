## Help needed for this website

- Making this information more readable than a giant list
- Helping upload and organize documentation on how to manufacture equipment
- Helping automate as much of the coordination as possible, since human coordinators will be limited and introduce latency
- Any sort of design or aesthetic sensibilities whatsoever
- [Features](./#features)

This project is on github at https://github.com/bluehat/lifemaker

### Medical

We need medical professionals [to help us vet technology which is not yet in use.](equipment/unvetted.md)

### Coding

Please submit pull requests

lifemaker.org is made using [VueJs](https://vuejs.org/) and [vue-router](https://router.vuejs.org/). You'll need to install the [Vue CLI](https://cli.vuejs.org/guide/installation.html).

Static content is defined within [src/md](./src/md) (see [home](./src/md/home.md))

### Data
There is a lot of unstructured information in https://github.com/bluehat/lifemaker/blob/master/src/md/sources.md
It needs to be sorted and entered into the yml files at https://github.com/bluehat/lifemaker/tree/master/src/yml
 - parts.yml contains individual things which need to be manufactured, such as the front guard for face shields
 - devices.yml contains completed objects, generally made up of things listed in parts.yml, and sometimes also containing other materials. 
 - destinations.yml contains lists of places accepting devices and parts
 - sources.yml is not yet used. It will contain contact info for individuals and makerspaces willing to mail goods to healthcare providers who contact them.
 
It is very important that **only projects which are being accepted by healthcare providers are listed.** There is a lot of wishful thinking about what hospitals need, and a lot of 3D printing files which just don't work. Working only with things which healthcare providers accept provides the most basic level of usability and manufacturability possible, and we don't wish to compromise on this. 

Recipes from the FDA, WHO, and similar organizations for things like hand sanitizer are also acceptable, but **user-provided manufacturing info (such as stl files) can not be accepted unless they are currently being accepted by a healthcare provider.** This is because many print files don't work, and we are looking for ones where we have some sort of reasonable expectation that they have been debugged.

We understand that at the end of the day we are relying on volunteers and volunteer info, and that this all comes down to trust. We understand that you are clever enough to successfully lie to us. We are asking you to voluntarily support the guidelines set out here. These guidelines make it much much much easier to earn the trust of new healthcare providers, and much easier for new makers to get involved. 

**If you would like to work out new designs,** there is space at https://github.com/bluehat/lifemaker/blob/master/src/md/equipment/unvetted.md and we are happy to accept pull requests for whatever tools will help people better collaborate on the critical work of getting wonderful new designs tested and ready for broader manufacturing.
