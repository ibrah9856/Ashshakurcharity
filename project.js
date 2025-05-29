const NOVASTART=()=>{

   ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

        DISPLAY("",`

        <header>

            <img class="CompanyLogo" src="https://ibrah9856.github.io/Ashshakurcharity/Assets/logo.jpg">
        
            <p class='CompanyName'>Ash Shakur Charity and Orphanage Aid</p>

            <p class='Motto'>"Helping the poor orphans and the needy people"</p>

            <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEMENUICON}"/>

            <img id='MenuClose' onclick='MENUCLOSE()' class="RightIcon" src="${WHITECLOSEICON}"/>

        </header>

        <div class='TopNav' id='Menu' >

            <p>About Us</p>

            <p onclick='PROJECTPAGEROUTER()'>Our Projects</p>

            <p onclick='CONTACTUSPAGEROUTER()'>Contact Us</p>

        </div>

        <div class='TopNav' id='DonateSection'>

            <p class='Donate'>Donate</p>
            
        </div>

        <div class='MainImage'>
        
            <img src='https://ashshakurcharity.org/Assets/waterwells/waterwellmain.jpg'/>

            <footer class='MainFooter'>

                <p class='Message'>Our Prophet Muhammed is reported to have said ,"<b class='SubMessage'>The Best Form of Charity is to give someone water to drink.</b> "</p>
            
            </footer>
        
        </div>

        <br><br>

        <h1>With Regards</h1>

        <br>

        <p class='LeftText'>Ash Shakur Charity and orphanage aid is a nonprofit organization dedicated to transforming lives by addressing the needs of orphans, underprevileged children, and vulnerable communities. With a mission to provide access to water and sanitation, food and clothing, Qurbani and aqeeqa, Ramadan programs, education, healthcareand shelter, we aim to create sustainable solutions that empower individuals and fosterhope.</p>

        <br>

        <p class='LeftText'>Since our inception, we have encouted countless lives through provideing education, supporting healthcare initiatives, and providing safe havns to those in need. Every donation and volunteer efforts brings closer to a word where every child has the opportunity to thrive.</p>

        <br>

        <h1 class='Season'>QURBAN</h1>

        <div class='SlideDiv'>

            <img src=''/>
        
        </div>

    `);

};

const MENUOPEN=()=>{

    var MENU=NAMING('#MenuOpen');

    var MENUCLOSER=NAMING('#MenuClose');

    var MENUDRAWER=NAMING('#Menu');

    CLICK(MENU,()=>{

        STYLED(MENUDRAWER,'display','inline-flex');

        STYLED(MENUCLOSER,'display','block');

        STYLED(MENU,'display','none');

    });

};

const MENUCLOSE=()=>{

    var MENU=NAMING('#MenuOpen');

    var MENUCLOSER=NAMING('#MenuClose');

    var MENUDRAWER=NAMING('#Menu');

    CLICK(MENUCLOSER,()=>{

        STYLED(MENUDRAWER,'display','none');

        STYLED(MENUCLOSER,'display','none');

        STYLED(MENU,'display','block');

    });
 
};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
            
            <p class='CompanyName'>Ash Shakur Charity and Orphanage Aid</p>

            <img class='RightIcon' onclick='CALLUS()' src='${WHITEPHONEICON}'/>

        </header>

        <div class='TopNav' id='DonateSection'>

            <p class='Donate'>Donate</p>
            
        </div>

        <br><br>

        <h1>Fill the Form Below</h1>

        <br>

        <input class='RoundInput' placeholder='Enter Your Name'/>

        <input class='RoundInput' placeholder='Enter Your Email'/>

        <textarea placeholder='Compose Your Message'></textarea>

        <button class='SendButton'>Send Message</button>

        <br><br>

        <h3>OR</h3>

        <br>

        <div id='ContactHolder' class='TopNav'>

            <img class='Icon' src='${WHITEINSTAGRAMICON}' onclick='INSTAGRAMUS()' />

            <img class='Icon' src='${WHITEWHATSAPPICON}' onclick='WHATSAPPUS()' />

            <img class='Icon' src='${WHITEFACEBOOKICON}' onclick='FACEBOOKUS()' />

            <img class='Icon' src='${WHITEGMAILICON}' onclick='EMAILUS()'/>
        
        </div>

        <br><br>

        <p class='PoweringCompany' onclick='POWERUS()'>Powered by Elite Robust Ontology</p>

        <br>

    `);

};

const POWERUS=()=>{

    WEBSITE('https://eroinnovations.site');

};

const CALLUS=()=>{

    CALL('+256705665894');

};

const EMAILUS=()=>{

    GMAIL('ashshakurcharityandorphanageai@gmail.com');

};

const WHATSAPPUS=()=>{

    WEBSITE('https://wa.me/256789467876');

};

const INSTAGRAMUS=()=>{

    WEBSITE('https://www.instagram.com/ash_shakur_charity_?igsh=ZXlrMmNqc3poYTh6');

};

const FACEBOOKUS=()=>{

    WEBSITE('https://www.facebook.com/profile.php?id=100080811854731&mibextid=ZbWKwL');

};

const PROJECTPAGEROUTER=()=>{

    ROUTE(' ',PROJECTPAGE,'HOMEPAGE');

};

const PROJECTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
            
            <p class='CompanyName'>Ash Shakur Charity and Orphanage Aid</p>

            <img class='RightIcon' onclick='CALLUS()' src='${WHITEPHONEICON}'/>

        </header>

        <div class='TopNav' id='DonateSection'>

            <p class='Donate'>Donate</p>
            
        </div>

    `);

};