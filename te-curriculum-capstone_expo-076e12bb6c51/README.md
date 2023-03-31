q# Change history 

 2.08 - 2/11/2022
  - Allow choice to show video or not in json file
 
 2.06 - 8/4/2021
  - Enhanchment: Make LinkedIn logo  and name clickable
 
 2.05 - 7/12/2021
  - setup Netlify as the perferred deployment method.
  - Create _redirects file to support refresh in browser without 404
 
 2.04 - 5/7/21
  - removed link, left quickLink for redirection to team page
  - link to team pages through event and window.location.replace
  - underscore for quickLink to make it look clickable
  - version in package.json in addition to data.
  - added axion to send logging information for number of visits
  - additional view for number of visits in the past 8 hours (intended for "day of" info)
 
 2.03 - 4/3/2021 

   - New feature: Search by team memeber name 
   - data.json renamed to CBUSdate.json
   - data imported in single place (App.vue, based upon name in vueX (store/index.js))
   - renamed and moved json data files and images
 
 2.02 - 3/20/20201  Joseph Zugelter  Contact@joezugelter.com  (manually added by JFulton)
  - change clickable links to student projects to target="_self" so that exisitng video link closes

  
2.01 - 2/24/2021 RSeeds (manually added by JFulton)
   - data.json modified to accept 2 new team attributes
     - "thumbnail": "<thumbnail.ext>"
       - (Optional) Student Project icon or logo image in /public folder
     - "bgcolor": "<RGB/named/#hex>"
       - (Optional) Team name background color setting
   - index.html modified to apply Google Fonts API Montserrat font pack to emulate corporate font. 
     - Campus name and title hard coded to allow for friendly tab naming rather than url friendly naming.
   - Components modified to align (*kinda*) with corporate styling
     - Grid container modified and set to 1fr 1fr with media queries adjusted accordingly
   - Foot.vue added for TE Copyright and version note display
   - Views modified to include Foot component. Print.vue layout slightly modified for plain-text display but otherwise unchanged
   - App.vue body updated with:
     - body{font-family: 'Montserrat', sans-serif; background-color: whitesmoke;}
   - public/.htaccess file was removed for netlify deployment
     - Added back for repo, but is **_unmodified_** from it's initial CBUS configuration
    
1.02 - 12/7/2020
   - Data for CBUS Cohort 12
  
1.01 - 9/30/2020
- Initial production version
- Removed previous (old) data
- Reset date for December 2020

0.23 - 8/10/2020
- LinkedIn logo with link for students

0.22 - 8/7/2020
- data error team foxtrot

0.21 - 8/3/2020
- fix for .htaccess
- fix Java Green names
- readme.md cleanup

0.20 - 8/3/2020
- redirect to home

0.19 - 8/2/2020
- Print

0.18 - 8/1/2020
- Student list adjustment

0.17 - 8/1/2020
- CBUS data first draft

0.16 - 7/29/2020
 - alignment and mobile

0.15 - 7/29/2020
- verbiage

0.14 - 7/27/2020
- added description of randomization of teams

0.13 - 7/27/2020
- skipped

0.12 - 7/25/2020
- route
- home page for Expo event, list for list of teams

0.11 - 7/24/2020
- In cards, if second link is null, don't show it
- cbus room data and tiny.cc links
- implementation and setup notes

0.10 - 7/23/2020
- Added VueX

0.09 - 7/23/2020
- Converted to basic vue.js

0.08 - 7/22/2020
- responsive design
- .htaccess to map http to https

0.07 - 7/22/2020
- Jitsi links for main video
- CapstoneExpoJitsi

0.06 - 7/21/2020
- on-screen instructions for Zoom
- CapstoneExpoIframe

0.05 - 4/25/2020
- data from external file

0.04 - 4/25/2020
-  randomize teams

0.03 - 4/24/2020
-  data for teams in javascript

0.02 - 4/24/2020
- changed to simple html/css with iframe

0.01 - 4/24/2020
- hardcoded values into original sample code
    

# Todo

- Muitipage for data updates


# Implementation notes

- Data in data.json as a part of the website
- Web users  (desktop, table, or mobile) are required to accept that the site can make use of camera and microphone
- Mobile users are requested to download the app, launch the app, or join from the web. They should join from the web.
- Responsive design with single-column layout for phone and small format
- Tech Elevator colers for Blue and Green are #00ADEE and #8CC63F, respectively






## Preferred setup steps (using Netlify) (modified 7/12/20201 JWF)

1. Create a free account at netlify.com.

2. Setup jitsi.org meeting room for welcome center (CBUS is using CapstoneExpoCBUS)

3. Setup jitsi meeting rooms for each team. CBUS uses team name like Alpha, Brave, Charlie, etc, so we set up jitsi.org team rooms with name like TeamAlphaCBUS, TeamBravoCBUS, etc. In the data, the jitsi names should be the link name

4. (optional) Create name shorteners with tracking (bit.ly, tiny.cc, etc.) for each team meeting room to simplify gathering data about numbers of visits to each room. In the data, the name shortener names should be the quickLink name.

5. Download the vue.js application from bitbucket (https://bitbucket.org/te-curriculum/capstone_expo/). Modify the data.json file for your local location. If you created bit.ly links, use them as the main link (quickLink).

7. Type `npm run build` to generate a `dist` directory.

8. Open https://app.netlify.com in your browser and drag the `dist` directory created in step 7 into the box labeled, "Want to deploy a new site without connecting to Git? Drag and drop your site folder here".

9. The app will now be deployed with a randomly generated name. To change the name, click the Site Settings button, and then the "Change Site Name" button.



## Alternate setup steps (using a purchased domain name and SSL certificate)

1. Lease domain name (suggested source, namecheap.com). CBUS is using cbus-capstone.


2. Secure hosting (free, from freehostia.com and elsewhere)


3. Once domain name is pointed at hosting (add hosting nameservers to domain name setup), wait for DNS to resolve (2 to 72 hours) 


4. Setup jitsi.org meeting room for welcome center (CBUS is using CapstoneExpoCBUS)


5. Setup jitsi meeting rooms for each team. CBUS uses team name like Alpha, Brave, Charlie, etc, so we set up jitsi.org team rooms with name like TeamAlphaCBUS, TeamBravoCBUS, etc. In the data, the jitsi names should be the link name


6. (optional) Create name shorteners with tracking (bit.ly, tiny.cc, etc.) for each team meeting room to simplify gathering data about numbers of visits to each room. In the data, the name shortener names should be the quickLink name. In the data, teams can have a quickLink


7. Download the vue.js application from bitbucket (https://bitbucket.org/te-curriculum/capstone_expo/). 
   
8. Modify the data.json file for your local location and cohort. 
   
9. If you created bit.ly links, use them as the main link (quickLink) and the jitsi.org links and the secondary links (link).
   
10. Modify the .htacess for the selected domain names.


8. Use ftp to push the vue.js distribution for html, css, and js to server11(suggested program, filezilla)


12.  Test with http


13. Secure SSL certificate for host and test with https. Https is required for the page to be able to use the camera and microphone. Getting the certificate from the hosting provider usually simplifys the installation.


14. Total out-of-pocket cost ~$40, good for 1 year





# Questions, setup assistance, bug reports
```
John Fulton
john@techelevator.com
614-565-8382
```






