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

            <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEMENUICON}"/>

            <img id='MenuClose' onclick='MENUCLOSE()' class="RightIcon" src="${WHITECLOSEICON}"/>

        </header>

        <div class='TopNav' id='Menu' >

            <p>About Us</p>

            <p>Our Projects</p>

            <p onclick='CONTACTUSPAGEROUTER()'>Contact Us</p>

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

            <img class='RightIcon' src='${WHITEPHONEICON}'/>

        </header>

        <br><br>

        <h1>Fill the Form Below</h1>

        <input class='RoundInput' placeholder='Enter Your Name'/>

        <input class='RoundInput' placeholder='Enter Your Email'/>

        <textarea placeholder='Compose Your Message'></textarea>

        <button class='SendButton'>Send Message</button>

        <br><br>

        <h3>OR</h3>

        <br>

        <div id='ContactHolder' class='TopNav'>

            <img class='Icon' src='${WHITEINSTAGRAMICON}'/>

            <img class='Icon' src='${WHITEWHATSAPPICON}'/>

            <img class='Icon' src='${WHITEFACEBOOKICON}'/>

            <img class='Icon' src='${WHITEGMAILICON}'/>
        
        </div>

        <br><br>

    `);

};