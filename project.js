const NOVASTART=()=>{

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

            <p>Contact Us</p>

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